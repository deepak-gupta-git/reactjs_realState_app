import Header from "./Components/Header/Header"
import Hero from "./Components/Hero/Hero"
import "./App.css"
import Residencies from "./Components/Residencies/Residencies"
import Companies from "./Components/Companies/companies"
import Value from "./Components/Value/Value"
import Contact from "./Components/Contact/Contact"
import GetStarted from "./Components/GetStarted/GetStarted"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div className="App">
      <div>
      <div className="white-gradient"/>
      <Header/>
       <Hero/> 
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/> 
     <Footer/>
    </div>
  );
}

export default App

