"use client"

import { TopBar } from "@/components/dashboard/top-bar"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useAppStore } from "@/lib/store"
import { cn } from "@/lib/utils"

export default function NotificationsPage() {
  const { notifications, markNotificationRead } = useAppStore()

  const markAllRead = () => {
    notifications.forEach((n) => {
      if (!n.read) markNotificationRead(n.id)
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar title="Notifications" />

      <div className="p-6 max-w-2xl">
        {notifications.length > 0 && (
          <div className="flex justify-end mb-4">
            <Button variant="ghost" size="sm" onClick={markAllRead}>
              Mark all as read
            </Button>
          </div>
        )}

        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <Card
                key={notification.id}
                className={cn(
                  "bg-card border-border cursor-pointer transition-colors",
                  !notification.read && "border-primary/30 bg-primary/5",
                )}
                onClick={() => markNotificationRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                        !notification.read ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground",
                      )}
                    >
                      <Icons.bell className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <h3
                          className={cn(
                            "font-medium",
                            !notification.read ? "text-foreground" : "text-muted-foreground",
                          )}
                        >
                          {notification.title}
                        </h3>
                        {!notification.read && <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(notification.createdAt).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Icons.bell className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No notifications</h3>
            <p className="text-muted-foreground">You're all caught up! Check back later for updates.</p>
          </div>
        )}
      </div>
    </div>
  )
}
