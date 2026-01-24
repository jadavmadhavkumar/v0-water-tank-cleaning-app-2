"use client"

import { useState } from "react"
import { TopBar } from "@/components/dashboard/top-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"
import { useAppStore } from "@/lib/store"
import { cn } from "@/lib/utils"

const quickAmounts = [500, 1000, 2000, 5000]

export default function WalletPage() {
  const { customer, walletTransactions, updateWalletBalance, addWalletTransaction } = useAppStore()
  const [amount, setAmount] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleRecharge = async () => {
    const rechargeAmount = Number.parseInt(amount)
    if (isNaN(rechargeAmount) || rechargeAmount <= 0) return

    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    updateWalletBalance(rechargeAmount)
    addWalletTransaction({
      id: `wallet-${Date.now()}`,
      customerId: customer?.id || "",
      amount: rechargeAmount,
      type: "credit",
      description: "Wallet Recharge",
      createdAt: new Date(),
    })

    setAmount("")
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar title="My Wallet" />

      <div className="p-6 max-w-4xl space-y-6">
        {/* Balance Card */}
        <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 mb-1">Available Balance</p>
                <p className="text-4xl font-bold flex items-center">
                  <Icons.rupee className="w-8 h-8" />
                  {customer?.walletBalance.toLocaleString() || 0}
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Icons.wallet className="w-8 h-8" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recharge Section */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Add Money to Wallet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Quick Amount Buttons */}
            <div className="grid grid-cols-4 gap-3">
              {quickAmounts.map((amt) => (
                <Button
                  key={amt}
                  variant="outline"
                  className={cn("border-border", amount === amt.toString() && "border-primary bg-primary/5")}
                  onClick={() => setAmount(amt.toString())}
                >
                  <Icons.rupee className="w-3 h-3 mr-1" />
                  {amt}
                </Button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Icons.rupee className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="number"
                  placeholder="Enter custom amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="pl-8 bg-background border-input"
                />
              </div>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={handleRecharge}
                disabled={isLoading || !amount}
              >
                {isLoading ? <Icons.loader className="w-4 h-4 animate-spin" /> : "Add Money"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            {walletTransactions.length > 0 ? (
              <div className="space-y-3">
                {walletTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-muted rounded-lg">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full flex items-center justify-center",
                          transaction.type === "credit"
                            ? "bg-success/10 text-success"
                            : "bg-destructive/10 text-destructive",
                        )}
                      >
                        {transaction.type === "credit" ? (
                          <Icons.plus className="w-5 h-5" />
                        ) : (
                          <Icons.minus className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{transaction.description}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(transaction.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                    <p
                      className={cn(
                        "font-semibold flex items-center",
                        transaction.type === "credit" ? "text-success" : "text-destructive",
                      )}
                    >
                      {transaction.type === "credit" ? "+" : "-"}
                      <Icons.rupee className="w-3 h-3" />
                      {transaction.amount.toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Icons.fileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No transactions yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
