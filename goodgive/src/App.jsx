
import './App.css'
import Donated from './Components/Donated/Donated'
import Fotter from './Components/fotter/Fotter'
import Hero from './Components/hero/Hero'
import Navbar from './Components/navbar/Navbar'
import Question from './Components/questions/Question'
import Stories from './Components/stories/Stories'
import Values from './Components/Values/Values'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Volunteer from './Components/volunteer/Volunteer'


function App() {
 

  return (
    <>
    <Navbar/>
    <Hero/>
    <Values/>
    <Donated/>
    <Stories/>
    <Volunteer/>
    <Question/>
    <Fotter/>
    </>
  )
}

export default App
