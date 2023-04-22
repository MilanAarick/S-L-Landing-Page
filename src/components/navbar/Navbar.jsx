import { useState } from "react";
import { RiMenu3Line, RiCloseLine} from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
import WalletButton from "./WalletButtton";

const Menu = () =>(
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#mwsl">What is SL</a></p>
    <p><a href="#posibility"></a>Smart Luncher</p>
    <p><a href="#features">Case Study</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
 const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="mw__navbar">
      <div className="mw__navbar-links">
        <div className="mw__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="mw__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <div className="mw__navbar-sign">
        <p>Sign in</p>
        <WalletButton/>
      </div>
      <div className="mw__navbar-menu">
        {toggleMenu
         ?
          <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
         :<RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
      
        }
        {toggleMenu && (
          <div className="mw__navbar-menu_container scale-up-center">
            <div className="mw__navbar-menu_container-links">
              <Menu/>
              <div className="mw__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <WalletButton/>
              </div>  
            </div>

          </div>

        )}
      </div>
    </div>
    
  )
}

export default Navbar