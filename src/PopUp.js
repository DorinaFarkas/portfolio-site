import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PopUp = (props) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const handleClick = () => {
        props.togglePopUp()
    }
    return (
        <>
            <div onClick={handleClick} style={{ position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', background: theme.bg, opacity: '0.7', backdropFilter: "blur(6px)", zIndex: '1' }}></div>
            <div style={{ position: 'fixed', top: '5%', left: '10%', color: theme.syntax, background: theme.ui, width: '80%', boxShadow: '0 1px 2px rgba(0,0,0,0.15)', height: '90%', overflow: 'auto', zIndex: '2' }}>
                <div>
                    <span style={{ cursor: 'pointer', float: 'right', paddingRight: '1em' }} className="close" onClick={handleClick}>
                        <FontAwesomeIcon
                        icon='times'
                        size="1x"
                    /></span>
                    <p style={{ textAlign: 'center' }}>{props.title}</p>
                    {props.project}
                </div>
            </div>
        </>
    );
}

export default PopUp;