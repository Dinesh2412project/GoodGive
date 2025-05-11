import './Fotter.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GoodGive from '/images/Good Give Fotter Logo.svg';
import { FaFacebook } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Footer from '/images/Footer.png';

const Fotter = () => {
  return (
    <div className='foote-head'>
        <Container>
      <Row>
        <Col>
        <div className="fotter-img">
        <img src={GoodGive} alt="GoodGive" />
        <h2>goodgive</h2>
        </div>
        <div className="fotter-cont">
            <h1>together,we can end hunger</h1>
            <h4>thank you for visting  good-give.com</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur optio harum reiciendis aspernatur quidem officiis ipsum a dolor accusamus omnis dolores, eligendi voluptatum praesentium qui, sed dignissimos beatae, voluptate doloremque odit explicabo aliquid cupiditate at expedita? Minima aspernatur maiores dolorem.</p>
            <div className="fotter-btn">
            <button>donate now</button>
            <button>singup to volunteer</button>
            </div>
        </div>
        </Col>
        <Col>
        <div className="fotter-right">
            <h2>contact us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus suscipit, deleniti ducimus unde cum quaerat dolore porro, incidunt numquam voluptatum officia nemo quo sit velit?</p>
            <div className="fotter-detail">
                <p>phone :+91-7667991280</p>
                <p>Email :donate@goodgive.com</p>
                <p>address :YMCA,Chennai-600091</p>
                <p>follow us :</p>
                <div className="fotter-link">
                    <span><a href="#"><FaFacebook /></a></span>
                    <span><a href="#"><IoCloseSharp /></a></span>
                    <span><a href="#"><FaSquareInstagram /></a></span>
                    <span><a href="#"><FaLinkedin /></a></span>
                </div>
            </div>
            
            
            
            </div>
            
            
            </Col>
      </Row>
      
    </Container>
    
    <img className='footer-img' src={Footer} alt="img" />
    
    </div>
    
  )
}

export default Fotter