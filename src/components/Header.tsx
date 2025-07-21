import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import vinpLogo from '@/assets/vinp-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="container-golden">
        <div className="flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={vinpLogo} 
              alt="VINP Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <div className="text-lg md:text-xl font-bold text-gradient-primary">
              VINP
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="glass-primary" 
              size="lg"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass backdrop-blur-xl border-t border-white/20">
            <nav className="px-4 md:px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                variant="glass-primary" 
                size="lg"
                className="w-full mt-4"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;