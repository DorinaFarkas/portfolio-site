import React, { useContext } from 'react';
import './Home.css';
import Navbar from './Navbar';
import { ThemeContext } from './ThemeContext';
import ThemeToggle from './ThemeToggle';

const Home = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="Home" style={{ background: theme.ui, color: theme.syntax }}>
            <div className='Home-wrapper'>
                <Navbar />
                <ThemeToggle />
                <div className="Home-content">
                    <div className="Home-text">
                        <h1>Hi, <br />I am Dorina</h1>
                        <h2>Front-End Developer</h2>
                    </div>
                    <div className="Home-image"><img src={theme.pic} alt="portrait" /></div>
                </div>
            </div>
        </div>);
}

export default Home;