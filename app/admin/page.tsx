"use client"

import { AdminTopBar } from "@/components/admin/admin-top-bar"
import { StatsCard } from "@/components/dashboard/stats-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/ui/status-badge"
import { Icons } from "@/components/icons"
import { useAppStore } from "@/lib/store"
import { mockStaff } from "@/lib/mock-data"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { RevenueMetrics } from "@/components/admin/revenue-metrics"

export default function AdminDashboardPage() {
  const { bookings, staff, feedback } = useAppStore()

  const pendingBookings = bookings.filter((b) => b.status === "pending")
  const todayBookings = bookings.filter((b) => {
    const today = new Date().toISOString().split("T")[0]
    return b.date === today
  })
  const completedBookings = bookings.filter((b) => b.status === "completed")
  const totalRevenue = completedBookings.reduce((sum, b) => sum + b.amount, 0)
  const averageBookingValue = bookings.length > 0 ? Math.round(totalRevenue / bookings.length) : 0
  const pendingPayments = bookings
    .filter((b) => b.status === "pending" || b.status === "in-progress")
    .reduce((sum, b) => sum + b.amount, 0)
  const availableStaff = staff.filter((s) => s.status === "available").length

  return (
    <div className="min-h-screen bg-background">
      <AdminTopBar title="Admin Dashboard" />

      <div className="p-6 space-y-6">
        <RevenueMetrics
          totalRevenue={totalRevenue}
          monthlyGrowth={12}
          averageBookingValue={averageBookingValue}
          pendingPayments={pendingPayments}
        />

        {/* Basic Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard
            title="Today's Bookings"
            value={todayBookings.length}
            icon={Icons.calendarDays}
            trend="+12% from yesterday"
            trendUp={true}
          />
          <StatsCard title="Pending Approvals" value={pendingBookings.length} icon={Icons.clock} />
          <StatsCard title="Available Staff" value={`${availableStaff}/${staff.length}`} icon={Icons.users} />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Bookings */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-foreground">Recent Bookings</CardTitle>
              <Link href="/admin/bookings">
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                  <Icons.chevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookings.slice(0, 5).map((booking) => {
                  const assignedStaff = booking.staffId ? mockStaff.find((s) => s.id === booking.staffId) : null

                  return (
                    <div key={booking.id} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icons.droplets className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{booking.serviceName}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(booking.date).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                            })}{" "}
                            at {booking.time}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {assignedStaff ? (
                          <div className="hidden md:flex items-center gap-2">
                            <img
                              src={assignedStaff.photo || "/placeholder.svg"}
                              alt={assignedStaff.name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <span className="text-sm text-muted-foreground">{assignedStaff.name}</span>
                          </div>
                        ) : (
                          <span className="text-sm text-warning">Unassigned</span>
                        )}
                        <StatusBadge status={booking.status} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Staff Overview */}
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-foreground">Staff Status</CardTitle>
              <Link href="/admin/staff">
                <Button variant="ghost" size="sm" className="text-primary">
                  Manage
                  <Icons.chevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {staff.map((member) => (
                  <div key={member.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-foreground">{member.name}</p>
                        <div className="flex items-center gap-1">
                          <Icons.star className="w-3 h-3 fill-warning text-warning" />
                          <span className="text-xs text-muted-foreground">{member.rating}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "text-xs px-2 py-1 rounded-full font-medium",
                        member.status === "available" && "bg-success/10 text-success",
                        member.status === "busy" && "bg-warning/10 text-warning",
                        member.status === "off-duty" && "bg-muted text-muted-foreground",
                      )}
                    >
                      {member.status === "available" && "Available"}
                      {member.status === "busy" && "Busy"}
                      {member.status === "off-duty" && "Off Duty"}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4">
          <Link href="/admin/bookings">
            <Card className="bg-card border-border hover:border-primary/30 cursor-pointer transition-colors h-full">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icons.calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Manage Bookings</h3>
                  <p className="text-sm text-muted-foreground">{pendingBookings.length} pending</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/staff">
            <Card className="bg-card border-border hover:border-primary/30 cursor-pointer transition-colors h-full">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icons.users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Staff Management</h3>
                  <p className="text-sm text-muted-foreground">{staff.length} members</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/services">
            <Card className="bg-card border-border hover:border-primary/30 cursor-pointer transition-colors h-full">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center">
                  <Icons.clipboardList className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Services</h3>
                  <p className="text-sm text-muted-foreground">Manage catalog</p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/admin/reports">
            <Card className="bg-card border-border hover:border-primary/30 cursor-pointer transition-colors h-full">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center">
                  <Icons.barChart className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Reports</h3>
                  <p className="text-sm text-muted-foreground">View analytics</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
