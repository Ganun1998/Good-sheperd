import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import ScrollAnimation from "../../components/ScrollAnimation";

const OurVideo = () => {
  return (
    <div className="video-container">
      <Navigation />
      
      <main className="video-main">
        <section className="video-hero">
          <div className="video-hero-content">
            <h1 className="video-title">Our Video</h1>
            <p className="video-subtitle">
              Watch our story unfold and meet the children whose lives are being transformed.
            </p>
          </div>
        </section>

        <ScrollAnimation>
          <section className="video-content">
            <div className="video-text-container">
              <div className="video-placeholder">
                {/* Replace the src with your video URL */}
                <iframe 
                  className="video-embed"
                  src="https://www.youtube.com/embed/VIDEO_ID" 
                  title="Our Story"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-description">
                <p className="video-description-text">
                  Experience the impact of Good Shepherd Orphanage through the eyes of the children, 
                  staff, and community members. Our documentary showcases the daily life at the orphanage, 
                  the challenges we face, and the incredible transformation happening in Jikow, South Sudan.
                </p>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default OurVideo;