import { Button } from "@/components/ui/button"

export function SocialMediaSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Device Mockup */}
            <div className="relative bg-primary rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-lg p-6 text-center">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold">M</span>
                  </div>
                  <span className="font-bold text-xl">markethink</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">ig</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">tw</span>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 -right-8 w-16 h-16 bg-secondary rounded-lg float-animation opacity-80"></div>
            <div
              className="absolute -bottom-8 left-10 w-12 h-12 bg-blue-400 rounded-lg float-animation opacity-70"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Increase Business on Social Media Reach
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Using our network of industry influencers, we help promote your content and expand your reach.
            </p>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 px-8 py-3">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
