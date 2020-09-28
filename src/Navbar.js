import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav className="Home-navigation" style={{ color: theme.syntax }}>
            <a style={{ color: theme.syntax }} href="#Experience">Experience</a>
            <a style={{ color: theme.syntax }} href="#Works">Projects</a>
            <a style={{ color: theme.syntax }} href="#Education">Education</a>
        </nav>);
}

export default Navbar;
