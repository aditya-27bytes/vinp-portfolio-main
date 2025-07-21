import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroFacility from '@/assets/hero-facility.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroFacility} 
          alt="VINP Bioenergy Facility" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-secondary/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-golden px-6 text-center">
        <div className="animate-fade-in-up max-w-6xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center glass backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
            <span className="text-white font-medium">🌱 Leading India's Bioenergy Revolution</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Welcome to the{' '}
              <span className="text-gradient-secondary block mt-2">
                Future of Energy
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            One of India's Most Integrated Sugar and Bioenergy Complex. 
            Transforming agriculture through sustainable innovation and cutting-edge technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '1000+', label: 'Farmers Connected' },
              { number: '100%', label: 'Sustainable Energy' },
              { number: '24/7', label: 'Operations' },
            ].map((stat, index) => (
              <div key={index} className="glass backdrop-blur-md p-4 rounded-lg border border-white/20 text-center">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-white/80 text-xs md:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
            >
              Discover Our Mission
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg text-white border-white/30 hover:bg-white/10 w-full sm:w-auto"
            >
              <Play className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;