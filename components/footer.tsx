export function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">N</span>
              </div>
              <span className="font-playfair font-bold text-xl">NovaGrowth</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Marketing is a company that focus on developing company's strategy and business development.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-xs">tw</span>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Menu</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Content Strategy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Content Development
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Content Creation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Content Optimization
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">© Copyright NovaGrowth. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
