import { MdCall } from "react-icons/md"
import "./Contact.css"
import { IoChatboxEllipses } from "react-icons/io5";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdOutlineChatBubble } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper" id="contacts">
        <div className=" paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className="orangeText">Our Contact</span>
                <span className="primaryText">Easy To Contact Us</span>
                <span className="secondaryText">We Storngly beleive in a good blace to live with happy life  <br />
                and also Good Food Good Life</span>


                <div className="div flexColStart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart datail">
                                    <span className="primaryText">Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

<br />
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                <IoChatboxEllipses size={25} />
                                </div>
                                <div className="flexColStart datail">
                                    <span className="primaryText">Chat</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>
                    </div>

                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <IoChatbubblesSharp size={25}/>
                                </div>
                                <div className="flexColStart datail">
                                    <span className="primaryText">Video Call</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Video Call Now</div>
                        </div>

<br />
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdOutlineChatBubble size={25}/>
                                </div>
                                <div className="flexColStart datail">
                                    <span className="primaryText">Message</span>
                                    <span className="secondaryText">021 123 145 14</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Message Now</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="c-right">
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
