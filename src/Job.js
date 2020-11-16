import React from 'react';
import './Job.css';

function Job({ jobs }) {
    return (
            <div className="Experience-jobs">
                {jobs.map(job => (
                <div key={job.id} className="Experience-job">
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