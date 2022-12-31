import React from 'react';
import { FaFacebook,FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footerSection">
                    <div className="row justifyConter">
                        <div className="footer-content">
                            <div className="footer-section-logo">
                                <img src="" alt="" />
                            </div>
                            <ul className="footerCircle">
                                <li><FaFacebook className='footerIcon'/></li>
                                <li><FaTwitter className='FooterIcon'/></li>
                                <li><FaInstagram className='FooterIcon'/></li>
                                
                            </ul>

                            <div className="copyRight-content">
                                <p className="copyright">CopyRight {new Date().getFullYear()}| All Right Reserved</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;