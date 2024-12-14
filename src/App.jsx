import AboutMe from "./components/AboutMe"
import Banner from "./components/Banner"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skill from "./components/Skill"



function App() {


  return (
    <div className="nunito-font overflow-x-hidden">
   
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
     
     
    </div>
  )
}

export default App
