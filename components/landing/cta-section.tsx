"use client"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground text-balance">
            Ready for Clean Water?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
            Book your water tank cleaning service today and ensure safe, clean water for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/auth/login">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto bg-background text-primary hover:bg-background/90"
              >
                Get Started
                <Icons.arrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Icons.phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
