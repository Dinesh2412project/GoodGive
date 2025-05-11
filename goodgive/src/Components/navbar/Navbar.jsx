import './Navbar.css';
import { FiShoppingCart } from "react-icons/fi";
import Logo from '/images/Good Give Fotter Logo.svg';
import Landing from '/images/LandingPage.png';
import Landingpng from '/images/Landing.png';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { useState } from 'react';


const Navbar = () => {
  const [open,setopen]=useState(false);
  const handleclick =()=>setopen(!open);
  const closemenu =()=>setopen(false);
  return (
    <div className='navbar'>
      <div className="navbar-head">
        <div className="navbar-logo">
          <img src={Logo} alt="Anand" />
          <h2>goodgive</h2>
        </div>
        <div onClick={handleclick} className="navber-icons">
          {open ?<IoMdClose /> :<IoMdMenu />}
        
        
        </div>
        <ul className={open ?'navber-thems active':'navber-thems'}>
          <li><a onClick={closemenu} href="#">About</a></li>
          <li><a onClick={closemenu} href="#">donate</a></li>
          <li><a onClick={closemenu} href="#">volunteer</a></li>
          <li><a onClick={closemenu} href="#">what we do</a></li>
          <li><a onClick={closemenu} href="#">contact us</a></li>
        </ul>
        <div className="navbar-icon">
          <span className='icons'><FiShoppingCart /></span>
          <button>login</button>
        </div>
      </div>
                            {/* second methods...... */}

        <div className="navbar-fotter">
          <div className="navbar-left">
            <h1>fight against hunger donating</h1>
            <h2>food today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, Quis ea officia enim nihil hic quibusdam quas, obcaecati et!</p>
            <div className="nav-btn">
              <button>donate now</button>
              <button className='active'>register as volunteer</button>
            </div>
          </div>
          <div className="navbar-right">
            <img src={Landing} alt="Landingpage" />
            <div className="navbar-box">

            </div>
            <div  className='nav-fotter-img'>
            <img src={Landingpng} alt="img" />
            </div>
          </div>
          
          </div> 

    </div>
  )
}

export default Navbar