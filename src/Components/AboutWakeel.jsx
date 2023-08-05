import React from "react";
import "./About.css";
import { WakeelMainPage } from "../Images";


const AboutWakeel = () => {

    const Responsive = () => (
        <>
            <div className="row">
                <h3 className="heading">Our Mission</h3>
                <p className="para">
                    WhatsApp started as an alternative to SMS. Our product now
                    supports sending and receiving a variety of media: text, photos,
                    videos, documents, and location, as well as voice calls. Some of
                    your most personal moments are shared with WhatsApp, which is
                    why we built end-to-end encryption into our app. Behind every
                    product decision is our desire to let people communicate
                    anywhere in the world without barriers.
                </p>
            </div>

            <div className="row">
                <h3 className="heading">Our Team</h3>
                <p className="para">
                    WhatsApp was founded by Jan Koum and Brian Acton who had
                    previously spent 20 years combined at Yahoo. WhatsApp joined
                    Facebook in 2014, but continues to operate as a separate app
                    with a laser focus on building a messaging service that works
                    fast and reliably anywhere in the world.
                </p>
            </div>
        </>
    )

    return (
        <>
            {/* About sSection */}
            <section id='about' className="global-container">

                {/* Spacer */}
                <div className="global-spacer-mini"></div>

                {/* Top Box */}
                <div className=" WaAboutWakeel">
                    {/* Left Side */}
                    <div className="About-col About-tablet-col">
                        <div className="row">
                            <h1 className="global-heading">About Wakeel App</h1>
                            <h3 className="heading">Our App</h3>
                            <div className="para">
                                More than 2 billion people in over 180 countries use WhatsApp1
                                to stay in touch with friends and family, anytime and anywhere.
                                WhatsApp is free2 and offers simple, secure, reliable messaging
                                and calling, available on phones all over the world.

                                <ul className="bullets">
                                    <li>
                                        And yes, the name WhatsApp is a pun on the phrase What's Up.
                                    </li>
                                    <li> Data charges may apply.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="desktop">
                            <Responsive />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="About-col">
                        <div className="image-box">
                            <img src={WakeelMainPage} alt="about" />
                        </div>
                    </div>
                </div>

                {/* Tablet + Mobile Mode */}
                <div className=" WaAboutWakeel tablet">
                    <Responsive />
                </div>

                {/* Spacer */}

                <div className="global-spacer-mini"></div>

            </section>



        </>
    );
};

export default AboutWakeel;
