import "./TrendingTop.scss";
import img45 from "../../assets/Rectangle 45.png";
import img46 from "../../assets/Rectangle 46.png";
import img47 from "../../assets/Rectangle 47.png";
import avatar from "../../assets/b1s.png";
function TrendingTop() {
  const dataTrendingTop = [
    {
      category: "Tips and Trick",
      tittle: "Beautifull and Funcitonal Home Terrace Decoraton",
      content:
        "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id - If by chance your house has enough space or space.",
      img: img45,
      avatar: avatar,
      username: "By Morgan Goldberg",
      date: "Friday, 1 April 2022",
    },
    {
      category: "Design Inspiration",
      tittle:
        "Modern Minimalist Home Design: Aesthetics of Modern Home Interiors",
      content:
        "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id – If by chance your house has enough space or space.",
      img: img46,
      avatar: avatar,
      username: "By Rizal Ahmad",
      date: "Wednesday, 17 March 2022",
    },
    {
      category: "Color Guide",
      tittle:
        "20+ Best Kitchen Paint Colors That Make Kitchen Spaces Look More Fun",
      content:
        "Home terrace decorations are part of every decoration or overall home design. Interiordesign.id - If by chance your house has enough space or space.",
      img: img47,
      avatar: avatar,
      username: "By Filipus Pendi",
      date: "Saturday, 29 February 2022",
    },
  ];
  return (
    <>
      <div className='ContainerTrendingTop'>
        <div className='wrapperTrendingTop'>
          <div className='boxTrendingTop1'>
            <ul className='boxNavbarTrendingTop'>
              <li>
                <a className='All' href='/'>
                  All
                </a>
              </li>
              <li>
                <a href='/'>Tips and Trick</a>
              </li>
              <li>
                <a href='/'>Interior Design</a>
              </li>
              <li className="a">
                <a href='/'>Design Inspiration</a>
              </li>
              <li className="b">
                <a href='/'>Color Guide</a>
              </li>
            </ul>
          </div>

          <div className='boxTrendingTop2'>
            <div>
              <ion-icon name='filter-outline'></ion-icon>
            </div>
            <div className='Filter'>Filter</div>
          </div>
        </div>

        {dataTrendingTop.map((e) => (
          <div className='wrapperTopTrending1'>
            <div className='boxImgTop'>
              <img src={e.img} alt='logo' />
            </div>
            <div className='boxTopTrending'>
              <p className='category'>{e.category}</p>
              <h3 className='title'>{e.tittle}</h3>
              <p className='content'>{e.content}</p>

              <div className='boxAvatar'>
                <div className='avatarimg'>
                  <img src={e.avatar} alt='logo' />
                </div>
                <span className='textMorgan'>{e.username}</span>
                <span className="abc">{e.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TrendingTop;
