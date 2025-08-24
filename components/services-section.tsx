import { Card, CardContent } from "@/components/ui/card"
import { FileText, Code, Lightbulb, TrendingUp } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: "Content Strategy",
      description:
        "We use our marketing expertise to create packages include content marketing, social media marketing.",
      color: "bg-green-100",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Content Development",
      description: "Bring the key message to the brand. Execute for your company's business development.",
      color: "bg-purple-100",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Content Creation",
      description: "Experienced in supporting and marketing from digital marketing content.",
      color: "bg-blue-100",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: "Content Optimization",
      description: "Your content marketing management services can provide SEO.",
      color: "bg-orange-100",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              We're Strategic Digital Marketing Agency
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We believe that our projects are a matter of partnership. Our working workflow processes, we're from the
              funny the century virtual made, have years to negatives.
            </p>
            <button className="text-primary font-semibold hover:text-primary/80 transition-colors">See More →</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
