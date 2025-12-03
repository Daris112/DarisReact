import React from "react";
import "./Gallery.css";

const images = [
  { src: "./steak.webp", title: "Steak" },
  { src: "", title: "Pasta" },
  { src: "", title: "Salmon" },
  { src: "", title: "Dessert" },
  { src: "", title: "Drink" },
  { src: "./interior.webp", title: "Interior" },
  { src: "", title: "Ambiance" },
  { src: "", title: "Chef Special" }

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
