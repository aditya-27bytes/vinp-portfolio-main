import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MapPin, Calendar, ArrowRight } from 'lucide-react';
import facility1 from '@/assets/facility-1.png';
import facility2 from '@/assets/facility-2.png';
import facility3 from '@/assets/facility-3.png';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Integrated Sugar & Bioenergy Complex",
      location: "Konanakeri, Shiggaon, Karnataka",
      year: "2021",
      image: facility1,
      description: "Our flagship facility representing one of India's most integrated sugar and bioenergy plants, combining sugar production with advanced ethanol distillation.",
      features: ["Sugar Production", "Bio-Ethanol (1G)", "Power Generation", "Sustainable Operations"],
      capacity: "Multi-product integrated facility"
    },
    {
      id: 2,
      title: "Advanced Ethanol Distillation Unit",
      location: "Karnataka Production Facility",
      year: "2022",
      image: facility2,
      description: "State-of-the-art ethanol production facility with cutting-edge distillation technology, contributing to India's biofuel mission.",
      features: ["1G Bio-Ethanol", "Advanced Distillation", "Quality Control", "Environmental Compliance"],
      capacity: "High-efficiency ethanol production"
    },
    {
      id: 3,
      title: "Power Co-generation Plant",
      location: "VINP Campus, Karnataka",
      year: "2023",
      image: facility3,
      description: "Innovative power generation facility utilizing bagasse and biomass for sustainable electricity production and grid integration.",
      features: ["Steam Turbines", "Grid Integration", "24/7 Operations", "Clean Energy"],
      capacity: "Continuous power generation"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const currentProject = projects[currentSlide];

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-background to-muted/20">
      <div className="container-golden max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center glass backdrop-blur-md px-6 py-3 rounded-full border border-accent/20">
            <span className="text-accent-foreground font-semibold">🏭 Our Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Innovation in{' '}
            <span className="text-gradient-primary">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Explore our world-class facilities and cutting-edge infrastructure that power 
            India's bioenergy revolution.
          </p>
        </div>

        {/* Main Project Slider */}
        <div className="relative max-w-7xl mx-auto mb-16">
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-0">
              {/* Image Section with landscape aspect ratio */}
              <div className="relative aspect-[16/9] overflow-hidden order-2 xl:order-1">
                <img 
                  src={currentProject.image} 
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass backdrop-blur-md p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8 xl:p-12 flex flex-col justify-center order-1 xl:order-2">
                <div className="space-y-6">
                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{currentProject.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="h-4 w-4 flex-shrink-0" />
                      <span>{currentProject.year}</span>
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                    {currentProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>

                  {/* Capacity */}
                  <div className="p-4 glass rounded-xl border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Production Capacity</h4>
                    <p className="text-primary font-medium">{currentProject.capacity}</p>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {currentProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button variant="glass-primary" size="lg" className="w-full sm:w-fit">
                    Learn More About This Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[
            { number: '3', label: 'Major Facilities', suffix: '+' },
            { number: '100', label: 'Hectares Coverage', suffix: '+' },
            { number: '24', label: 'Hours Operation', suffix: '/7' },
            { number: '1000', label: 'Jobs Created', suffix: '+' }
          ].map((stat, index) => (
            <div key={index} className="glass-card text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}<span className="text-secondary">{stat.suffix}</span>
              </div>
              <div className="text-muted-foreground text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
