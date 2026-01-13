"use client"

import { Icons } from "@/components/icons"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Icons.droplets className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">Falkon</span>
            </div>
            <p className="text-background/70 text-sm">
              Professional water tank cleaning and maintenance services for homes and businesses.
            </p>
            <p className="text-background/60 text-xs">
              <span className="font-semibold">Falkon Futurex Private Limited</span>
              <br />
              CIN: U39000DL2025PTC451909
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Tank Cleaning
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Pipe Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Water Purification
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Water Testing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <Icons.phone className="w-4 h-4" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Icons.mail className="w-4 h-4" />
                support@falkon.com
              </li>
              <li className="flex items-start gap-2">
                <Icons.mapPin className="w-4 h-4 mt-0.5" />
                <span>South West Delhi, New Delhi, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm text-background/50">
          <p>
            &copy; {new Date().getFullYear()} Falkon Futurex Private Limited. All rights reserved. CIN:
            U39000DL2025PTC451909
          </p>
        </div>
      </div>
    </footer>
  )
}
