import './stories.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Asha from '/images/Asha.png';
import Story from '/images/Story.png';
import Anand from '/images/Anand.png'
import Stories from '/images/Stories.png';

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className='storiess'>
      <h2 className='stor-head'>success stories </h2>
      <p className='stor-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam eos temporibus illum itaque cum ipsum quasi a vel neque velit!</p>
      <Slider {...settings}>
        <div className="stories">
          <img src={Asha} alt="img" /> 
          <h2>Asha's story</h2>
          <span>"</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita est, odio delectus rem consequatur odit, molestiae veniam iste, suscipit exercitationem? At atque explicabo nesciunt.</p>
          
        </div>
        <div className="stories ">
          <img src={Story} alt="" />
          <h2>pinto's story</h2>
          <span>"</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita est, odio delectus rem consequatur odit, molestiae veniam iste, suscipit exercitationem? At atque explicabo nesciunt.</p>
        </div>
        <div className='stories'>
          <img src={Anand } alt="img" />
          <h2>Anand's story</h2>
          <span>"</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita est, odio delectus rem consequatur odit, molestiae veniam iste, suscipit exercitationem? At atque explicabo nesciunt.</p>
        </div>
        <div className='stories'>
          <img src={Anand } alt="img" />
          <h2>Asha's story</h2>
          <span>"</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni expedita est, odio delectus rem consequatur odit, molestiae veniam iste, suscipit exercitationem? At atque explicabo nesciunt.</p>
        </div>

      </Slider>
      <img className='storie-img' src={Stories} alt="img" />
    </div>
  );
};

export default SimpleSlider;
