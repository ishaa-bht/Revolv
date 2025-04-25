import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Features.css';

// Import your images
import aiImage from './Ai.png'; // Replace with your image path
import toolkitImage from './toolkit.png'; // Replace with your image path
import scalabilityImage from './scalability.png'; // Replace with your image path

const Features = () => {
  return (
    <section id="features" className="features-section">
      <h1 className="features-title">Powerful Features For Your Business</h1>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="feature-carousel"
      >
        <SwiperSlide>
          <div className="feature-slide">
            <img src={aiImage} alt="AI-Powered Recommendations" className="slide-image" />
            <div className="slide-content">
              <h3>AI-Powered Recommendations</h3>
              <p>Get personalized business tool suggestions based on your needs.</p>
              <button className="feature-button">Learn More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="feature-slide">
            <img src={toolkitImage} alt="Digital Transformation Toolkit" className="slide-image" />
            <div className="slide-content">
              <h3>Digital Transformation Toolkit</h3>
              <p>Access essential tools like QR code generators, webpage builders, and social media managers.</p>
              <button className="feature-button">Explore Tools</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="feature-slide">
            <img src={scalabilityImage} alt="Scalability for Every Stage" className="slide-image" />
            <div className="slide-content">
              <h3>Scalability for Every Stage</h3>
              <p>Whether you're a startup or an expanding business, Revolv grows with you.</p>
              <button className="feature-button">See Plans</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Features;