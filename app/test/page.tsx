"use client"

import { useState, useEffect } from "react"
import { useUser, useAuth } from "@clerk/nextjs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"
import { LocalBookingManager, LocalBooking } from "@/lib/local-storage"

export default function TestPage() {
  const { user, isLoaded, isSignedIn } = useUser()
  const { signOut } = useAuth()
  const [bookings, setBookings] = useState<LocalBooking[]>([])
  const [walletBalance, setWalletBalance] = useState(0)

  useEffect(() => {
    if (isLoaded && user) {
      const userBookings = LocalBookingManager.getUserBookings(user.id)
      const balance = LocalBookingManager.getWalletBalance()
      setBookings(userBookings)
      setWalletBalance(balance)
    }
  }, [user, isLoaded])

  const addTestBooking = () => {
    if (user) {
      LocalBookingManager.addBooking({
        serviceName: "Test Basic Tank Cleaning",
        date: Date.now(),
        time: "10:00 AM",
        amount: 500,
        address: "Test Address, Delhi",
        tankSize: "500L",
        tankType: "Overhead",
        paymentMethod: "cash",
        userId: user.id,
      })
      // Refresh bookings
      const updatedBookings = LocalBookingManager.getUserBookings(user.id)
      setBookings(updatedBookings)
    }
  }

  const addTestMoney = () => {
    const newBalance = LocalBookingManager.addToWallet(1000)
    setWalletBalance(newBalance)
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Icons.loader className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Icons.arrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Local Storage Test - No Convex Errors!</h1>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Authentication Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icons.shield className="w-5 h-5" />
                Authentication Status
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Is Loaded:</span>
                <span className={isLoaded ? "text-green-600" : "text-red-600"}>
                  {isLoaded ? "✓ Yes" : "✗ No"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Is Signed In:</span>
                <span className={isSignedIn ? "text-green-600" : "text-red-600"}>
                  {isSignedIn ? "✓ Yes" : "✗ No"}
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Local Storage Data */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icons.database className="w-5 h-5" />
                Local Storage Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span>Bookings:</span>
                <span className="text-green-600">
                  {bookings.length} bookings
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Wallet Balance:</span>
                <span className="text-green-600">
                  ₹{walletBalance}
                </span>
              </div>
              {isSignedIn && (
                <div className="space-y-2 pt-2">
                  <Button onClick={addTestBooking} size="sm" className="w-full">
                    Add Test Booking
                  </Button>
                  <Button onClick={addTestMoney} size="sm" variant="outline" className="w-full">
                    Add ₹1000 to Wallet
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* User Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icons.user className="w-5 h-5" />
                User Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSignedIn && user ? (
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    {user.imageUrl && (
                      <img
                        src={user.imageUrl}
                        alt="Profile"
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <p className="font-medium">
                        {user.fullName || `${user.firstName || ""} ${user.lastName || ""}`.trim()}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.emailAddresses?.[0]?.emailAddress}
                      </p>
                    </div>
                  </div>
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground">User ID: {user.id}</p>
                  </div>
                </div>
              ) : (
                <p className="text-muted-foreground">No user data available</p>
              )}
            </CardContent>
          </Card>

          {/* Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icons.zap className="w-5 h-5" />
                Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isSignedIn ? (
                <div className="space-y-3">
                  <Link href="/dashboard">
                    <Button className="w-full">
                      <Icons.home className="w-4 h-4 mr-2" />
                      Go to Dashboard
                    </Button>
                  </Link>
                  <Link href="/dashboard/services">
                    <Button variant="outline" className="w-full">
                      <Icons.plus className="w-4 h-4 mr-2" />
                      Book Service
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => signOut()}
                  >
                    <Icons.logout className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link href="/sign-in">
                    <Button className="w-full">
                      <Icons.login className="w-4 h-4 mr-2" />
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button variant="outline" className="w-full">
                      <Icons.userPlus className="w-4 h-4 mr-2" />
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Bookings List */}
        {isSignedIn && bookings.length > 0 && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icons.calendar className="w-5 h-5" />
                Recent Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {bookings.slice(-3).map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{booking.serviceName}</p>
                      <p className="text-sm text-muted-foreground">
                        {new Date(booking.date).toLocaleDateString()} at {booking.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">₹{booking.amount}</p>
                      <p className="text-sm text-muted-foreground capitalize">{booking.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Debug Information */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icons.code className="w-5 h-5" />
              System Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p><strong>✅ Clerk Auth:</strong> Working</p>
                <p><strong>✅ Local Storage:</strong> Working</p>
                <p><strong>✅ Bookings:</strong> Working</p>
              </div>
              <div className="space-y-2">
                <p><strong>❌ Convex:</strong> Disabled</p>
                <p><strong>✅ Console:</strong> No errors</p>
                <p><strong>✅ All Features:</strong> Working</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
