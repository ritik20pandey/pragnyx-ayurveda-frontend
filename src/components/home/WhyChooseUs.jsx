import {
  Leaf,
  HeartHandshake,
  UserRoundCheck,
  Flower2,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import "./WhyChooseUs.css";

function WhyChooseUs() {
  const features = [
    {
      number: "01",
      icon: <UserRoundCheck size={27} strokeWidth={1.6} />,
      title: "Personalized Attention",
      description:
        "Every individual has unique needs. Our approach focuses on thoughtful consultations and individual wellness goals.",
    },
    {
      number: "02",
      icon: <Leaf size={27} strokeWidth={1.6} />,
      title: "Traditional Wisdom",
      description:
        "Discover wellness practices inspired by the timeless principles and knowledge of Ayurveda.",
    },
    {
      number: "03",
      icon: <HeartHandshake size={27} strokeWidth={1.6} />,
      title: "Compassionate Care",
      description:
        "We believe in creating a welcoming environment where every visitor feels heard, respected and supported.",
    },
    {
      number: "04",
      icon: <Flower2 size={27} strokeWidth={1.6} />,
      title: "Holistic Wellness",
      description:
        "Explore a balanced approach that considers daily habits, mindful living and overall well-being.",
    },
  ];

  const pillars = [
    {
      icon: <Leaf size={21} />,
      title: "Mind",
      description: "Mindful living",
    },
    {
      icon: <HeartHandshake size={21} />,
      title: "Body",
      description: "Thoughtful care",
    },
    {
      icon: <Sparkles size={21} />,
      title: "Lifestyle",
      description: "Balanced habits",
    },
  ];

  return (
    <section className="why-section section">
      <div className="container">
        {/* SECTION HEADING */}
        <div className="why-header">
          <div className="why-eyebrow">
            <span></span>
            <p>WHY CHOOSE US</p>
            <span></span>
          </div>

          <h2 className="why-title">
            Wellness That
            <span> Puts You First.</span>
          </h2>

          <p className="why-subtitle">
            A thoughtful approach to traditional wellness, where your individual
            needs, comfort and well-being remain at the heart of everything we
            do.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="why-grid">
          {features.map((feature) => (
            <article className="why-card" key={feature.number}>
              <div className="why-card-top">
                <div className="why-icon">{feature.icon}</div>

                <span className="why-number">{feature.number}</span>
              </div>

              <h3 className="why-card-title">{feature.title}</h3>

              <p className="why-card-description">{feature.description}</p>

              <div className="why-card-bottom">
                <span className="why-card-line"></span>
                <ArrowUpRight size={19} />
              </div>
            </article>
          ))}
        </div>

        {/* WELLNESS PILLARS */}
        <div className="why-pillars">
          <div className="pillars-intro">
            <span>OUR PHILOSOPHY</span>
            <h3>
              A more thoughtful
              <br />
              way to live well.
            </h3>
          </div>

          <div className="pillars-list">
            {pillars.map((pillar) => (
              <div className="pillar-item" key={pillar.title}>
                <div className="pillar-icon">{pillar.icon}</div>

                <div>
                  <h4>{pillar.title}</h4>
                  <p>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
