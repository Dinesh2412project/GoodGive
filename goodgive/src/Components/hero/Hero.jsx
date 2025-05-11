import './Hero.css';
import Vision from '/images/Vision.png';
import Mission from '/images/Mission.png';
import OurMission from '/images/OurMission.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-top">
            <div className="hero-left">
                <h2>our vision</h2>
                <p>Lorem voluptates nihil minima aperiam praesentium labore. Consequatur quos consequuntur tempora et quaerat architecto ducimus nostrum aliquam quae, culpa libero modi saepe non magnam obcaecati doloribus assumenda. Fugit, nostrum?</p>
                <span><a href="#">read more</a></span>
            </div>
            <div className="hero-right">
                <img src={Vision} alt="img" />
            </div>
        </div>

        <div className="hero-bottum">
            <div className="hero-bleft">
                <img src={Mission} alt="img" />
                <img className='hero-se-img' src={OurMission} alt="img" />
            </div>
            <div className="hero-bright">
            <h2>our mission</h2>
                <p>Lorem voluptates nihil minima aperiam praesentium labore. Consequatur quos consequuntur tempora et quaerat architecto ducimus nostrum aliquam quae, culpa libero modi saepe non magnam obcaecati doloribus assumenda. Fugit, nostrum?</p>
                <span><a href="#">read more</a></span>

            </div>
        </div>



    </div>
  )
}

export default Hero