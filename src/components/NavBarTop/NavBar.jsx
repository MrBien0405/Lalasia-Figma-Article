import React from "react";
import "./NavBar.scss";
import logo from "../../assets/logo192.png";

function NavBarTop() {
  return (
    <>
      <div className='articleContainer'>
        <nav className='articleHeader'>
          <div className='navbar1'>
            <div className="boximg">
              <img src={logo} alt='logo' />
            </div>
            <h3 className="textnavbar">Lalasia</h3>
          </div>
          <div className='navbar2'>
            <ul className='wrapperNavbar'>
              <li>
                <a href=''>Product</a>
              </li>
              <li>
                <a href=''>Services</a>
              </li>
              <li>
                <a href=''>Article</a>
              </li>
              <li>
                <a href=''>About Us</a>
              </li>
            </ul>
          </div>

          <div className='navbar3'>
            <div className='navbar3-icon'>
              <ion-icon name='bag-outline'></ion-icon>
            </div>
            <div>
              <ion-icon name='person-outline'></ion-icon>
            </div>
          </div>

          <div className='Outline'>
            <ion-icon name='menu-outline'></ion-icon>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBarTop;
