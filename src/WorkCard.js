import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from './ThemeContext';
import PopUp from './PopUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function WorkCard({ icon, title, project }) {
    const [isOpen, setIsOpen] = useState(false);
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const togglePopUp = () => {
        setIsOpen(!isOpen)
    }
    const iconSize = window.matchMedia("(max-width: 768px)").matches ? '3x' : '4x'

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
        const els = document.getElementsByClassName('Works-icon');
        Array.from(els).forEach((el) => {
            el.style.pointerEvents = isOpen ? 'none' : '';
        });
    }, [isOpen]);
    return (
        <div style={{ color: theme.syntax }}>
            <div style={{ background: theme.ui, color: theme.syntax }}
                className="Works-icon"
                onClick={togglePopUp}
            >
                <FontAwesomeIcon
                    icon={icon}
                    size={iconSize}
                />
                <div className='Work-icon-title'>
                    <p>{title}</p>
                </div>
            </div>
            {isOpen ? <PopUp project={project} togglePopUp={togglePopUp} title={title} /> : null}
        </div>
    );
}

export default WorkCard;