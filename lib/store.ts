import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Customer, Booking, WalletTransaction, Notification, Staff, CustomerFeedback, Complaint } from "./types"
import {
  mockCustomer,
  mockBookings,
  mockWalletTransactions,
  mockNotifications,
  mockStaff,
  mockFeedback,
} from "./mock-data"

interface AppState {
  // Auth State
  isAuthenticated: boolean
  userRole: "customer" | "admin" | "staff" | null

  // Customer Data
  customer: Customer | null
  bookings: Booking[]
  walletTransactions: WalletTransaction[]
  notifications: Notification[]
  feedback: CustomerFeedback[]
  complaints: Complaint[]

  // Staff Data
  staff: Staff[]

  // Actions
  login: (role: "customer" | "admin" | "staff") => void
  logout: () => void
  updateCustomer: (data: Partial<Customer>) => void
  addBooking: (booking: Booking) => void
  updateBookingStatus: (bookingId: string, status: Booking["status"]) => void
  assignStaff: (bookingId: string, staffId: string) => void
  addWalletTransaction: (transaction: WalletTransaction) => void
  updateWalletBalance: (amount: number) => void
  addNotification: (notification: Notification) => void
  markNotificationRead: (notificationId: string) => void
  addFeedback: (feedback: CustomerFeedback) => void
  updateStaffStatus: (staffId: string, status: Staff["status"]) => void
  addComplaint: (complaint: Complaint) => void
  updateComplaintStatus: (complaintId: string, status: Complaint["status"]) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial State
      isAuthenticated: false,
      userRole: null,
      customer: null,
      bookings: [],
      walletTransactions: [],
      notifications: [],
      feedback: [],
      complaints: [],
      staff: mockStaff,

      // Actions
      login: (role) =>
        set({
          isAuthenticated: true,
          userRole: role,
          customer: role === "customer" ? mockCustomer : null,
          bookings: mockBookings,
          walletTransactions: mockWalletTransactions,
          notifications: mockNotifications,
          feedback: mockFeedback,
        }),

      logout: () =>
        set({
          isAuthenticated: false,
          userRole: null,
          customer: null,
          bookings: [],
          walletTransactions: [],
          notifications: [],
          feedback: [],
          complaints: [],
        }),

      updateCustomer: (data) =>
        set((state) => ({
          customer: state.customer ? { ...state.customer, ...data } : null,
        })),

      addBooking: (booking) =>
        set((state) => ({
          bookings: [booking, ...state.bookings],
        })),

      updateBookingStatus: (bookingId, status) =>
        set((state) => ({
          bookings: state.bookings.map((b) => (b.id === bookingId ? { ...b, status } : b)),
        })),

      assignStaff: (bookingId, staffId) =>
        set((state) => ({
          bookings: state.bookings.map((b) => (b.id === bookingId ? { ...b, staffId } : b)),
        })),

      addWalletTransaction: (transaction) =>
        set((state) => ({
          walletTransactions: [transaction, ...state.walletTransactions],
        })),

      updateWalletBalance: (amount) =>
        set((state) => ({
          customer: state.customer ? { ...state.customer, walletBalance: state.customer.walletBalance + amount } : null,
        })),

      addNotification: (notification) =>
        set((state) => ({
          notifications: [notification, ...state.notifications],
        })),

      markNotificationRead: (notificationId) =>
        set((state) => ({
          notifications: state.notifications.map((n) => (n.id === notificationId ? { ...n, read: true } : n)),
        })),

      addFeedback: (feedback) =>
        set((state) => ({
          feedback: [feedback, ...state.feedback],
        })),

      updateStaffStatus: (staffId, status) =>
        set((state) => ({
          staff: state.staff.map((s) => (s.id === staffId ? { ...s, status } : s)),
        })),

      addComplaint: (complaint) =>
        set((state) => ({
          complaints: [complaint, ...state.complaints],
        })),

      updateComplaintStatus: (complaintId, status) =>
        set((state) => ({
          complaints: state.complaints.map((c) => (c.id === complaintId ? { ...c, status } : c)),
        })),
    }),
    {
      name: "falkon-storage",
    },
  ),
)
