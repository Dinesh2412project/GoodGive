import './Values.css';
import { RiContactsFill } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import Wave from '/images/Wave.png';

const Values = () => {
  return (
    <div className='values'>
        <div className="values-head">
        <h1>our core values</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ipsum, dolorem eligendi error perspiciatis eaque voluptatem minima officiis voluptatibus excepturi sequi eum quos aspernatur hic!</p>
        </div>
        <div className="values-boxes">
            <div className="val-box">
                <span><RiContactsFill /></span>
                <h3>compassion</h3>
                <p>Lorem incidunt similique dolorum distinctio eius maiores aut, explicabo quod?</p>

            </div>

            <div className="val-box">
                <span><FaThumbsUp /></span>
                <h3>integrity</h3>
                <p>Lorem incidunt similique dolorum distinctio eius maiores aut, explicabo quod?</p>
                
            </div>

            <div className="val-box">
                <span><LuCalendarDays /></span>
                <h3>sustainability</h3>
                <p>Lorem incidunt similique dolorum distinctio eius maiores aut, explicabo quod?</p>
                
            </div>
        </div>

                              {/*SECOND METHODES OF AMOUNT.......*/}
            <div className="valu-buttom-box">                 

         <div className="values-hea">
        <h1 className='btum-1'>our impact so far</h1>
        <p className='btum-para'>Lorem  error perspiciatis eaque voluptatem minima officiis voluptatibus excepturi sequi eum quos aspernatur hic!</p>
        </div>   
        <div className="volues-box">
        <div className="val-bottum">
            <h1>20000+</h1>
            <h5>meals served</h5>
            <p>Lorem adipisicing elit. Autem nostrum nihil nulla?</p>
            </div>  

            <div className="val-bottum">
            <h1>5000+</h1>
            <h5>food distributed</h5>
            <p>Lorem adipisicing elit. Autem nostrum nihil nulla?</p>
            </div>  

            <div className="val-bottum">
            <h1>1000+</h1>
            <h5>families assisted</h5>
            <p>Lorem adipisicing elit. Autem nostrum nihil nulla?</p>
            </div>  

            <div className="val-bottum">
            <h1>50+</h1>
            <h5>volunteers engaged</h5>
            <p>Lorem adipisicing elit. Autem nostrum nihil nulla?</p>
            </div>   
            </div>  

            </div>   
            <div className="buttm-img">
                <img className='btum-images' src={Wave} alt="Goodgive" />
                </div>    

    </div>
  )
}

export default Values