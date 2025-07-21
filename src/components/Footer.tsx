import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import vinpLogo from '@/assets/vinp-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Bio-Ethanol Production',
    'Sugar Manufacturing',
    'Power Generation',
    'Bio-CNG & CO2',
    'Sustainable Energy Solutions'
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted">
      {/* Main Footer */}
      <div className="section-padding border-t border-border/50">
        <div className="container-golden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src={vinpLogo} 
                  alt="VINP Logo" 
                  className="h-10 w-10 md:h-12 md:w-12 object-contain"
                />
                <div className="text-xl md:text-2xl font-bold text-gradient-primary">
                  VINP
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Leading India's bioenergy revolution through sustainable innovation 
                and integrated agricultural partnerships.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">
                    Bengaluru, Karnataka, India
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-primary" />
                  <a 
                    href="tel:+919483514255" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 94835 14255
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-primary" />
                  <a 
                    href="mailto:md@vinpgroup.in" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    md@vinpgroup.in
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Our Solutions</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">Partner with Us</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ready to join India's sustainable energy revolution? 
                Connect with our team today.
              </p>
              <div className="space-y-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <a href="mailto:md@vinpgroup.in">
                    <Mail className="mr-2 h-4 w-4" />
                    Get in Touch
                  </a>
                </Button>
                <Button variant="glass" size="lg" className="w-full" asChild>
                  <a 
                    href="http://www.vinpgroup.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit Our Website
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="mt-16 pt-8 border-t border-border/50">
            <div className="glass-card">
              <div className="text-center space-y-4">
                <h4 className="text-xl font-semibold text-foreground">
                  VINP Distilleries & Sugars Private Limited
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="text-muted-foreground">Registered Office</div>
                    <div className="text-foreground font-medium mt-1">
                      02, KMV Mansion, No 39, 6th Main Road<br />
                      AECS Layout 1st Stage, Sanjayanagar<br />
                      Bengaluru, Karnataka 560094, India
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Production Facility</div>
                    <div className="text-foreground font-medium mt-1">
                      Konanakeri, Shiggaon<br />
                      Karnataka, India
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Established</div>
                    <div className="text-foreground font-medium mt-1">
                      2021<br />
                      Incorporated in India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50">
        <div className="container-golden px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} VINP Distilleries & Sugars Private Limited. 
              All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground">
                🌱 Powering India's Sustainable Future
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary/10"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;