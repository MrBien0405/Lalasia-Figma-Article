import React from "react";
import "./Content.scss";
import CarouselSlider from "../CarouselSlider/CarouselSlider";
import img from "../../assets/b1s.png";
import Card from "../Card/Card.jsx";
import TrendingTop from "../TrendingTop/TrendingTop";
function Content() {
  return (
    <>
      <div className='ContentContainer'>
        <div className='ContentArticle'>
          <div className='CarouselContainer'>
            <div className='textContent'>
              <h2 className='TitleContent'>Article</h2>
              <p className='Content'>
                We display products based on the latest products we have, if you
                want to see our old peoducts please enter the name of the item
              </p>
            </div>

            <CarouselSlider />

            <div className='BoxTip'>
              <p className='textTip'>Tips and Trick</p>
              <h5 className='textTitle'>
                This 400-Square-Foot New York Apartment Is Maximized Width
                Custom Millwork
              </h5>
              <div className='boxAvatar'>
                <div className='avatarimg'>
                  <img src={img} alt='logo' />
                </div>
                <span className='textMorgan'>By Morgan Goldberg </span>
                <span className="ContentText">Tuesday,13 May 2023</span>
              </div>
            </div>
          </div>

          <div className='CardContainer'>
            <p className='textNew'>Daily News</p>
            <h2 className='textTodaytop'>Today top headlines</h2>

            <Card />
          </div>

          <div className='TrendingTop'>
            <p className='textTrendingTop'>Trending Topics</p>
            <h2 className='textPopular'>Popular last week</h2>

            <TrendingTop />
          </div>

          <div className='TextLoad'><p className="ptextLoad">Load More</p></div>

          <div className="TextSubscribe">
            <h2>Subscribe our newsletter</h2>
            <div className="textTalk">
              <p className="ptextTalk">Let's Talk</p>
              <ion-icon className="iconTalk" name='arrow-forward-outline'></ion-icon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
