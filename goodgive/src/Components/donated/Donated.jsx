import './Donated.css';
import { IoFastFoodOutline } from "react-icons/io5";
import { IoFileTrayStackedOutline } from "react-icons/io5";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaDumpsterFire } from "react-icons/fa";
import Vector from '/images/Vector.png';

const Donated = () => {
  return (
    <div className='donated'>
        <div className="dontade-head">
            <h1>how to donate</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem distinctio hic rerum reiciendis. Temporibus natus quisquam nam suscipit perspiciatis deserunt quos sequi dolorum autem beatae.</p>
        </div>
                      {/*DONATE BOX METHODS.......*/}
          <div className="donate-boxes">
            <div className="dont-box">
                <span><IoFastFoodOutline  className='don-icon-1'/></span>
                <h3>donate non-perishable food items</h3>
                <p>Lorem aspernatur minima commodi assumenda quibusdam quam quis accusamus, blanditiis mollitia necessitatibus reprehenderit cum? Ad, obcaecati commodi.</p>

            </div>

            <div className="dont-box">
                <span><IoFileTrayStackedOutline  className='don-icon-2'/></span>
                <h3>donate non-perishable food items</h3>
                <p>Lorem aspernatur minima commodi assumenda quibusdam quam quis accusamus, blanditiis mollitia necessitatibus reprehenderit cum? Ad, obcaecati commodi.</p>
                
            </div>

            <div className="dont-box">
                <span><RiMoneyRupeeCircleFill className='don-icon-3' /></span>
                <h3>donate non-perishable food items</h3>
                <p>Lorem aspernatur minima commodi assumenda quibusdam quam quis accusamus, blanditiis mollitia necessitatibus reprehenderit cum? Ad, obcaecati commodi.</p>
                
            </div>

            <div className="dont-box">
                <span><FaDumpsterFire className='don-icon-4' /></span>
                <h3>donate non-perishable food items</h3>
                <p>Lorem aspernatur minima commodi assumenda quibusdam quam quis accusamus, blanditiis mollitia necessitatibus reprehenderit cum? Ad, obcaecati commodi.</p>
                
            </div>
            </div>   
            <button className='dont-btn'>donate now</button>         
            <img className='btm-img' src={Vector} alt="vector" />
    </div>
  )
}

export default Donated