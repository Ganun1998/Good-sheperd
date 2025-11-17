
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import clinic_image from "../../assets/clinic_image.jpg";
import "./programs.css"; // Import the CSS file

const MedicalClinic = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">

        {/* Hero Image */}
        <ScrollAnimation>
          <section className="medical-py-8">
            <div className="medical-container">
              <img 
                src={clinic_image} 
                alt="Medical clinic providing care"
                className="w-full medical-max-w-4xl mx-auto rounded-lg medical-shadow-xl max-h-60"
              />
            </div>
          </section>
        </ScrollAnimation>

        {/* Program Details */}
        <ScrollAnimation>
          <section className="medical-py-16 medical-bg-secondary">
            <div className="medical-container">
              <div className="medical-max-w-4xl mx-auto">
                <h2 className="medical-text-3xl font-bold medical-text-accent medical-mb-6">About This Program</h2>
                <div className="space-y-6 medical-text-foreground">

                  <h3 className="medical-text-2xl font-bold mb-4">The Importance of Health</h3>
                  <p className="medical-text-lg leading-relaxed">
                    Good health is essential to every child's long-term success and development. In remote and impoverished rural areas, the situation becomes dire; children who fall ill with preventable diseases such as malaria often face life-threatening risks. Even minor ailments can escalate quickly without access to proper medical care, underscoring the critical need for robust healthcare in these communities.
                  </p>

                  <h3 className="medical-text-2xl font-bold mb-4">Historical Support from USAID</h3>
                  <p className="medical-text-lg leading-relaxed">
                    For several years, USAID has played a vital role in supporting our community's basic healthcare needs. Through its assistance, the orphanage and nearby villages received essential medical supplies, first aid materials, vaccines, and treatment for treatable conditions such as malaria, pneumonia, HIV, typhoid, cholera, diarrhea, and hepatitis A—diseases that are widespread in the region. This support has significantly reduced mortality rates and improved the overall health of the community, making a tangible difference in the lives of many.
                  </p>

                  <h3 className="medical-text-2xl font-bold mb-4">Impact of the USAID Program Discontinuation</h3>
                  <p className="medical-text-lg leading-relaxed">
                    Unfortunately, since the USAID program was discontinued earlier this year, the impact has been devastating. During my sister's and my visit this past June, we witnessed firsthand the tragic consequences, including ten children who died from preventable diseases like malaria and typhoid. With no functioning medical clinic in the area, residents are forced to travel nearly 20 miles to reach the nearest health center—often on perilous roads and sometimes on foot—exposing them further to health risks.
                  </p>

                  <h3 className="medical-text-2xl font-bold mb-4">The Urgent Need for a Healthcare Facility</h3>
                  <p className="medical-text-lg leading-relaxed">
                    The lack of access to healthcare has left children and vulnerable families at severe risk. The current situation cannot continue; that is why building a small healthcare facility in the community could truly save lives. Such a facility would not only provide immediate medical attention but also serve as a preventative health center, offering vaccinations and health education that can avert future outbreaks.
                  </p>

                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* Funding */}
        <ScrollAnimation>
          <section className="medical-py-16">
            <div className="medical-container">
              <div className="medical-max-w-4xl mx-auto medical-bg-card p-8 rounded-lg medical-shadow-lg">
                <h2 className="medical-text-3xl font-bold medical-text-accent medical-mb-6">Funding Needed</h2>
                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="medical-text-5xl font-bold medical-text-accent">$10,000</span>
                  </div>
                  <p className="medical-text-foreground mt-6">
                    Your donation will support healthcare services including routine check-ups, vaccinations, 
                    and treatment for common illnesses. Access to healthcare is critical to ensure children 
                    receive the medical attention they need to stay healthy and thrive.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA */}
        <ScrollAnimation>
          <section className="medical-py-16 medical-text-accent-foreground">
            <div className="medical-container text-center">
              <h2 className="medical-text-3xl font-bold medical-mb-6">Support Healthcare</h2>
              <p className="medical-text-xl medical-mb-8 medical-max-w-2xl mx-auto">
                Your contribution can save lives. Help us bring healthcare to those who need it most.
              </p>
              <Link to="/donate">
                <Button className="button-default" size="lg">
                  Donate Now
                </Button>
              </Link>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default MedicalClinic;