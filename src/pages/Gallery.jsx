import { useState } from "react";
import { X, Images, Leaf, ArrowUpRight } from "lucide-react";
import facilities from "../data/facilities";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  // Get unique categories from existing facilities data
  const categories = [
    "All",
    ...new Set(facilities.map((item) => item.category)),
  ];

  // Filter gallery images
  const filteredFacilities =
    activeCategory === "All"
      ? facilities
      : facilities.filter((item) => item.category === activeCategory);

  return (
    <main className="gallery-page">
      {/* Gallery Hero */}
      <section className="gallery-hero">
        <div className="gallery-hero-overlay"></div>

        <div className="gallery-hero-content">
          <span className="gallery-eyebrow">
            <Leaf size={16} />
            Explore Our Environment
          </span>

          <h1>
            A Glimpse Into Our
            <span> Healing Spaces</span>
          </h1>

          <p>
            Discover the peaceful surroundings, wellness spaces and comfortable
            facilities that make every visit a relaxing experience.
          </p>

          <a href="#gallery-content" className="gallery-hero-btn">
            Explore Gallery
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="gallery-section" id="gallery-content">
        <div className="container">
          <div className="gallery-heading">
            <span className="gallery-section-label">
              <Images size={17} />
              Our Gallery
            </span>

            <h2>
              Spaces Designed for
              <span> Wellness</span>
            </h2>

            <p>
              Take a closer look at our facilities and the calming environment
              created for your comfort.
            </p>
          </div>

          {/* Category Filters */}
          <div className="gallery-filters">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`gallery-filter-btn ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="gallery-grid">
            {filteredFacilities.map((item) => (
              <article className="gallery-card" key={item.id}>
                <button
                  type="button"
                  className="gallery-image-button"
                  onClick={() => setSelectedImage(item)}
                  aria-label={`View ${item.title}`}
                >
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />

                  <span className="gallery-image-overlay">
                    <span className="gallery-view-icon">
                      <ArrowUpRight size={22} />
                    </span>
                  </span>
                </button>

                <div className="gallery-card-content">
                  <span className="gallery-card-category">{item.category}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          {filteredFacilities.length === 0 && (
            <div className="gallery-empty">
              <Images size={36} />
              <h3>No images found</h3>
              <p>Please select another category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
          role="presentation"
        >
          <div
            className="gallery-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-modal-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X size={24} />
            </button>

            <img src={selectedImage.image} alt={selectedImage.imageAlt} />

            <div className="gallery-modal-info">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Gallery;
