import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.css";

const heroImages = [
  "/assets/hero1.jpg",
  "/assets/hero2.jpg",
  "/assets/hero3.jpg",
  "/assets/hero4.jpg",
];

// Slider settings for React Slick
const sliderSettings = {
  dots: true, // Show navigation dots
  infinite: true, // Loop slides
  speed: 500, // Transition speed
  slidesToShow: 1, // Show one slide at a time
  slidesToScroll: 1, // Scroll one slide at a time
  autoplay: true, // Enable auto-slide
  autoplaySpeed: 3000, // Slide duration (in ms)
};

<Slider {...sliderSettings}>
  {heroImages.map((image, index) => (
    <div key={index}>
      <img src={image} alt={`Hero ${index + 1}`} className="hero-image" />
    </div>
  ))}
</Slider>;

const features = [
  {
    img: "/assets/analyze.jpg",
    title: "Analyze Your Resume",
    text: "Get deep insights into your resume's strengths and weaknesses with our AI-powered analysis.",
  },
  {
    img: "/assets/feedback.png",
    title: "Receive Feedback",
    text: "Our tool provides personalized suggestions to make your resume stand out to employers.",
  },
  {
    img: "/assets/growth.jpg",
    title: "Grow Your Career",
    text: "Unlock your potential and increase your chances of landing your dream job.",
  },
];

const App = () => {
  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <Slider {...sliderSettings} className="hero-slider">
          {heroImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="hero-image"
              />
            </div>
          ))}
        </Slider>
        <div className="hero-content">
          <h1>Transform Your Resume, Land Your Dream Job</h1>
          <p>
            Our tool provides AI-powered insights and personalized feedback to
            help you craft a winning resume.
          </p>
          <button>Get Started for Free</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <div
              className={`feature-inner ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="feature-image">
                <img src={feature.img} alt={feature.title} />
              </div>
              <div className="feature-text">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <img src="/assets/profile1.jpg" alt="User 1" />
            <blockquote>
              "This tool helped me get my dream job. The feedback was insightful
              and actionable!"
            </blockquote>
          </div>
          <div className="testimonial">
            <img src="/assets/profile2.jpg" alt="User 2" />
            <blockquote>
              "I landed multiple interviews after using this tool. Highly
              recommend it!"
            </blockquote>
          </div>
          <div className="testimonial">
            <img src="/assets/profile3.jpg" alt="User 3" />
            <blockquote>
              "A must-have for anyone looking to improve their resume and career
              prospects."
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
