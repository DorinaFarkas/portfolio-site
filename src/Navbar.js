import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav className="Home-navigation" style={{ color: theme.syntax }}>
            <div style={{ color: theme.syntax }}><Link activeClass="active" to="Works" spy={true} smooth={true} duration={500} >Projects</Link></div>
            <div style={{ color: theme.syntax }}><Link activeClass="active" to="Education" spy={true} smooth={true} duration={500} >Education</Link></div>
            <div style={{ color: theme.syntax }}><Link activeClass="active" to="Experience" spy={true} smooth={true} duration={500} >Experience</Link></div>
            <a style={{ color: theme.syntax, opacity: '.7' }} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/dorina-farkas-b5097b97/">
                <FontAwesomeIcon
                icon={['fab', 'linkedin-in']}
                size='1x'
            /></a>
        </nav>);
}

export default Navbar;
