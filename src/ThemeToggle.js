import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <div className="ThemeToggle" style={{color: theme.syntax}} onClick={toggleTheme}><FontAwesomeIcon
        icon='adjust'
        size="1x"
    /></div>
     );
}
 
export default ThemeToggle;