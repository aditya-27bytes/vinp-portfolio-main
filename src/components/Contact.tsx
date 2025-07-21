import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Globe
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    _gotcha: '', // Honeypot field
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in all required fields (Name, Email, Message).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Honeypot check
    if (formData._gotcha) {
      setIsSubmitting(false);
      return;
    }

    try {
      const formspreeEndpoint = 'https://formspree.io/f/mvgqzbyo'; // <-- Replace with your Formspree form ID
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('company', formData.company);
      data.append('subject', formData.subject);
      data.append('message', formData.message);
      data.append('_gotcha', formData._gotcha);

      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for contacting VINP. We'll get back to you within 24 hours.",
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          _gotcha: '',
        });
      } else {
        toast({
          title: "Error Sending Message",
          description: "Please try again or contact us directly at md@vinpgroup.in",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "Please try again or contact us directly at md@vinpgroup.in",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      primary: "md@vinpgroup.in",
      secondary: "General Inquiries",
      href: "mailto:md@vinpgroup.in"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      primary: "+91 94835 14255",
      secondary: "Managing Director",
      href: "tel:+919483514255"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      primary: "02, KMV Mansion, No 39, 6th Main Road",
      secondary: "AECS Layout, Sanjayanagar, Bengaluru 560094",
      href: "https://maps.google.com/?q=AECS+Layout+Sanjayanagar+Bengaluru"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Website",
      primary: "www.vinpgroup.in",
      secondary: "Official Company Website",
      href: "http://www.vinpgroup.in"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="container-golden max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center glass backdrop-blur-md px-6 py-3 rounded-full border border-secondary/20">
            <span className="text-secondary font-semibold">📞 Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Connect with{' '}
            <span className="text-gradient-secondary">VINP</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Ready to partner with India's leading bioenergy innovators? 
            Let's discuss how we can work together towards a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              {/* Honeypot field for spam protection */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass border-glass-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass border-glass-border"
                  />
                </div>
              </div>

              {/* Phone and Company Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="glass border-glass-border"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company/Organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="glass border-glass-border"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="glass border-glass-border"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project, partnership opportunity, or how we can help..."
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="glass border-glass-border resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                We typically respond within 24 hours during business days.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card hover:bg-primary/5 transition-all duration-300 block"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium break-words">{info.primary}</p>
                      <p className="text-muted-foreground text-sm">{info.secondary}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="glass-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-lg text-secondary flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-4">Business Hours</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Monday - Friday:</span>
                      <span className="text-foreground font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Saturday:</span>
                      <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Sunday:</span>
                      <span className="text-foreground font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="glass-card bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <div className="text-center space-y-4">
                <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                <h4 className="text-xl font-semibold text-foreground">
                  Ready to Transform Energy Together?
                </h4>
                <p className="text-muted-foreground">
                  Join us in building a sustainable future through innovative bioenergy solutions.
                </p>
                <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                  <a href="mailto:md@vinpgroup.in">
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us Directly
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;