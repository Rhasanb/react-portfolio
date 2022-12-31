import React from 'react';

const About = () => {
    return (
    

        <div className="about">
            <div className="container">
                <div className="common">
                    <h1 className="about-title">About Me</h1>
                 </div>
                    <div className="underline-border"></div>
                    <div className="row h-650 alignCenter">
                        <div className="col-6">
                            <div className="about_img">
                                <img src="./images/image1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="about_info">
                                <h1>Creative Ui & Web Designer <br></br> based in chittagong , Bd</h1>
                                <div className="about_info">
                                    <p>
                                        I'am Creative and very passionate and dedicated to <br></br>
                                         my work.I have acquired the skills and knowledge<br></br> 
                                         necessary to make your project a successful.
                                    </p>
                                    <div className="about_buttons">
                                        <a href="#about" className="btn about-btn-outline">
                                            Download Cv
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>

        
    )
};

export default About;