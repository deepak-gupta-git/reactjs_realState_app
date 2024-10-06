import { useState } from "react";
import "./Header.css"
import  {BiMenuAltRight} from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {

  const [menuOpened, setmenuopened] = useState(false);

  const getMenuStyle = (menuOpened) => {
    if(document.documentElement.clientWidth <=700)
    {
      return {right : !menuOpened && "-100%"}
    }
  }
  return (
    <div>
      <div className="h-wraper">
        <div className=" flexCenter innerWidth paddings h-container ">
            <div className="h-logo">
                <img src="./logo.png " alt="logo" width={100} />
            </div>

            <OutsideClickHandler 
            onOutsideClick={() => {
              setmenuopened(false)
            }}
            >
            <div className="flexCenter h-menu"
            style={getMenuStyle(menuOpened)}
            >            
                <a href="#residencies">Residencies</a>
                <a href="#values">Our Value</a>
                <a href="#contacts">Contact Us</a>
                <a href="#getStarted">Get Started</a>
                <button className="button">
                <a href="#contacts">Contact</a>
                </button>
            </div>

            </OutsideClickHandler>
            <div className="menu-icon" onClick={() => setmenuopened ((prev) => !prev)}>
          <BiMenuAltRight size={30}/>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Header
