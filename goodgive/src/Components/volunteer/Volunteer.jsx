import './Volunteer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Story from '/images/Story.png';
import Anand from '/images/Anand.png';
import Asha from '/images/Asha.png';
import People from '/images/People.png';


const Volunteer = () => {
  return (
    <div className='volunteer'>
        <Container className='top'>
      <Row>
        <Col sm={6}>
        <div className="volunter-imge">
            <img src={Story} alt="img" />
            <img src={Anand} alt="img" />
            <img src={Asha} alt="img" />
            <button>100+</button>
        </div>
        <div className="volunteer-head">
            <h1>becoming a volunteer of goodgive</h1>
            <button>register now</button>
        </div>
        
        </Col>
        <Col sm={6}>
        <div className="people-img">
        <img src={People} alt="img" />
        </div>
        </Col>
      </Row>
    </Container>
    
    </div>
  )
}

export default Volunteer