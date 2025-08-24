import { Card, CardContent } from "@/components/ui/card"

export function BlogSection() {
  const articles = [
    {
      image: "/seo-magnifying-glass-with-golden-letters.png",
      title: "10 Reasons to invest in SEO copywriting services",
      date: "AUGUST 31, 2021",
      category: "SEO",
    },
    {
      image: "/digital-marketing-strategy-colorful-graphics.png",
      title: "How to get hired at a top Digital Marketing Agency",
      date: "AUGUST 28, 2021",
      category: "Digital Marketing",
    },
    {
      image: "/vintage-typewriter-with-paper.png",
      title: "Copywriting guidelines during the coronavirus",
      date: "AUGUST 25, 2021",
      category: "Copywriting",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Read More Articles From Our Blog
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="text-secondary font-medium">{article.category}</span>
                </div>
                <h3 className="font-semibold text-lg mb-4 leading-tight">{article.title}</h3>
                <button className="text-primary font-medium hover:text-primary/80 transition-colors text-sm">
                  Read More →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
