"use client"

import { useState } from "react"
import { TopBar } from "@/components/dashboard/top-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import { useAppStore } from "@/lib/store"

export default function ProfilePage() {
  const { customer, updateCustomer } = useAppStore()
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [formData, setFormData] = useState({
    name: customer?.name || "",
    mobile: customer?.mobile || "",
    email: customer?.email || "",
    address: customer?.address || "",
  })

  const handleSave = async () => {
    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    updateCustomer(formData)
    setIsEditing(false)
    setIsSaving(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar title="My Profile" />

      <div className="p-6 max-w-2xl">
        <Card className="bg-card border-border">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-foreground">Profile Information</CardTitle>
            {!isEditing && (
              <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                <Icons.settings className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Profile Picture */}
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Icons.user className="w-10 h-10 text-primary" />
              </div>
              {isEditing && (
                <Button variant="outline" size="sm">
                  Change Photo
                </Button>
              )}
            </div>

            {/* Form Fields */}
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name
                </Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background border-input"
                  />
                ) : (
                  <p className="text-muted-foreground py-2">{customer?.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-foreground">
                  Mobile Number
                </Label>
                {isEditing ? (
                  <Input
                    id="mobile"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="bg-background border-input"
                  />
                ) : (
                  <p className="text-muted-foreground py-2 flex items-center gap-2">
                    <Icons.phone className="w-4 h-4" />
                    {customer?.mobile}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address
                </Label>
                {isEditing ? (
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background border-input"
                  />
                ) : (
                  <p className="text-muted-foreground py-2 flex items-center gap-2">
                    <Icons.mail className="w-4 h-4" />
                    {customer?.email}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground">
                  Address
                </Label>
                {isEditing ? (
                  <Textarea
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="bg-background border-input"
                    rows={3}
                  />
                ) : (
                  <p className="text-muted-foreground py-2 flex items-start gap-2">
                    <Icons.mapPin className="w-4 h-4 mt-0.5" />
                    {customer?.address}
                  </p>
                )}
              </div>
            </div>

            {isEditing && (
              <div className="flex gap-3 pt-4">
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={handleSave}
                  disabled={isSaving}
                >
                  {isSaving && <Icons.loader className="w-4 h-4 mr-2 animate-spin" />}
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false)
                    setFormData({
                      name: customer?.name || "",
                      mobile: customer?.mobile || "",
                      email: customer?.email || "",
                      address: customer?.address || "",
                    })
                  }}
                >
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Account Stats */}
        <Card className="bg-card border-border mt-6">
          <CardHeader>
            <CardTitle className="text-foreground">Account Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Member Since</p>
                <p className="text-lg font-semibold text-foreground">
                  {customer?.createdAt
                    ? new Date(customer.createdAt).toLocaleDateString("en-IN", { month: "long", year: "numeric" })
                    : "N/A"}
                </p>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">Wallet Balance</p>
                <p className="text-lg font-semibold text-foreground flex items-center">
                  <Icons.rupee className="w-4 h-4" />
                  {customer?.walletBalance.toLocaleString() || 0}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
