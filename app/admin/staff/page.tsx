"use client"

import { useState } from "react"
import { AdminTopBar } from "@/components/admin/admin-top-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useAppStore } from "@/lib/store"
import { cn } from "@/lib/utils"
import type { Staff } from "@/lib/types"

export default function AdminStaffPage() {
  const { staff, updateStaffStatus, bookings } = useAppStore()
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null)

  const getStaffBookings = (staffId: string) => {
    return bookings.filter((b) => b.staffId === staffId)
  }

  return (
    <div className="min-h-screen bg-background">
      <AdminTopBar title="Staff Management" />

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Staff</p>
                  <p className="text-2xl font-bold text-foreground">{staff.length}</p>
                </div>
                <Icons.users className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Available</p>
                  <p className="text-2xl font-bold text-success">
                    {staff.filter((s) => s.status === "available").length}
                  </p>
                </div>
                <Icons.checkCircle className="w-8 h-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Busy</p>
                  <p className="text-2xl font-bold text-warning">{staff.filter((s) => s.status === "busy").length}</p>
                </div>
                <Icons.clock className="w-8 h-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Off Duty</p>
                  <p className="text-2xl font-bold text-muted-foreground">
                    {staff.filter((s) => s.status === "off-duty").length}
                  </p>
                </div>
                <Icons.xCircle className="w-8 h-8 text-muted-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staff.map((member) => {
            const memberBookings = getStaffBookings(member.id)
            const activeBookings = memberBookings.filter((b) =>
              ["pending", "confirmed", "in-progress"].includes(b.status),
            )

            return (
              <Card key={member.id} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Icons.star className="w-4 h-4 fill-warning text-warning" />
                            <span className="text-sm font-medium text-foreground">{member.rating}</span>
                          </div>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{member.completedJobs} jobs</span>
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

                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icons.phone className="w-4 h-4" />
                      <span>{member.mobile}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icons.mail className="w-4 h-4" />
                      <span>{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icons.calendar className="w-4 h-4" />
                      <span>{activeBookings.length} active bookings</span>
                    </div>
                  </div>

                  {/* Status Toggle */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={member.status === "available" ? "default" : "outline"}
                      className={cn(
                        "flex-1",
                        member.status === "available" && "bg-success hover:bg-success/90 text-success-foreground",
                      )}
                      onClick={() => updateStaffStatus(member.id, "available")}
                    >
                      Available
                    </Button>
                    <Button
                      size="sm"
                      variant={member.status === "busy" ? "default" : "outline"}
                      className={cn(
                        "flex-1",
                        member.status === "busy" && "bg-warning hover:bg-warning/90 text-warning-foreground",
                      )}
                      onClick={() => updateStaffStatus(member.id, "busy")}
                    >
                      Busy
                    </Button>
                    <Button
                      size="sm"
                      variant={member.status === "off-duty" ? "default" : "outline"}
                      className="flex-1"
                      onClick={() => updateStaffStatus(member.id, "off-duty")}
                    >
                      Off
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
