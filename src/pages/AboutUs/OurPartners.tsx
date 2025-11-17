import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Handshake, Heart, Users, Globe } from "lucide-react";
import './AboutUs.css'; // Import the CSS file

const OurPartners = () => {
  return (
    <div className="partners-container">
      <Navigation />
      
      <main className="partners-main">
        <section className="partners-hero">
          <div className="partners-hero-content">
            <h1 className="partners-title">Our Partners</h1>
            <p className="partners-subtitle">
              Together, we're building a brighter future for children in South Sudan
            </p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="partners-content">
            <div className="partners-text-container">
              <p className="partners-description">
                We work alongside local and international organizations to maximize our impact and ensure 
                the best outcomes for the children we serve. Our partnerships enable us to provide comprehensive 
                care, education, and support to orphaned and vulnerable children.
              </p>

              <div className="partners-grid">
                <div className="partners-item">
                  <div className="partners-icon">
                    <Handshake className="icon" />
                  </div>
                  <h3 className="partners-item-title">Local Organizations</h3>
                  <p className="partners-item-description">Community groups in Jikow and surrounding areas</p>
                </div>

                <div className="partners-item">
                  <div className="partners-icon">
                    <Heart className="icon" />
                  </div>
                  <h3 className="partners-item-title">Healthcare Partners</h3>
                  <p className="partners-item-description">Medical organizations providing healthcare support</p>
                </div>

                <div className="partners-item">
                  <div className="partners-icon">
                    <Users className="icon" />
                  </div>
                  <h3 className="partners-item-title">Education Supporters</h3>
                  <p className="partners-item-description">Organizations providing educational resources</p>
                </div>

                <div className="partners-item">
                  <div className="partners-icon">
                    <Globe className="icon" />
                  </div>
                  <h3 className="partners-item-title">International Donors</h3>
                  <p className="partners-item-description">Individuals and groups supporting our mission</p>
                </div>
              </div>

              <div className="partners-call-to-action">
                <h3 className="partners-cta-title">Become a Partner</h3>
                <p className="partners-cta-description">
                  If your organization is interested in partnering with Good Shepherd Orphanage to support 
                  children in South Sudan, we'd love to hear from you. Together, we can create lasting change.
                </p>
                <a href="/contact" className="partners-cta-button">
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default OurPartners;