import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "Privacy Policy - Falkon Water Tank Cleaning",
  description: "Privacy policy for Falkon Futurex Private Limited - understand how we protect your data.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: January 2025 | Falkon Futurex Private Limited</p>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Falkon Futurex Private Limited ("we," "us," "our," or "Company") respects the privacy of our users
                ("you" or "User"). This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit our website and use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Personal Information</h3>
                  <p>
                    We collect information you provide directly, including your name, email address, phone number,
                    address, payment information, and service preferences.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Automatically Collected Information</h3>
                  <p>
                    We automatically collect certain information about your device when you use our services, including
                    browser type, IP address, pages visited, and timestamps.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Location Information</h3>
                  <p>
                    With your consent, we may collect precise location information to provide and improve our services,
                    particularly for scheduling and service delivery.
                  </p>
                </div>
              </div>
            </section>

            {/* Use of Information */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process your bookings and payments</li>
                <li>Send service-related notifications and updates</li>
                <li>Respond to your inquiries and customer support requests</li>
                <li>Personalize your experience and provide tailored recommendations</li>
                <li>Comply with legal obligations and prevent fraud</li>
                <li>Conduct analytics and improve our platform</li>
              </ul>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the internet is 100% secure. While we strive to protect your information, we cannot guarantee
                absolute security.
              </p>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Sharing of Information</h2>
              <p className="text-muted-foreground mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Our staff members and service providers to deliver services</li>
                <li>Payment processors and financial institutions for transaction processing</li>
                <li>Law enforcement when required by law or court order</li>
                <li>Third-party service providers who assist in our operations</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not sell or rent your personal information to third parties for marketing purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Access, review, and request copies of your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information (subject to legal restrictions)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing at any time</li>
              </ul>
            </section>

            {/* Cookies & Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience, remember your preferences,
                and analyze site usage. You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our services are not directed to children under 13 years of age. We do not knowingly collect personal
                information from children. If we become aware that we have collected information from a child under 13,
                we will take steps to delete such information.
              </p>
            </section>

            {/* Contact Us */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2 text-muted-foreground">
                <p>
                  <span className="font-semibold">Falkon Futurex Private Limited</span>
                </p>
                <p>South West Delhi, New Delhi, India</p>
                <p>Email: privacy@falkon.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>CIN: U39000DL2025PTC451909</p>
              </div>
            </section>

            {/* Policy Changes */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify this Privacy Policy at any time. Changes will be effective immediately
                upon posting to the website. Your continued use of our services after any modifications indicates your
                acceptance of the updated Privacy Policy.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
