import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar.jsx";
import Middle from "./components/Middle.jsx";
import Three from "./components/Three.jsx";
import LeftSide from "./components/Left.jsx";
import RightSide from "./components/Right.jsx";
import Footer from "./Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />

      {/* Wrapping Middle and Three in a container div */}
      <div className="content">
        <Middle />
        <Three />
      </div>

      <div className="lasttwo" style={{display:"flex",flexDirection:"column"}}>
        <div
          className="sides-container"
          style={{ display: "flex", marginBottom: "20px",height:"max-content" }}
        >
          <LeftSide />
          <RightSide />
        </div>

        <div>
          <Footer />
        </div>
      </div>
      {/* Wrapping LeftSide and RightSide in another container div */}

      {/* Footer component */}
    </div>
  );
}

export default App;
