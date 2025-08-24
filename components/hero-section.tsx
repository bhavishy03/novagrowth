import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center overflow-hidden">
      {/* 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-lg transform rotate-12 float-animation opacity-80"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-orange-400 rounded-lg transform -rotate-12 float-animation opacity-70"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-28 h-28 bg-secondary rounded-lg transform rotate-45 float-animation opacity-75"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-32 w-20 h-20 bg-yellow-400 rounded-lg transform -rotate-45 float-animation opacity-80"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400 rounded-lg transform rotate-12 float-animation opacity-60"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-white font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Best
            <br />
            <span className="text-secondary">Digital Marketing</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
            one-to-one customer service.
          </p>
          <Button
            size="lg"
            className="bg-secondary text-primary hover:bg-secondary/90 px-8 py-4 text-lg font-semibold pulse-glow"
          >
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}
