import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header_content">
                            <div className="header_section">
                            <h2>Hello , I Am</h2>
                            <h1>Rakib Hasan</h1>
                            <br></br>
                            <p>Im from chattagram. My hometown is noakhali.</p>
                            <div className="header_buttons">
                                <a href='header' className='btn btn-outline'>
                                    Hire Me
                                </a>
                            </div>
                            </div>
                            
                        </div>
                    </div>
                     <div className="col-6">
                        <img src="./images/image 4.png" alt="" className="image" />
                     </div>
                </div>
            </div>
        </header>
    );
};

export default Header;