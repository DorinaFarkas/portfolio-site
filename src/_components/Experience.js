import React, { useContext } from 'react';
import '../_styleSheets/Experience.css';
import Job from './Job';
import { ThemeContext } from './ThemeContext';
import { Element } from 'react-scroll';

const jobs = [
    { id: 1, company: 'Robert Half', role: 'Front-End Developer', date: 'Feb 2020 - Sep 2020', city: 'London', description: ['At Robert Half, I was part of an international developer team. We worked together on 16 different websites for 16 countries. Their websites were built in ', <b key="0">Drupal</b>, '. To maintain and enhance them we used ', <b key="1">HTML, CSS, JavaScript, jQuery</b>, ', and ', <b key="2">Bootstrap</b>, '. A major part of my role was also to work in ', <b key="3">SalesForce Marketing Cloud</b>, ' with languages like ', <b key="4">Ampscipt</b>, ' and ', <b key="5">server-side JavaScript</b>, '.'] },
    { id: 2, company: 'ingatlan.com Zrt', role: 'Front-End Developer', date: 'Jan 2018 - Nov 2018', city: 'Budapest', description: ['As a Junior Front-End developer at ingatlan.com I was able to try out myself as a part of a team. I worked on the main product of the company which is the largest property advertisement website in Hungary. Among other tasks, I participated in the GDPR project where I designed and developed a new surface for users. On these projects, I worked mainly in ', <b key="6">HTML</b>, ', ', <b key="7">SCSS</b>, ', ', <b key="8">JavaScript</b>, ', ', <b key="9">Vue.js</b>, ', and ', <b key="10">jQuery</b>, '.'] },
    { id: 3, company: 'ingatlan.com Zrt', role: 'Web designer', date: 'Aug 2016 - Jan 2018', city: 'Budapest', description: ['At ingatlan.com first I started as a Junior Web Designer, my role was to design UI element for all the websites of the company and advertisement with the following tools: ', <b>Adobe Photoshop</b>, ', ', <b>Adobe Illustrator</b>, ', ', <b>Adobe Animate</b>, ', ', <b>Adobe Xd</b>, ', ', <b>Google Web designer</b>, '.'] },
    { id: 4, company: 'Systemax', role: 'Graphic designer', date: 'Jan 2015 - Dec 2016', city: 'Budapest', description: ['During the two years, I spent at Systemax as a Graphic designer Intern I designed hundreds of office product promotion items like banners, catalogs, and landing pages using ', <b key="11">Adobe Photoshop</b>, ', ', <b key="12">Adobe Illustrator</b>, ', and ', <b key="13">Adobe Indesign</b>, '.'] }
]

function Experience() {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <Element name="Experience" >
            <div className="Experience" id="Experience" style={{ background: theme.bg, color: theme.syntax }}>
                <div className='Experience-wrapper'>
                    <div className="section-title">
                        <h2>Experience</h2>
                    </div>
                    <Job jobs={jobs} key={jobs.id} />
                </div>
            </div>
        </Element>
    );
}

export default Experience;