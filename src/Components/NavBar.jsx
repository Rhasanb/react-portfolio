import React from 'react';
import { FaAlignJustify } from 'react-icons/fa';

const NavBar = () => {
    const [state, setState] = React.useState(true);
    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar_container">
                        <ul className="navbar_left">
                            <div className="navbar_left-logo">
                                

                            </div>
                        </ul>
                        {
                            state ? (<ul className="navbar_right">
                                <li><a href='home'>Home</a></li>
                                <li><a href='about'>About</a></li>
                                <li><a href='blog'>Blog</a></li>
                                <li><a href='service'>Services</a></li>
                                <li><a href='skill'>Skill</a></li>
                                <li><a href='contact'>Contact</a></li>
                            </ul>)
                             :("")
                        }
                    </div>
                </div>
                     <div className="toggle" onClick={()=> setState(!state)}>
                        <FaAlignJustify/>
                    </div>   
            </nav>
            
        </div>
    );
};

export default NavBar;