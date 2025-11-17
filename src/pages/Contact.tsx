import { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollAnimation from "../components/ScrollAnimation";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useToast } from "../hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to a backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto animate-slide-in-right">
              Have questions? Want to get involved? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <ScrollAnimation>
                <div>
                  <h2 className="text-3xl font-bold text-accent mb-8">Get in Touch</h2>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-foreground">info@goodshepherd.org</p>
                        <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                        <p className="text-foreground">+1 (555) 123-4567</p>
                        <p className="text-muted-foreground text-sm">Mon-Fri, 9am-5pm EST</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Location</h3>
                        <p className="text-foreground">Good Shepherd Orphanage</p>
                        <p className="text-foreground">Jikow, South Sudan</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="bg-accent/20 p-3 rounded-lg">
                        <MessageCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Social Media</h3>
                        <p className="text-foreground">Follow us on Facebook, Twitter, and Instagram</p>
                        <p className="text-muted-foreground text-sm">@goodshepherdorphanage</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="font-bold text-lg text-accent mb-3">Office Hours</h3>
                    <div className="space-y-2 text-foreground">
                      <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                      <p><span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM</p>
                      <p><span className="font-semibold">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Contact Form */}
              <ScrollAnimation>
                <div className="bg-card p-8 rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold text-accent mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" variant="hero" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
