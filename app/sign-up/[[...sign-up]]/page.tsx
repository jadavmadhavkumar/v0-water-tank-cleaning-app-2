import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="mt-2 text-sm text-gray-600">
            Join Falkon for professional water tank cleaning
          </p>
        </div>
        <SignUp
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-lg",
            }
          }}
          routing="path"
          path="/sign-up"
          redirectUrl="/dashboard"
          signInUrl="/sign-in"
        />
      </div>
    </div>
  )
}
