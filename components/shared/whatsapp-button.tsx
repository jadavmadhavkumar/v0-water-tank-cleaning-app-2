"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  bookingDetails?: {
    serviceName: string
    date: string
    time: string
    address: string
    amount: number
  }
  className?: string
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
}

export function WhatsAppButton({
  phoneNumber = "+91 70113 65481", // Falkon support number
  message = "Hello! I'm interested in your water tank cleaning services.",
  bookingDetails,
  className = "",
  variant = "default",
  size = "default",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    let finalMessage = message

    if (bookingDetails) {
      finalMessage = `🏠 *Falkon Water Tank Cleaning*

📋 *Booking Confirmation Required*

🔧 *Service:* ${bookingDetails.serviceName}
📅 *Date:* ${bookingDetails.date}
⏰ *Time:* ${bookingDetails.time}
📍 *Address:* ${bookingDetails.address}
💰 *Amount:* ₹${bookingDetails.amount}

Please confirm this booking. Thank you!`
    }

    const encodedMessage = encodeURIComponent(finalMessage)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className={`gap-2 bg-green-500 hover:bg-green-600 text-white ${className}`}
    >
      <MessageCircle className="h-5 w-5" />
      Chat on WhatsApp
    </Button>
  )
}
