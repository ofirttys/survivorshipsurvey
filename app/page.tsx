import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Shield, Users, ExternalLink, Mail, FileText } from "lucide-react"

export default function SurveyLandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-accent" />
              <span className="text-xl font-semibold text-foreground">Research Survey</span>
            </div>
            <Badge variant="secondary" className="text-sm">
              Pediatric Oncofertility Consortium
            </Badge>
          </div>
        </div>
      </header>

      {/* Organization Logos Section */}
      <section className="border-b border-border bg-card/30">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center space-y-6">
            <h2 className="text-lg font-medium text-muted-foreground text-center">Research conducted by</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="https://oncofertility.msu.edu/wp-content/themes/onco2022-sage909/dist/images/the_oncofertility_consortium_logo.png"
                  alt="The Oncofertility Consortium"
                  className="h-16 md:h-20 object-contain"
                />
                <span className="text-sm text-muted-foreground text-center">The Oncofertility Consortium</span>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="https://www.sinaihealth.ca/themes/custom/sinai_health/logo.svg"
                  alt="Sinai Health"
                  className="h-16 md:h-20 object-contain"
                />
                <span className="text-sm text-muted-foreground text-center">
                  Sinai Health - Ethics Committee Approval
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6 text-balance">
            Fertility Follow-up in Pediatric Cancer Survivors
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            {
              "Contribute to vital research that will shape the future of fertility care for pediatric cancer survivors worldwide."
            }
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>5 minutes</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Anonymous</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>Global clinicians</span>
            </div>
          </div>

          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg" asChild>
            <a
              href="https://calogin.redcapcloud.com/survey.jsp?code=hUpFxCsBBBhmuWwz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Start Survey
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        </div>

        {/* Survey Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                Who We Are
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {
                  "This research is conducted by the Pediatric and Adolescent Committee (PAC), formerly the Pediatric Initiative Network (PIN) of the Oncofertility Consortium."
                }
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent" />
                Survey Purpose
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {
                  "Gather insights into how Reproductive Endocrinologists and Infertility clinicians worldwide manage fertility follow-up in pediatric cancer survivors."
                }
              </p>
            </CardContent>
          </Card>

          <Card className="border-border shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                Your Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                {
                  "Your responses are completely anonymous. We do not collect personal identifying information, and responses are kept strictly confidential."
                }
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Participation Details */}
        <Card className="mb-12 border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Participation Details</CardTitle>
            <CardDescription className="text-center text-base">
              {"Your voluntary participation helps advance pediatric oncofertility care"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 text-foreground">What to Expect:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Short survey taking approximately 5 minutes</li>
                  <li>• Questions about fertility follow-up practices</li>
                  <li>• Skip any questions you prefer not to answer</li>
                  <li>• Stop the survey at any point if needed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-foreground">Your Rights:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Participation is entirely voluntary</li>
                  <li>• Complete anonymity guaranteed</li>
                  <li>• No personal information collected</li>
                  <li>• Responses cannot be linked back to you</li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                {
                  "By continuing to the survey, you indicate your consent to participate in this research study and to the use of your responses for research purposes."
                }
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="border-border shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-center">Questions or Concerns?</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Survey Questions:</h3>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:jennia.michaeli@sinaihealth.ca" className="text-accent hover:underline">
                  Dr. Jennia Michaeli - jennia.michaeli@sinaihealth.ca
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">
                {
                  "For questions about your rights as a research participant, contact the Sinai Health Research Ethics Board (REB)."
                }
              </p>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Pediatric and Adolescent Committee, Oncofertility Consortium</p>
            <p className="mt-2">{"Research conducted with ethical approval and participant consent"}</p>
            {/* Footer Logos */}
            <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-border">
              <img
                src="https://oncofertility.msu.edu/wp-content/themes/onco2022-sage909/dist/images/the_oncofertility_consortium_logo.png"
                alt="The Oncofertility Consortium"
                className="h-8 object-contain opacity-60"
              />
              <img
                src="https://www.sinaihealth.ca/themes/custom/sinai_health/logo.svg"
                alt="Sinai Health"
                className="h-8 object-contain opacity-60"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
