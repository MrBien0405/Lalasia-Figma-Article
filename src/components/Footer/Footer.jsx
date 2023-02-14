import React from "react";
import "./Footer.scss";
import logo from "../../assets/logo192.png";
function Footer() {
  return (
    <>
      <div className='FooterContainer'>
        <div className='FooterArticle'>
          <div className='Footer1'>
            <div className='ChildrenFooter'>
              <div>
                <img src={logo} alt='logo' />
              </div>
              <h2>Lalasia</h2>
            </div>
            <p className='textFooter'>
              Lalasia is digital agency that help you make better experrience
              iaculis cras in
            </p>
          </div>

          <div className='Footer2'>
            <div className='wrapperFooter'>
              <h4>Product</h4>
              <p>New Arrivals</p>
              <p>Best Selling</p>
              <p>Home Decor</p>
              <p>Kitchen Set</p>
            </div>

            <div className='wrapperFooter1'>
              <h4>Services</h4>
              <p>Catalog</p>
              <p>Blog</p>
              <p>FaQ</p>
              <p>Pricing</p>
            </div>

            <div className='wrapperFooter2'>
              <h4>Follow Us</h4>
              <p>Facebook</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
