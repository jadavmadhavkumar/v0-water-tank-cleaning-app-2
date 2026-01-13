"use client"

import { AdminTopBar } from "@/components/admin/admin-top-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { mockCustomer } from "@/lib/mock-data"
import { useAppStore } from "@/lib/store"

export default function AdminCustomersPage() {
  const { bookings } = useAppStore()

  // Create mock customer list
  const customers = [
    mockCustomer,
    {
      ...mockCustomer,
      id: "cust-2",
      name: "Rahul Verma",
      email: "rahul@example.com",
      mobile: "+91 98765 11111",
      walletBalance: 1500,
    },
    {
      ...mockCustomer,
      id: "cust-3",
      name: "Anita Mehta",
      email: "anita@example.com",
      mobile: "+91 98765 22222",
      walletBalance: 3200,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <AdminTopBar title="Customer Management" />

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Customers</p>
                  <p className="text-2xl font-bold text-foreground">{customers.length}</p>
                </div>
                <Icons.users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Active This Month</p>
                  <p className="text-2xl font-bold text-success">{customers.length}</p>
                </div>
                <Icons.trending className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Wallet Balance</p>
                  <p className="text-2xl font-bold text-foreground flex items-center">
                    <Icons.rupee className="w-5 h-5" />
                    {customers.reduce((sum, c) => sum + c.walletBalance, 0).toLocaleString()}
                  </p>
                </div>
                <Icons.wallet className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customers Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">All Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-border bg-muted/50">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Customer</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Contact</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Wallet Balance</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Total Bookings</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Joined</th>
                    <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => {
                    const customerBookings = bookings.filter((b) => b.customerId === customer.id)

                    return (
                      <tr key={customer.id} className="border-b border-border last:border-0">
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <Icons.user className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{customer.name}</p>
                              <p className="text-sm text-muted-foreground">{customer.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div>
                            <p className="text-foreground">{customer.mobile}</p>
                            <p className="text-sm text-muted-foreground">{customer.email}</p>
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="font-medium text-foreground flex items-center">
                            <Icons.rupee className="w-3 h-3" />
                            {customer.walletBalance.toLocaleString()}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="text-foreground">{customerBookings.length}</span>
                        </td>
                        <td className="p-4">
                          <span className="text-muted-foreground">
                            {new Date(customer.createdAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </span>
                        </td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
