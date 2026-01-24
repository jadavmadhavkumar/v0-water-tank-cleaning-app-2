import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";

const http = httpRouter();

// Clerk webhook handler
http.route({
  path: "/clerk",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const payloadString = await request.text();
    const headerPayload = request.headers;

    try {
      // In production, you should verify the webhook signature
      // For now, we'll just parse the payload
      const payload = JSON.parse(payloadString);
      const { type, data } = payload;

      switch (type) {
        case "user.created":
          await ctx.runMutation(internal.users.createUser, {
            clerkId: data.id,
            email: data.email_addresses?.[0]?.email_address || "",
            fullName: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
            imageUrl: data.image_url,
          });
          break;

        case "user.updated":
          await ctx.runMutation(internal.users.updateUser, {
            clerkId: data.id,
            email: data.email_addresses?.[0]?.email_address || "",
            fullName: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
            imageUrl: data.image_url,
          });
          break;

        case "user.deleted":
          await ctx.runMutation(internal.users.deleteUser, {
            clerkId: data.id,
          });
          break;

        default:
          console.log(`Unhandled webhook type: ${type}`);
      }

      return new Response("OK", { status: 200 });
    } catch (error) {
      console.error("Webhook error:", error);
      return new Response("Error", { status: 400 });
    }
  }),
});

export default http;
