export function ClientLogos() {
  const logos = [
    { name: "Slack", logo: "/slack-logo.png" },
    { name: "Amazon", logo: "/amazon-logo.png" },
    { name: "Logitech", logo: "/logitech-logo.png" },
    { name: "Google", logo: "/google-logo.png" },
    { name: "Facebook", logo: "/facebook-logo.png" },
  ]

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.logo || "/placeholder.svg"}
              alt={`${logo.name} logo`}
              className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
