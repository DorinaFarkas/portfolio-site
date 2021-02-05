import React, { useContext, useRef, useEffect } from 'react';
import { gsap } from "gsap/all";
import './Home.css';
import NavBar from './Navbar';
import { ThemeContext } from './ThemeContext';
import { Element } from 'react-scroll';

const Home = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const headerRef = useRef(null);

    useEffect(() => {
        gsap.from(headerRef.current, {
            duration: .5,
            autoAlpha: 0,
            ease: 'none',
            delay: 1
        })
    }, [])
    return (
        <Element name="Home" >
            <div className="Home" id="Home" style={{ background: theme.ui, color: theme.syntax }}>
                <div className='Home-wrapper'>
                    <NavBar />
                    <div className="Home-content">
                        <div ref={headerRef} className="Home-text">
                            <h1>Hi, <br />I am Dorina</h1>
                            <h2>Front-End Developer</h2>
                        </div>
                        <div className="Home-image"><img src={theme.pic} alt="portrait" /></div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Home;