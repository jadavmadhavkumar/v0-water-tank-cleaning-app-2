import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "Terms of Service - Falkon Water Tank Cleaning",
  description: "Terms of service for Falkon Futurex Private Limited - understand your rights and obligations.",
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 2025 | Falkon Futurex Private Limited</p>

          <div className="space-y-8">
            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website and services provided by Falkon Futurex Private Limited, you accept
                and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the
                above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Falkon's website for personal, non-commercial transitory viewing only. This is the grant of a license,
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                The materials on Falkon's website are provided "as is". Falkon makes no warranties, expressed or
                implied, and hereby disclaims and negates all other warranties including, without limitation, implied
                warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                intellectual property or other violation of rights.
              </p>
            </section>

            {/* Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Falkon Futurex Private Limited or its suppliers be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due to business interruption) arising out of
                the use or inability to use the materials on Falkon's website, even if Falkon or an authorized
                representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Falkon's website could include technical, typographical, or photographic
                errors. Falkon does not warrant that any of the materials on its website are accurate, complete, or
                current. Falkon may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            {/* Materials Links */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Links and Third Party Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                Falkon has not reviewed all of the sites linked to its website and is not responsible for the contents
                of any such linked site. The inclusion of any link does not imply endorsement by Falkon of the site. Use
                of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Modifications to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Falkon may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the Republic of
                India, and you irrevocably submit to the exclusive jurisdiction of the courts in New Delhi.
              </p>
            </section>

            {/* Service Terms */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Service Booking Terms</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Booking Confirmation</h3>
                  <p>
                    All bookings are subject to availability and confirmation by Falkon. A confirmation will be sent via
                    email or SMS to the customer's registered contact details.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Cancellation Policy</h3>
                  <p>
                    Customers may cancel bookings up to 24 hours before the scheduled service date. Cancellations made
                    within 24 hours may incur a cancellation fee.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Rescheduling</h3>
                  <p>
                    Customers can reschedule their bookings through the website or by contacting customer support.
                    Rescheduling is free if done at least 48 hours in advance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Terms</h3>
                  <p>
                    Payment for services must be made as per the selected payment method at the time of booking or upon
                    service completion, as applicable.
                  </p>
                </div>
              </div>
            </section>

            {/* User Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. User Conduct</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to use the website or services for any unlawful purpose or in any way that violates these
                terms. Prohibited behavior includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Harassing or causing distress or inconvenience to any person</li>
                <li>Creating false or misleading information</li>
                <li>Attempting to gain unauthorized access to systems or data</li>
                <li>Interfering with the normal operation of the website</li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For any questions regarding these Terms of Service, please contact:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold">Falkon Futurex Private Limited</span>
                </p>
                <p>South West Delhi, New Delhi, India</p>
                <p>Email: legal@falkon.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>CIN: U39000DL2025PTC451909</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
