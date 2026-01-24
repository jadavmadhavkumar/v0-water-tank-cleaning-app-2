"use client"

import { Smartphone, CreditCard, Wallet, Building2, Banknote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { PaymentMethod } from "@/lib/types"

interface PaymentMethodsProps {
  selectedMethod?: PaymentMethod
  onMethodSelect: (method: PaymentMethod) => void
  amount: number
}

const paymentMethods = [
  {
    id: "upi",
    name: "UPI",
    description: "Google Pay, PhonePe, Paytm",
    icon: Smartphone,
    color: "bg-blue-50 border-blue-200 hover:border-blue-400",
  },
  {
    id: "card",
    name: "Credit/Debit Card",
    description: "Visa, Mastercard, RuPay",
    icon: CreditCard,
    color: "bg-purple-50 border-purple-200 hover:border-purple-400",
  },
  {
    id: "wallet",
    name: "Falkon Wallet",
    description: "Use wallet balance",
    icon: Wallet,
    color: "bg-green-50 border-green-200 hover:border-green-400",
  },
  {
    id: "netbanking",
    name: "Net Banking",
    description: "All major banks",
    icon: Building2,
    color: "bg-amber-50 border-amber-200 hover:border-amber-400",
  },
  {
    id: "cash",
    name: "Cash on Service",
    description: "Pay when technician arrives",
    icon: Banknote,
    color: "bg-pink-50 border-pink-200 hover:border-pink-400",
  },
]

export function PaymentMethods({ selectedMethod, onMethodSelect, amount }: PaymentMethodsProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Select Payment Method</h3>
        <div className="text-2xl font-bold text-primary">₹{amount.toLocaleString("en-IN")}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {paymentMethods.map((method) => {
          const Icon = method.icon
          const isSelected = selectedMethod === method.id

          return (
            <Card
              key={method.id}
              className={`cursor-pointer border-2 transition-all ${
                isSelected ? `border-primary bg-primary/5` : `border-border hover:border-primary/50 ${method.color}`
              }`}
              onClick={() => onMethodSelect(method.id as PaymentMethod)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{method.name}</h4>
                    <p className="text-sm text-muted-foreground">{method.description}</p>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? "bg-primary border-primary" : "border-border"
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="bg-info/10 border border-info rounded-lg p-3 text-sm text-foreground">
        <p className="font-medium mb-1">Payment Secure</p>
        <p className="text-muted-foreground">All payments are encrypted and secured with 256-bit SSL encryption.</p>
      </div>
    </div>
  )
}
