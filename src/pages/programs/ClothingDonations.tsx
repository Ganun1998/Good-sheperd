
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import clothing_donate from "../../assets/clothing_donate.jpg";
import "./programs.css"; // Import the CSS file

const ClothingDonations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow">

        {/* Hero Image */}
        <ScrollAnimation>
          <section className="py-8">
            <div className="container">
              <img
                src={clothing_donate}
                alt="Children receiving clothing donations"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-xl max-h-60" // Added max-h-60
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Program Details */}
        <ScrollAnimation>
          <section className="py-16 bg-secondary">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-left text-brown">About This Program</h2>
                <div className="space-y-6 text-foreground text-left">

                  <h3 className="text-2xl font-bold mb-4">Living Conditions of Orphans</h3>
                  <p className="text-lg leading-relaxed">
                    Many orphans in our communities are trapped in poverty, lacking access to essential resources that most children take for granted. They often do not have proper clothing or footwear, and many attend school without the necessary supplies, such as books, backpacks, and writing materials like pens and pencils. This scarcity of basic necessities severely hampers their ability to learn and thrive in an educational environment.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Digital Divide</h3>
                  <p className="text-lg leading-relaxed">
                    As the world becomes increasingly digital, older orphans face unique challenges. Many have never had the opportunity to use a computer, which puts them at a disadvantage compared to their peers. This lack of exposure to technology can lead to difficulties in keeping up with academic requirements and hinder their overall development in today's tech-driven world.
                  </p>

                  <h3 className="text-2xl font-bold mb-4">Impact of Support</h3>
                  <p className="text-lg leading-relaxed">
                    Providing basic necessities like clothing significantly impacts these children's lives. Such support helps restore their dignity, allowing them to focus on their education and personal growth. By equipping them with the tools they need, we empower the orphans to stay in school, build their confidence, and foster hopes for a brighter future. Every donation of clothing or supplies creates a ripple effect, transforming not just their immediate circumstances but also their long-term potential.
                  </p>

                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* What We Need */}
        <ScrollAnimation>
          <section className="py-16">
            <div className="container">
              <div className="max-w-4xl mx-auto bg-card p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-left text-brown">What We Need</h2> {/* Added text-left */}
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-left list-item">Ongoing Needs</p> {/* Added text-left */}
                  <ul className="space-y-3 text-foreground list-disc list-inside text-left"> {/* Added text-left */}
                    <li className="list-item">Gently used or new clothes and shoes for children and adults</li>
                    <li className="list-item">Books, backpacks, pens, and pencils</li>
                    <li className="list-item">Educational materials and school supplies</li>
                  </ul>
                  <p className="text-foreground mt-6 text-left list-item"> {/* Added text-left */}
                    These items help children learn basic technological skills and provide them with the
                    tools they need to succeed in their education.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
  <section className="py-16  text-accent-foreground">
    <div className="container text-center">
      <h2 className="text-3xl font-bold mb-6">Support Clothing Donations</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Provide children with dignity, comfort, and the tools they need to succeed.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/donate">
          <Button className="button-default" size="lg"> {/* Changed variant to className */}
            Donate Now
          </Button>
        </Link>
        <Link to="/contact">
          <Button className="button-outline" size="lg"> {/* Changed variant to className */}
            Contact Us About Donations
          </Button>
        </Link>
      </div>
    </div>
  </section>
</ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default ClothingDonations;