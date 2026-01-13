// Customer Module Types
export interface Customer {
  id: string
  name: string
  mobile: string
  email: string
  address: string
  walletBalance: number
  createdAt: Date
}

export interface CustomerFeedback {
  id: string
  customerId: string
  bookingId: string
  rating: number
  comment: string
  createdAt: Date
}

// Service Module Types
export type ServiceCategoryType =
  | "tank-services"
  | "pipe-services"
  | "filter-purification"
  | "monitoring"
  | "miscellaneous"

export interface ServiceCategory {
  id: ServiceCategoryType
  name: string
  description: string
  icon: string
}

export interface ServiceItem {
  id: string
  categoryId: ServiceCategoryType
  name: string
  description: string
  basePrice: number
  duration: string
  image?: string
  tankSizes?: { size: string; priceMultiplier: number }[]
  tankTypes?: { type: string; priceAddition: number }[]
}

export interface ServiceAvailability {
  date: string
  slots: { time: string; available: boolean }[]
}

// Booking Module Types
export type BookingStatus = "pending" | "confirmed" | "in-progress" | "completed" | "cancelled"

export interface Booking {
  id: string
  customerId: string
  serviceId: string
  serviceName: string
  date: string
  time: string
  status: BookingStatus
  amount: number
  staffId?: string
  address: string
  tankSize?: string
  tankType?: string
  notes?: string
  createdAt: Date
}

export interface StaffAssignment {
  bookingId: string
  staffId: string
  assignedAt: Date
}

// Staff Module Types
export interface Staff {
  id: string
  name: string
  mobile: string
  email: string
  photo: string
  rating: number
  completedJobs: number
  status: "available" | "busy" | "off-duty"
}

export interface StaffSchedule {
  staffId: string
  date: string
  bookings: string[]
}

// Payment Module Types
export type PaymentStatus = "pending" | "paid" | "refunded"
export type PaymentMethod = "wallet" | "card" | "upi" | "netbanking" | "cash"

export interface Payment {
  id: string
  bookingId: string
  customerId: string
  amount: number
  status: PaymentStatus
  method: PaymentMethod
  transactionId?: string
  createdAt: Date
}

export interface WalletTransaction {
  id: string
  customerId: string
  amount: number
  type: "credit" | "debit"
  description: string
  createdAt: Date
}

// Notification Types
export interface Notification {
  id: string
  userId: string
  userType: "customer" | "staff" | "admin"
  title: string
  message: string
  read: boolean
  createdAt: Date
}

// Complaint Types
export interface Complaint {
  id: string
  customerId: string
  bookingId: string
  subject: string
  description: string
  status: "open" | "in-progress" | "resolved"
  createdAt: Date
}
