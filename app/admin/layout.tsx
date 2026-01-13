"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Sidebar } from "@/components/dashboard/sidebar"
import { useAppStore } from "@/lib/store"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { isAuthenticated, userRole } = useAppStore()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/login")
    } else if (userRole !== "admin") {
      router.push("/dashboard")
    }
  }, [isAuthenticated, userRole, router])

  if (!isAuthenticated || userRole !== "admin") {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar userRole="admin" />
      <main className="ml-64">{children}</main>
    </div>
  )
}
