import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './JobProposal.css';

const JobProposal = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { tool } = location.state || { tool: '' };
    const [isPosted, setIsPosted] = useState(false);

    const handleBack = () => {
        navigate('/queries');
    };

    const handlePost = () => {
        console.log(`Request for a ${tool} specialist posted successfully!`);
        setIsPosted(true);
        setTimeout(() => {
            navigate('/post-job-dashboard'); // Redirect to dashboard after posting
        }, 1500); // Delay for 1.5 seconds to show success message
    };

    return (
        <div className="job-proposal-container">
            <h1>Hire a Specialist for {tool}</h1>
            <div className="proposal-content">
                <p>We’ll help you find the perfect specialist to implement <strong>{tool}</strong> for your business.</p>
                <div className="proposal-text">
                    <p>
                        Our platform connects you with vetted professionals who specialize in <strong>{tool}</strong>. 
                        Simply post your request, and we’ll match you with the right expert.
                    </p>
                </div>

                {/* Post Button Inside Proposal Box */}
                {!isPosted ? (
                    <button onClick={handlePost} className="post-button">
                        Post Request for a Specialist
                    </button>
                ) : (
                    <p className="success-message">Your request has been posted successfully!</p>
                )}
            </div>

            {/* Back Button */}
            <button onClick={handleBack} className="back-button">
                Back to Recommendations
            </button>
        </div>
    );
};

export default JobProposal;