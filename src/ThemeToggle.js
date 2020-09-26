import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div style={{color: theme.syntax, cursor: "pointer", position: 'absolute', top: '2rem', right: '2rem'}} onClick={toggleTheme}><FontAwesomeIcon
        icon='adjust'
        size="1x"
    /></div>
     );
}
 
export default ThemeToggle;