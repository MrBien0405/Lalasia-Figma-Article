import img2 from "../../assets/Rectangle 41.png";
import img1 from "../../assets/Rectangle 44.png";
import avatar from "../../assets/b1s.png";
import "../Card/Card.scss";
function BasicExample() {
  return (
    <>
      <div className='col'>
        <div className='CardContainer'>
          <div className='boxImg'>
            <img src={img2} alt='logo2' />
          </div>
          <p className='textDesign'>Design Inspiration</p>
          <h2 className='textBedroom'>
            Bedroom Design is the Most Personal...
          </h2>
          <p className='textnd'>
            Is it true that the bedroom design the most personal reflection of
            the owener? Many people believe that to be able to judge a person's
            ...
          </p>

          <div className='boxAvatar'>
            <div className='avatarimg'>
              <img src={avatar} alt='logo' />
            </div>
            <span className='textMorgan'>By Morgan Goldberg </span>
            <span>Tuesday,13 May 2023</span>
          </div>
        </div>

        <div className='CardContainer'>
          <div className='boxImg'>
            <img src={img1} alt='logo2' />
          </div>
          <p className='textDesign'>Tips and Trick</p>
          <h2 className='textBedroom'>
            Create a non-monotonous and dynamic...
          </h2>
          <p className='textnd'>
            Quoted from The Healthy Home Economits, a study in 1932 state that
            color doesn't really have to be visible to have effect ... ...
          </p>

          <div className='boxAvatar'>
            <div className='avatarimg'>
              <img src={avatar} alt='logo' />
            </div>
            <span className='textMorgan'>By Morgan Goldberg </span>
            <span>Tuesday,13 May 2023</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
