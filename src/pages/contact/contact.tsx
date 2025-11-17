import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { useToast } from "../../hooks/use-toast";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import './contact.css'; // Import the CSS file

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

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon."
    });

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
      
      <main className="flex-grow contact-container">
        <section className="py-16">
          <div className="container">
            <h2 className="contact-title">Get in Touch</h2>
            <div className="contact-grid">
              {/* Contact Information */}
              <ScrollAnimation>
                <div className="contact-information">
                  <div className="space-y-6">
                    <div className="information-item">
                      <div className="icon-container">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-foreground">goodshepherdorphanageproject@gmail.com</p>
                        <p className="text-muted-foreground text-sm">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="information-item">
                      <div className="icon-container">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phone</h3>
                        <p className="text-foreground">+1 (515) 865-4539</p>
                        <p className="text-muted-foreground text-sm">Mon-Fri, 9am-5pm EST</p>
                      </div>
                    </div>

                    <div className="information-item">
                      <div className="icon-container">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Location</h3>
                        <p className="text-foreground">Good Shepherd Orphanage Project </p>
                        <p className="text-foreground">Jikow, South Sudan.</p>
                        <p className="text-foreground">Des Moines, Iowa 50314, USA.</p>
                      </div>
                    </div>

                    <div className="information-item">
                      <div className="icon-container">
                        <MessageCircle className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Social Media</h3>
                        <p className="text-foreground">Follow us on Facebook, Twitter, and Instagram</p>
                      </div>
                    </div>
                  </div>

                  <div className="office-hours">
                    <h3 className="font-bold text-lg text-accent mb-3">Office Hours</h3>
                    <div className="space-y-2 text-foreground">
                      <p><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 5:00 PM</p>
                      <p><span className="font-semibold">Saturday-Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>

              {/* Contact Form */}
              <ScrollAnimation>
                <div className="contact-form">
                  <h2 className="contact-title">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
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
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
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
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
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
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
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

                    <Button type="submit" className="button">
                      Send Message
                    </Button>
                  </form>
                </div>
              </ScrollAnimation>
            </div>

            {/* Map Section */}
            <div className="contact-map mt-12">
              <iframe
                title="Good Shepherd Orphanage Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28382.448963672807!2d-93.65625595935725!3d41.605214052930016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87ee996d7d39ee39%3A0xc73f18b76ebe5925!2sDes%20Moines%2C%20IA%2050314%2C%20USA!5e0!3m2!1sen!2set!4v1763158279591!5m2!1sen!2set" 
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;