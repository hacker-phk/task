import "./Navbar.css";
import logo from "./assets/logo.svg";
import icons from "./assets/icons.svg"
// import Navbar from './Navbar.jsx';
const Navbar = () => {
  return(<>
  <div className='navbar'>
      <div>

      <img src={logo} alt="" className='logo' />
      </div>
      <div  className='center'>
        <h1 className='logo_text'> Title </h1>
        <div className='items'>
          <p>shop</p>
          <p>Skills</p>
          <p>stories</p>
          <p>contact us</p>
          <p>about</p>
        </div>

      </div>
      <div className='links'><img src={icons} alt="" /></div>
    </div>
  </>);
}

export default Navbar;