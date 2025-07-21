import { Leaf, Zap, Users, Factory } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Innovation",
      description: "Harnessing untapped energy with cutting-edge technology to drive India's energy independence."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Integrated Complex",
      description: "One of India's most integrated sugar and bioenergy facilities producing ethanol, sugar, power, and bio-CNG."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Farmer Partnership",
      description: "Directly partnering with thousands of farmers, transforming them from Annadata to Urjadata."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Solutions",
      description: "Producing Bio-Ethanol (1G), Sugar, Power, Bio-CNG, CO2, and sustainable energy solutions."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-golden max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center glass backdrop-blur-md px-6 py-3 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">🌿 About VINP</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Pioneering India's{' '}
            <span className="text-gradient-primary">Bioenergy</span>{' '}
            Revolution
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The VINP Group has strategically diversified into key business verticals for over 20 years. 
            Our flagship entity leads cutting-edge bioenergy initiatives where innovation meets sustainability.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-card mb-16 text-center max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Mission</h3>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            VINP is committed to harnessing every form of untapped energy with the latest technology to drive 
            India's journey towards energy independence. We transform the agricultural landscape by enabling 
            farmers to adopt energy crops, augmenting their income and productivity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="glass-card text-center group h-full">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Company Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                VINP Distilleries & Sugars Pvt Ltd
              </h3>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Established in 2021, our state-of-the-art facility at Konanakeri, Shiggaon in Karnataka 
                  represents one of the most integrated bioenergy plants in India.
                </p>
                <p className="text-lg leading-relaxed">
                  We are committed to reducing carbon footprints, boosting rural agricultural economies, 
                  and creating sustainable employment opportunities through advanced bioenergy technologies.
                </p>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl border border-primary/20">
              <h4 className="text-xl font-semibold text-foreground mb-4">Company Address</h4>
              <div className="text-muted-foreground leading-relaxed">
                <p>02, KMV Mansion, No 39, 6th Main Road</p>
                <p>AECS Layout 1st Stage, Sanjayanagar</p>
                <p>Bengaluru, Karnataka 560094, India</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Production Stats */}
            <div className="glass-card">
              <h4 className="text-xl font-semibold text-foreground mb-6 text-center">Our Production Capabilities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Bio-Ethanol (1G)', value: 'Daily Production' },
                  { label: 'Sugar', value: 'Premium Quality' },
                  { label: 'Power Generation', value: '24/7 Operations' },
                  { label: 'Bio-CNG & CO2', value: 'Sustainable Output' }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-sm text-primary font-semibold">{item.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="glass-card">
              <h4 className="text-xl font-semibold text-foreground mb-4">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                To be India's leading integrated bioenergy company, driving sustainable development 
                and energy independence through innovative agricultural partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;