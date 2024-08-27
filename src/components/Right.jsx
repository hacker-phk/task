import "./Right.css";
import img from "../assets/logo.svg"; // Example logo, replace with actual image imports
import img1 from "../assets/Productimages/dataset_clothing_images-main/dress/dress1.jpg";
import img2 from "../assets/Productimages/dataset_clothing_images-main/dress/dress2.jpg";
import img3 from "../assets/Productimages/dataset_clothing_images-main/dress/dress3.jpg";
import img4 from "../assets/Productimages/dataset_clothing_images-main/dress/dress4.jpg";
import img5 from "../assets/Productimages/dataset_clothing_images-main/dress/dress5.jpg";
import img6 from "../assets/Productimages/dataset_clothing_images-main/dress/dress6.jpg";
import img7 from "../assets/Productimages/dataset_clothing_images-main/dress/dress7.jpg";
import products from "../assets/Products.js"
const RightSide = () => {
  

  return (
    <div className="right-side">
      {products.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image">
            <img src={product.imageUrl} alt={product.name} />
            {product.isNew && <span className="new-product">New</span>}
            {product.isOutOfStock && <span className="out-of-stock">Out of Stock</span>}
          </div>
          <div className="product-details">
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <div className="product-actions">
              <button className="explore-skill">Explore this skill</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RightSide;
