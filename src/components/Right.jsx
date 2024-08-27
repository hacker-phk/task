import "./Right.css";
import img from "../assets/logo.svg"; // Example logo, replace with actual image imports
import img1 from "../assets/Productimages/dataset_clothing_images-main/dress/dress1.jpg";
import img2 from "../assets/Productimages/dataset_clothing_images-main/dress/dress2.jpg";
import img3 from "../assets/Productimages/dataset_clothing_images-main/dress/dress3.jpg";
import img4 from "../assets/Productimages/dataset_clothing_images-main/dress/dress4.jpg";
import img5 from "../assets/Productimages/dataset_clothing_images-main/dress/dress5.jpg";
import img6 from "../assets/Productimages/dataset_clothing_images-main/dress/dress6.jpg";
import img7 from "../assets/Productimages/dataset_clothing_images-main/dress/dress7.jpg";

const RightSide = () => {
  const products = [
    {
      name: "PPXOC Milkyway dress in pressed flowers",
      price: "Sign in or Create an account to see pricing",
      imageUrl: img1,
      isNew: true,
      isOutOfStock: false,
    },
    {
      name: "PPXOC Milkyway dress in pressed flowers",
      price: "Sign in or Create an account to see pricing",
      imageUrl: img2,
      isNew: false,
      isOutOfStock: true,
    },
    {
      name: "Product Name",
      price: "Sign in or Create an account to see pricing",
      imageUrl: img3,
      isNew: false,
      isOutOfStock: false,
    },
    {
      name: "PPXOC Milkyway dress in pressed flowers",
      price: "Sign in or Create an account to see pricing",
      imageUrl: img4,
      isNew: true,
      isOutOfStock: false,
    },
    {
      name: "PPXOC Milkyway dress in pressed flowers",
      price: "Sign in or Create an account to see pricing",
      imageUrl: img5,
      isNew: false,
      isOutOfStock: true,
    },
    {
      name: "Product Name",
      price: "Sign in or Create an account to see pricing",
      imageUrl: img6,
      isNew: false,
      isOutOfStock: false,
    },
    // Add more products as needed
  ];

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
