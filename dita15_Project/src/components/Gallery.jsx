import React, { useEffect } from "react";
import "./Gallery.css";

const images = [
  { src: "./steak.jpg", title: "Steak" },
  { src: "./pasta.jpg", title: "Pasta" },
  { src: "./salmon.webp", title: "Salmon" },
  { src: "./dessert.webp", title: "Dessert" },
  { src: "./drink.webp", title: "Drink" },
  { src: "./interior.jpg", title: "Interior" },
  { src: "./ambiance.webp", title: "Ambiance" },
  { src: "./chefspecial.jpg", title: "Chef Special" }
];

const Gallery = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".gallery-card");

            cards.forEach((card, index) => {
              card.style.transitionDelay = `${index * 0.08}s`;
              card.classList.add("show");
            });

            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -120px 0px"
      }
    );

    const section = document.querySelector(".gallery-section");
    if (section) observer.observe(section);
  }, []);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2>Gallery</h2>
        <p>Explore our dishes and atmosphere</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <div key={i} className="gallery-card">
            <img src={img.src} alt={img.title} />
            <div className="gallery-overlay">
              <h3>{img.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
