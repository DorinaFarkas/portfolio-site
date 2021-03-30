import React, { useContext } from 'react';
import { ThemeContext } from '../../_components/ThemeContext';

const Square = ({ value, onClick }) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const style = value ? `squares ${value}` : `squares`
    return (
        <button className={style} onClick={onClick} style={{background: theme.ui}}>
            {value}
        </button>
    );
}

export default Square;