"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { serviceCategories, serviceItems } from "@/lib/mock-data"
import { getServiceIcon, Icons } from "@/components/icons"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive water tank and pipe services to ensure clean, safe water for your home and business.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceCategories.map((category) => {
            const IconComponent = getServiceIcon(category.icon)
            const categoryServices = serviceItems.filter((s) => s.categoryId === category.id)
            const startingPrice = Math.min(...categoryServices.map((s) => s.basePrice))

            return (
              <Card
                key={category.id}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30 bg-card"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <IconComponent className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <CardTitle className="text-foreground">{category.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categoryServices.slice(0, 2).map((service) => (
                      <div key={service.id} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{service.name}</span>
                        <span className="font-medium text-foreground flex items-center">
                          <Icons.rupee className="w-3 h-3" />
                          {service.basePrice}+
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <span className="text-lg font-bold text-primary flex items-center">
                        <Icons.rupee className="w-4 h-4" />
                        {startingPrice}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/auth/login">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Book a Service
              <Icons.arrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
