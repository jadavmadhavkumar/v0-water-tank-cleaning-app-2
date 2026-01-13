"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Icons } from "@/components/icons"

const testimonials = [
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 5,
    comment: "Excellent service! The team was professional and thorough. My tank has never been this clean.",
    image: "/indian-man-professional-portrait.png",
  },
  {
    name: "Anita Sharma",
    location: "Delhi",
    rating: 5,
    comment: "Very impressed with the quality of work. They arrived on time and completed the job perfectly.",
    image: "/indian-woman-portrait-professional.jpg",
  },
  {
    name: "Vikram Patel",
    location: "Bangalore",
    rating: 5,
    comment: "Great value for money. The team was courteous and the tank cleaning was done efficiently.",
    image: "/indian-man-portrait-business.jpg",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Falkon for their water tank cleaning needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icons.star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icons.mapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
