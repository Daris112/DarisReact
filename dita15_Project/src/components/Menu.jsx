import React from "react";
import "./Menu.css";

const menuItems ={
  starters: [
    { name: "Stuffed Mushrooms", description: "Herb cream cheese, parmesan, garlic", price: "$11", image: "/stuffedmushrooms.jpg" },
    { name: "Shrimp Cocktail", description: "Chilled prawns, cocktail sauce, lemon", price: "$16", image: "/Shrimp.jpg" },
    { name: "Mini Sliders", description: "Beef sliders, caramelized onions, cheddar", price: "$15", image: "/minicheeseburgers.webp" },
    { name: "Caprese Salad", description: "Fresh mozzarella, basil, balsamic glaze", price: "$13", image: "/salad.jpeg" },
    { name: "Caesar Salad", description: "Crisp romaine, parmesan, house-made croutons", price: "$12", image: "/CaesarSalad.jpg" },
    { name: "Garlic Prawns", description: "Sautéed prawns in white wine & herbs", price: "$18", image: "/Shrimp.jpg" },
    { name: "French Onion Soup", description: "Caramelized onions, gruyere, crostini", price: "$14", image: "/OnionSoup.jpg" },
    { name: "Bruschetta", description: "Tomatoes, basil, garlic, olive oil", price: "$10", image: "/basilgarlicbruschetta.webp" }
  ],

  mainCourses: [
    { name: "Beef Wellington", description: "Tenderloin wrapped in puff pastry & mushrooms", price: "$55", image: "/beef-wellington.png" },
    { name: "Seafood Paella", description: "Saffron rice, shrimp, mussels, calamari", price: "$40", image: "/paella.webp" },
    { name: "Lamb Chops", description: "Herb-marinated lamb, roasted vegetables", price: "$46", image: "/grilledlamb.jpg" },
    { name: "Lobster Risotto", description: "Creamy risotto with fresh lobster & herbs", price: "$48", image: "/risotto.webp" },
    { name: "Ribeye Steak", description: "12oz premium beef, truffle butter, vegetables", price: "$42", image: "/Rib-Eye-Steak.jpg" },
    { name: "Grilled Salmon", description: "Atlantic salmon, lemon beurre blanc, asparagus", price: "$36", image: "/grilled_salmon.jpg" },
    { name: "Truffle Pasta", description: "Fresh tagliatelle, black truffle, parmesan", price: "$32", image: "/trufflepasta.jpg" },
    { name: "Chicken Alfredo", description: "Creamy parmesan sauce, grilled chicken", price: "$28", image: "/CHICKEN-ALFREDO.jpg" }
  ],

  desserts: [
    { name: "Banana Split", description: "Banana, ice cream scoops, chocolate drizzle", price: "$9", image: "/banana-split.jpg" },
    { name: "Matcha Cake", description: "Soft matcha sponge, cream layers", price: "$11", image: "/Matcha-Cake.webp" },
    { name: "Mango Sorbet", description: "Refreshing tropical sorbet", price: "$8", image: "/mango-sorbet.avif" },
    { name: "Pistachio Gelato", description: "Italian gelato with roasted pistachios", price: "$9", image: "/Pistachio-Gelato.jpg" },
    { name: "Crème Brûlée", description: "Vanilla custard, caramelized sugar", price: "$10", image: "/Creme-Brulee.webp" },
    { name: "Chocolate Fondant", description: "Warm chocolate cake, vanilla ice cream", price: "$12", image: "/ChocolateFondant.webp" },
    { name: "Tarte Tatin", description: "Caramelized apple tart, crème fraîche", price: "$11", image: "/apple-tarte-tatin.webp" },
    { name: "Strawberry Cheesecake", description: "Fresh berries, cream cheese, biscuit base", price: "$13", image: "/StrawberryChesecake.jpg" }
  ]
}


const Menu = () => {
  const renderMenuCategory = (title, items) => (
    <div className="menu-category">
      <h3 className="menu-category-title">{title}</h3>
      <div className="menu-items">
        {items.map((item, idx) => (
          <div key={idx} className="menu-card">
            <div className={`menu-card-icon ${item.gradient}`}> 
              {item.image ? (
                <img src={item.image} alt={item.name} />
              ) : (
                <span className="menu-icon-emoji">{item.icon}</span>
              )}
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