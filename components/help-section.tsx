import { Upload, Users, FileSearch, TrendingUp } from "lucide-react"

export function HelpSection() {
  const services = [
    {
      icon: <Upload className="w-8 h-8 text-secondary" />,
      title: "Update content on my Website",
      description: "Keep your website fresh with regular content updates",
    },
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Improve User Experience",
      description: "Enhance user engagement and satisfaction",
    },
    {
      icon: <FileSearch className="w-8 h-8 text-secondary" />,
      title: "Request Free Website Review",
      description: "Get professional insights on your website performance",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-secondary" />,
      title: "Improve your SEO Rankings",
      description: "Boost your search engine visibility and rankings",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">How Can We Help You?</h2>
        <p className="text-muted-foreground text-lg mb-12">Let's do great work together</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <button className="mt-12 text-primary font-semibold hover:text-primary/80 transition-colors">See More →</button>
      </div>
    </section>
  )
}
