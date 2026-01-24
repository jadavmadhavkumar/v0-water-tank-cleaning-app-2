"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { TopBar } from "@/components/dashboard/top-bar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Icons } from "@/components/icons"
import { useAppStore } from "@/lib/store"
import { cn } from "@/lib/utils"

export default function FeedbackPage() {
  const params = useParams()
  const router = useRouter()
  const { bookings, customer, addFeedback, feedback } = useAppStore()

  const booking = bookings.find((b) => b.id === params.bookingId)
  const existingFeedback = feedback.find((f) => f.bookingId === params.bookingId)

  const [rating, setRating] = useState(existingFeedback?.rating || 0)
  const [comment, setComment] = useState(existingFeedback?.comment || "")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(!!existingFeedback)

  if (!booking) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar title="Feedback" />
        <div className="p-6 text-center">
          <p className="text-muted-foreground">Booking not found.</p>
        </div>
      </div>
    )
  }

  const handleSubmit = async () => {
    if (rating === 0 || !customer) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    addFeedback({
      id: `feedback-${Date.now()}`,
      customerId: customer.id,
      bookingId: booking.id,
      rating,
      comment,
      createdAt: new Date(),
    })

    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar title="Rate Your Experience" />

      <div className="p-6 max-w-xl mx-auto">
        <Button variant="ghost" onClick={() => router.back()} className="text-muted-foreground mb-6">
          <Icons.arrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {submitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <Icons.checkCircle className="w-10 h-10 text-success" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Thank You!</h2>
            <p className="text-muted-foreground mb-8">Your feedback helps us improve our services.</p>
            <Button onClick={() => router.push("/dashboard/bookings")}>Back to Bookings</Button>
          </div>
        ) : (
          <Card className="bg-card border-border">
            <CardHeader className="text-center">
              <CardTitle className="text-foreground">How was your experience?</CardTitle>
              <p className="text-muted-foreground">{booking.serviceName}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Star Rating */}
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className="p-2 transition-transform hover:scale-110"
                  >
                    <Icons.star
                      className={cn(
                        "w-10 h-10 transition-colors",
                        star <= rating ? "fill-warning text-warning" : "text-muted-foreground",
                      )}
                    />
                  </button>
                ))}
              </div>

              <p className="text-center text-muted-foreground">
                {rating === 0 && "Tap a star to rate"}
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </p>

              {/* Comment */}
              <div>
                <Textarea
                  placeholder="Tell us more about your experience (optional)"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="bg-background border-input"
                  rows={4}
                />
              </div>

              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={rating === 0 || isSubmitting}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <>
                    <Icons.loader className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Feedback"
                )}
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
