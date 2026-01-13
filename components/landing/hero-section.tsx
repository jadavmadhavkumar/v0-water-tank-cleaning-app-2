"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium">
              <Icons.droplets className="w-4 h-4" />
              Trusted by 10,000+ Customers
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Professional <span className="text-primary">Water Tank</span> Cleaning Service
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Keep your water safe and clean with our expert tank cleaning services. We provide thorough cleaning,
              sanitization, and maintenance for all types of water tanks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/auth/login">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  Book Now
                  <Icons.arrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="#services">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 bg-transparent"
                >
                  View Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <img
                        src={`/indian-person-.jpg?height=32&width=32&query=indian person ${i}`}
                        alt="Customer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">500+ Reviews</span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Icons.star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
                <span className="text-sm font-medium ml-1">4.9</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:pl-8">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="/professional-water-tank-cleaning-service-workers.jpg" alt="Water Tank Cleaning Service" className="w-full h-auto" />
              {/* Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-background/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Next Available Slot</p>
                    <p className="font-semibold text-foreground">Tomorrow, 10:00 AM</p>
                  </div>
                  <div className="flex items-center gap-2 text-success">
                    <Icons.checkCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
