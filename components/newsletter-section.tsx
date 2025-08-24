import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/80 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500 rounded-lg transform rotate-12 float-animation opacity-60"></div>
        <div
          className="absolute top-20 right-20 w-32 h-32 bg-orange-400 rounded-lg transform -rotate-12 float-animation opacity-50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-28 h-28 bg-secondary rounded-lg transform rotate-45 float-animation opacity-70"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-10 right-32 w-20 h-20 bg-yellow-400 rounded-lg transform -rotate-45 float-animation opacity-60"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Subscribe to get information, latest news and other interesting offers about
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold">M</span>
            </div>
            <span className="text-white font-bold text-xl">markethink</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 flex-1"
            />
            <Button className="bg-secondary text-primary hover:bg-secondary/90 px-8">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
