import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ClientLogos } from "@/components/client-logos"
import { ServicesSection } from "@/components/services-section"
import { SocialMediaSection } from "@/components/social-media-section"
import { HelpSection } from "@/components/help-section"
import { BlogSection } from "@/components/blog-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <ServicesSection />
        <SocialMediaSection />
        <HelpSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
