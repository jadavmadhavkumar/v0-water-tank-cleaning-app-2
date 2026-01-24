import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Careers - Join Falkon Water Tank Cleaning",
  description:
    "Explore career opportunities at Falkon Futurex Private Limited. Join our growing team of professionals.",
}

export default function CareersPage() {
  const openings = [
    {
      title: "Field Service Technician",
      department: "Operations",
      type: "Full-time",
      location: "New Delhi",
      description: "Perform professional water tank cleaning and maintenance services.",
    },
    {
      title: "Customer Support Executive",
      department: "Customer Service",
      type: "Full-time",
      location: "New Delhi",
      description: "Handle customer inquiries, bookings, and provide exceptional support.",
    },
    {
      title: "Booking Coordinator",
      department: "Operations",
      type: "Full-time",
      location: "New Delhi",
      description: "Manage customer bookings, scheduling, and coordinate with field teams.",
    },
    {
      title: "Marketing Executive",
      department: "Marketing",
      type: "Full-time",
      location: "New Delhi",
      description: "Develop and execute marketing strategies to promote Falkon services.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Join Our Team</h1>
          <p className="text-lg text-muted-foreground">
            Be part of a growing organization that values excellence, integrity, and customer satisfaction.
          </p>
        </div>

        {/* About Working Here */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">Why Work With Falkon?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Icons.check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Competitive Salary</h3>
                  <p className="text-sm text-muted-foreground">Industry-competitive compensation packages</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icons.check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Growth Opportunities</h3>
                  <p className="text-sm text-muted-foreground">Career development and advancement paths</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icons.check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Training & Development</h3>
                  <p className="text-sm text-muted-foreground">Professional training and skill enhancement</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Icons.check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Team Environment</h3>
                  <p className="text-sm text-muted-foreground">Collaborative and supportive workplace</p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <h2 className="text-2xl font-bold text-foreground mb-8">Open Positions</h2>
          <div className="space-y-4">
            {openings.map((job, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                  <div className="flex items-center gap-2 mt-2 md:mt-0">
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-3">{job.description}</p>
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Icons.briefcase className="w-4 h-4" />
                    <span>{job.department}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icons.mapPin className="w-4 h-4" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Apply Now</Button>
              </div>
            ))}
          </div>

          {/* Application Process */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">Application Process</h2>
            <div className="space-y-4">
              {[
                { step: 1, title: "Submit Application", desc: "Apply for a position with your resume and details" },
                { step: 2, title: "Initial Screening", desc: "Our team reviews your application" },
                { step: 3, title: "Interview", desc: "Meet with our team for an interview" },
                { step: 4, title: "Offer & Onboarding", desc: "Receive offer and complete onboarding" },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-3xl mx-auto bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Reach out to our HR team at careers@falkon.com or call us at +91 98765 43210
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Contact HR Department</Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
