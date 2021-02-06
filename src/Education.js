import React, { useContext, useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
import './Education.css';
import { ThemeContext } from './ThemeContext';
import photo1 from './images/render.png';
import { Element } from 'react-scroll';

gsap.registerPlugin(ScrollTrigger);

function Education() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const educationTextRef = useRef(null);
    const educationImageFirstRef = useRef(null);
    const educationImageSecondRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            educationTextRef.current,
            {
                autoAlpha: 0,
                y: -20
            },
            {
                duration: .7,
                autoAlpha: 1,
                y: 0,
                ease: 'none',
                scrollTrigger: {
                    id: 'educationText',
                    trigger: educationTextRef.current,
                    start: 'top center+=300',
                    toggleActions: 'play none none reverse',
                }

            }
        )

        gsap.fromTo(
            educationImageFirstRef.current,
            {
                opacity: 0,
                x: 20
            },
            {
                opacity: 1,
                x: 0,
                delay: .5,
                duration: 1,
                scrollTrigger: {
                    id: 'educationImages',
                    trigger: educationImageFirstRef.current,
                    start: 'top center+=300',
                    toggleActions: 'play none none reverse',
                }

            }
        )
        gsap.fromTo(
            educationImageSecondRef.current,
            {
                opacity: 0,
                x: 20
            },
            {
                opacity: 1,
                x: 0,
                delay: 1.2,
                duration: 1,
                scrollTrigger: {
                    id: 'educationImages',
                    trigger: educationImageSecondRef.current,
                    start: 'top center+=300',
                    toggleActions: 'play none none reverse',
                }

            })

    }, [])
    return (
        <Element name="Education" >
            <div className="Education" id="Education" style={{ background: theme.ui, color: theme.syntax }}>
                <div className='Education-wrapper'>
                    <div className="section-title">
                        <h2>Education</h2>
                    </div>
                    <div className="Education-content">
                        <div ref={educationTextRef} className="Education-content-text" id="educationText">
                            <p>I am a self-taught Front-End Developer</p>
                            <p>I've graduated in Industrial design engineering at Obuda University in 2018</p>
                            <p>The title of my thesis is Smart lamp for the Deaf and Hearing Impaired</p>
                            <h5>Some of the courses I've completed:</h5>
                            <ul>
                                <li>HTML, CSS and JavaScript <br /><span style={{ opacity: '.7' }}>Coursera</span></li>
                                <li>Front-End Web UI Frameworks and Tools <br /><span style={{ opacity: '.7' }}>Coursera</span></li>
                                <li>Front-End JavaScript Frameworks: AngularJS <br /><span style={{ opacity: '.7' }}>Coursera</span></li>
                                <li>The Web Developer Bootcamp <br /> <span style={{ opacity: '.7' }}>Udemy</span></li>
                            </ul>
                        </div>
                        <div className="Education-content-images">
                            <div className="image-stack">
                                <div ref={educationImageFirstRef} className="image-stack__item image-stack__item--top">
                                    <img src={photo1} alt="3D lamp" />
                                </div>
                                <div ref={educationImageSecondRef} className="image-stack__item image-stack__item--bottom">
                                    <img src={theme.doc} alt="documentation of a lamp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
}

export default Education;