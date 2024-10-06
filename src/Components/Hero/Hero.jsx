import "./Hero.css"
import { IoLocationSharp } from "react-icons/io5";
import CountUp from "react-countup";
import {motion} from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">


            <div className="flexColStart hero-left">
                  <div className="hero-title">
                    <div className="orange-circle"/>
                    <motion.h1
                    initial = {{y:"2rem", opacity:0}}
                    animate = {{y:0, opacity:1}}
                    transition = {{
                      duration : 2,
                      type:"spring",
                    }}
                    >Discover <br />
                    Most Suitable <br />
                    Property
                    </motion.h1>
                  </div>

                  <div className="flexColStart secondaryText hero-des">
                    <span>Find a variety of properties that stuff very actually</span>
                    <span>Forget all difficulties in finding resistance for you</span>
                  </div>

                  <div className="flexCenter searchbar">
                  <IoLocationSharp color="var(--blue)" size={25}/>
                  <input type="text" />
                  <div className="button">Search</div>
                  </div>

                  <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                      <span>
                        <CountUp start={8000} end={9000} duration={4}/>
                      <span>+</span>
                      </span>
                      <span className="secondaryText">Premium Product</span>   
                    </div>

                    <div className="flexColCenter stat">
                      <span>
                        <CountUp start={1950} end={2000} duration={4}/>
                      <span>+</span>
                      </span>
                      <span className="secondaryText">Happy Customers</span>   
                    </div>

                    <div className="flexColCenter stat">
                      <span>
                        <CountUp end={28} duration={4}/>
                      <span>+</span>
                      </span>
                      <span className="secondaryText">Award Winning</span>   
                    </div>
                  </div>
            </div>

         

            <div className="flexCenter hero-right">

                <motion.div 
                  initial = {{x:"2rem", opacity:0}}
                  animate = {{x:0, opacity:1}}
                  transition = {{
                    duration : 2,
                    type:"spring",
                  }}
                className="image-container">
                    <img src="./hero-image.png" alt="hero-image" />
                </motion.div>
            </div>
        </div>

    </section>
  )
}

export default Hero
