"use client"

import { useUser } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

export function AuthDebug() {
  const { user, isLoaded, isSignedIn } = useUser()

  if (process.env.NODE_ENV === "production") {
    return null
  }

  return (
    <Card className="mb-4 border-yellow-200 bg-yellow-50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm flex items-center gap-2">
          <Icons.shield className="w-4 h-4" />
          Auth Debug (Development Only)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 text-xs">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <strong>Clerk Status:</strong>
            <div className="pl-2">
              <div>• isLoaded: <span className={isLoaded ? "text-green-600" : "text-red-600"}>{String(isLoaded)}</span></div>
              <div>• isSignedIn: <span className={isSignedIn ? "text-green-600" : "text-red-600"}>{String(isSignedIn)}</span></div>
              <div>• User ID: {user?.id || "null"}</div>
            </div>
          </div>
          <div>
            <strong>User Data:</strong>
            <div className="pl-2">
              <div>• Email: {user?.emailAddresses?.[0]?.emailAddress || "null"}</div>
              <div>• Name: {user?.fullName || "null"}</div>
              <div>• Created: {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : "null"}</div>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-yellow-300">
          <strong>Authentication Check Result:</strong>
          <div className="pl-2">
            {!isLoaded ? (
              <span className="text-orange-600">⏳ Loading...</span>
            ) : !isSignedIn ? (
              <span className="text-red-600">❌ Not authenticated - this would show "Please log in" error</span>
            ) : (
              <span className="text-green-600">✅ Authenticated - booking should work</span>
            )}
          </div>
        </div>

        <div className="pt-2 border-t border-yellow-300">
          <strong>Environment:</strong>
          <div className="pl-2">
            <div>• Clerk Key: {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? "✅ Set" : "❌ Missing"}</div>
            <div>• Convex URL: {process.env.NEXT_PUBLIC_CONVEX_URL ? "✅ Set" : "❌ Missing"}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
