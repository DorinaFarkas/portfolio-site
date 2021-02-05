import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger } from "gsap/all";
import './Job.css';

gsap.registerPlugin(ScrollTrigger);

function Job({ jobs }) {
    const jobRefs = useRef([]);
    const addToJobRefs = (el) => {
        if (el && !jobRefs.current.includes(el)) {
            jobRefs.current.push(el)
        }
    }
    useEffect(() => {
        jobRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                {
                    autoAlpha: 0,
                    y: -20
                },
                {
                    duration: .7,
                    autoAlpha: 1,
                    y: 0,
                    ease: 'none',
                    delay: .3,
                    scrollTrigger: {
                        id: `section-${index}`,
                        trigger: el,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none reverse'
                    }

                }
            )
        })

    }, [])
    return (
        <div className="Experience-jobs">
            {jobs.map(job => (
                <div key={job.id} className="Experience-job" ref={addToJobRefs}>
                    <div className="Experience-job-details">
                        <h5>{job.company}</h5>
                        <h5>{job.role}</h5>
                        <p>{job.date}</p>
                        <p>{job.city}</p>
                    </div>
                    <div className="Experience-job-descreprion">
                        <p key={job.description[1]}>{job.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Job;