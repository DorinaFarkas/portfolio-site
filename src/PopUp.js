import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./PopUp.css";

const PopUp = (props) => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const handleClick = () => {
        props.togglePopUp()
    }
    return (
        <>
            <div className='PopUp-bg' onClick={handleClick} style={{ background: theme.bg }}></div>
            <div className='PopUp' style={{ color: theme.syntax, background: theme.ui }}>
                <div>
                    <div style={{background: theme.gray3, padding: '.2em 1em 1em 1em'}}>
                    <span className='PopUp-close' onClick={handleClick}>
                        <FontAwesomeIcon
                            icon='times'
                            size="1x"
                        /></span>
                        <p style={{ textAlign: 'center', paddingTop: '1em' }}>{props.title}</p>
                        <p style={{ textAlign: 'center' }}>{props.description}</p>
                    </div>
                    {props.project}
                </div>
            </div>
        </>
    );
}

export default PopUp;