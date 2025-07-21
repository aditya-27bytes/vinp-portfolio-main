import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin } from 'lucide-react';
import mdProfile from '@/assets/md-profile.jpg';

const Leadership = () => {
  return (
    <section id="leadership" className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-golden max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center glass backdrop-blur-md px-6 py-3 rounded-full border border-secondary/20">
            <span className="text-secondary font-semibold">👨‍💼 Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Visionary{' '}
            <span className="text-gradient-secondary">Leadership</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Meet the leader driving VINP's mission to transform India's energy landscape 
            through sustainable innovation and strategic vision.
          </p>
        </div>

        {/* MD Profile */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-2">
                <div className="relative max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3"></div>
                  <img 
                    src={mdProfile} 
                    alt="Vivek Hebbar - Managing Director" 
                    className="relative w-full rounded-2xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Profile Content */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    Vivek Hebbar
                  </h3>
                  <p className="text-xl text-primary font-semibold mb-4">Managing Director</p>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>

                {/* Vision Statement */}
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-foreground">Leadership Vision</h4>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-base md:text-lg leading-relaxed">
                      "At VINP, we believe that sustainable energy is not just about technology—it's about 
                      transforming lives and communities. Our mission extends beyond producing bioenergy; 
                      we're empowering farmers, strengthening rural economies, and building a cleaner future for India."
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      "By integrating cutting-edge bioenergy technologies with deep agricultural partnerships, 
                      we're creating a model that can be replicated across the nation, driving India's journey 
                      towards energy independence while preserving our environment for future generations."
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t border-border pt-6">
                  <h4 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a 
                      href="tel:+919483514255" 
                      className="flex items-center space-x-3 p-4 glass rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    >
                      <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Phone</div>
                        <div className="font-semibold text-foreground">+91 94835 14255</div>
                      </div>
                    </a>
                    <a 
                      href="mailto:md@vinpgroup.in" 
                      className="flex items-center space-x-3 p-4 glass rounded-lg hover:bg-primary/5 transition-colors duration-300"
                    >
                      <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="font-semibold text-foreground">md@vinpgroup.in</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Button 
                    variant="hero" 
                    size="lg"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <a href="mailto:md@vinpgroup.in">
                      <Mail className="mr-2 h-5 w-5" />
                      Connect with Leadership
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Sustainable Innovation",
              description: "Leading with technology that respects both progress and environmental stewardship."
            },
            {
              title: "Community Partnership", 
              description: "Building lasting relationships with farmers and rural communities across India."
            },
            {
              title: "Operational Excellence",
              description: "Maintaining the highest standards in safety, efficiency, and quality across all operations."
            }
          ].map((principle, index) => (
            <div key={index} className="glass-card text-center h-full">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-4">{principle.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;