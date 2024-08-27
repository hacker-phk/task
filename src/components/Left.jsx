import "./Left.css";
import { useState } from "react";

const LeftSide = () => {
  const [categories, setCategories] = useState({
    idealFor: {
      allSelected: false,
      items: ["Men (65)", "Women (63)", "Baby & Kids (59)", "Rainy Season (1)", "Casual (3)"],
    },
    fabric: {
      allSelected: false,
      items: ["French Knot (2)", "Zardosi (2)", "Regular (2)", "Fancy (1)", "Muslin (1)", "Embroidery (1)", "Satin Blend (1)", "Satin (1)"],
    },
    segment: {
      allSelected: false,
      items: ["Silver (4)", "Tericoat (1)", "Ethnic (2)", "Linen (5)", "Contemporary (11)", "Formal Wear (1)", "Raw Silk (2)", "Western Wear (1)", "Cotton (13)"],
    },
    rawMaterials: {
      allSelected: false,
      items: ["Silk (2)", "Silk (2)", "Cotton Silk (3)", "Leather (2)", "Windowpane (2)", "Cotton (5)", "Pinstripes (1)", "Cellulosic Fibers (4)", "Solid (2)", "Chalk Stripes (2)", "Slim Fit (1)", "Tartan (1)"],
    },
    jacketMaterial: {
      allSelected: false,
      items: ["Velvet (5)", "Cotton (7)", "Leather (13)"],
    },
    sleeveLength: {
      allSelected: false,
      items: ["Half Sleeve (2)", "Cap Sleeve (10)"],
    },
    sleeve: {
      allSelected: false,
      items: ["Roll-Up Sleeve (1)", "Regular Sleeves (1)", "Long Sleeve (1)", "Full Sleeve (5)"],
    },
  });

  const toggleSelectAll = (categoryKey) => {
    setCategories((prevState) => ({
      ...prevState,
      [categoryKey]: {
        ...prevState[categoryKey],
        allSelected: !prevState[categoryKey].allSelected,
      },
    }));
  };

  return (
    <div className="left-side">
      {Object.keys(categories).map((categoryKey) => (
        <div className="category" key={categoryKey}>
          <div className="category-header">
            <strong>{categoryKey.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</strong>
            <div className="actions">
              <button onClick={() => toggleSelectAll(categoryKey)}>All</button>
              <button onClick={() => toggleSelectAll(categoryKey)}>Unselect All</button>
            </div>
          </div>
          <ul className="category-items">
            {categories[categoryKey].items.map((item, index) => (
              <li key={index}>
                <input type="checkbox" checked={categories[categoryKey].allSelected} />
                <label>{item}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default LeftSide;
