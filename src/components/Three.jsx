import "./Three.css";
import { useState } from "react";

const Three = () => {
  const [selectedOption, setSelectedOption] = useState("Recommended list");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setDropdownOpen(false); // Close the dropdown after selecting
  };

  return (
    <>
      <div className="three">
        <div className="no_of_items">3425 items</div>
        <div className="toggle">
          <a href="#">Show filter</a>
        </div>
        <div className="recommended">
          <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              {selectedOption} <span className="arrow-down">V</span>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#" onClick={() => handleOptionClick("Newest Arrivals")}>
                  Newest Arrivals
                </a>
                <a href="#" onClick={() => handleOptionClick("Low to High")}>
                  Low to High
                </a>
                <a href="#" onClick={() => handleOptionClick("High to Low")}>
                  High to Low
                </a>
                <a href="#" onClick={() => handleOptionClick("Top Rated")}>
                  Top Rated
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Three;
