import React from "react";
import "./Menu.css";

const menuItems = {
  starters: [
    { name: "Caesar Salad", description: "Crisp romaine, parmesan, house-made croutons", price: "$12", icon: "🥗", gradient: "starter1" },
    { name: "Garlic Prawns", description: "Sautéed prawns in white wine & herbs", price: "$18", icon: "🍤", gradient: "starter2" },
    { name: "French Onion Soup", description: "Caramelized onions, gruyere, crostini", price: "$14", icon: "🥖", gradient: "starter3" }
  ],
  mainCourses: [
    { name: "Ribeye Steak", description: "12oz premium beef, truffle butter, vegetables", price: "$42", icon: "🥩", gradient: "main1" },
    { name: "Grilled Salmon", description: "Atlantic salmon, lemon beurre blanc, asparagus", price: "$36", icon: "🐟", gradient: "main2" },
    { name: "Truffle Pasta", description: "Fresh tagliatelle, black truffle, parmesan", price: "$32", icon: "🍝", gradient: "main3" }
  ],
  desserts: [
    { name: "Crème Brûlée", description: "Vanilla custard, caramelized sugar", price: "$10", icon: "🍰", gradient: "dessert1" },
    { name: "Chocolate Fondant", description: "Warm chocolate cake, vanilla ice cream", price: "$12", icon: "🍫", gradient: "dessert2" },
    { name: "Tarte Tatin", description: "Caramelized apple tart, crème fraîche", price: "$11", icon: "🥧", gradient: "dessert3" }
  ]
};

const Menu = () => {
  const renderMenuCategory = (title, items) => (
    <div className="menu-category">
      <h3 className="menu-category-title">{title}</h3>
      <div className="menu-items">
        {items.map((item, idx) => (
          <div key={idx} className="menu-card">
            <div className={`menu-card-icon ${item.gradient}`}>
              <span className="icon">{item.icon}</span>
              <div className="icon-glow"></div>
            </div>
            <div className="menu-card-content">
              <h4 className="menu-card-name">{item.name}</h4>
              <p className="menu-card-description">{item.description}</p>
              <p className="menu-card-price">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <div className="menu-header">
          <h2>Our Exquisite Menu</h2>
          <p>Handpicked delights crafted for your taste</p>
        </div>
        {renderMenuCategory("Starters", menuItems.starters)}
        {renderMenuCategory("Main Courses", menuItems.mainCourses)}
        {renderMenuCategory("Desserts", menuItems.desserts)}
      </div>
    </section>
  );
};

export default Menu;
