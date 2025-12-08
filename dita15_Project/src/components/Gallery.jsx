import React from "react";
import "./Gallery.css";

const images = [
  { src: "./steak.webp", title: "Steak" },
  { src: "./pasta.jpg", title: "Pasta" },
  { src: "./salmon.webp", title: "Salmon" },
  { src: "./dessert.webp", title: "Dessert" },
  { src: "./drink.webp", title: "Drink" },
  { src: "./interior.jpg", title: "Interior" },
  { src: "./ambiance.webp", title: "Ambiance" },
  { src: "./chefspecial.jpg", title: "Chef Special" }

];

const Gallery = () => {
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
