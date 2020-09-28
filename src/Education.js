import React, { useContext } from 'react';
import './Education.css';
import { ThemeContext } from './ThemeContext';
import photo1 from './images/render.png';

function Education() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="Education" id="Education" style={{ background: theme.ui, color: theme.syntax }}>
            <div className='Education-wrapper'>
                <div className="section-title">
                    <h2>Education</h2>
                </div>
                <div className="Education-content">
                    <div className="Education-content-text">
                        <p>I am a self-taught Front-End Developer</p>
                        <p>I've graduated in Industrial design engineering at Obuda University in 2018</p>
                        <p>The title of my thesis is Smart lamp for the Deaf and Hearing Impaired</p>
                        <h3>Some of the courses I've completed:</h3>
                        <ul>
                            <li>HTML, CSS and JavaScript <br /><span style={{ opacity: '.7' }}>Coursera</span></li>
                            <li>Front-End Web UI Frameworks and Tools <br /><span style={{ opacity: '.7' }}>Coursera</span></li>
                            <li>Front-End JavaScript Frameworks: AngularJS <br /><span style={{ opacity: '.7' }}>Coursera</span></li>
                            <li>The Web Developer Bootcamp <br /> <span style={{ opacity: '.7' }}>Udemy</span></li>
                        </ul>
                    </div>
                    <div className="Education-content-images">
                        <div className="image-stack">
                            <div className="image-stack__item image-stack__item--top">
                                <img src={photo1} alt="3D lamp" />
                            </div>
                            <div className="image-stack__item image-stack__item--bottom">
                                <img src={theme.doc} alt="documentation of a lamp" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;