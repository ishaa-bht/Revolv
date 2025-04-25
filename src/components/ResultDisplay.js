import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ResultDisplay.css';

const ResultDisplay = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { prediction = [], businessName = '' } = location.state || {}; // Default values for prediction and businessName

    const handleBack = () => {
        navigate('/queries'); // Navigate back to the questionnaire page
    };

    const handleSelection = (tool, method) => {
        const route = method === 'AI' ? '/with-ai' : '/job-proposal';
        navigate(route, { 
            state: { 
                tool: tool, 
                businessName: businessName 
            } 
        });
    };

    return (
        <div className="result-container">
            <div className="result-content">
                <h1>Recommended Tools</h1>
                <div className="business-info">
                    <h2>for {businessName}</h2>
                </div>

                <div className="recommendations-section">
                    {prediction && prediction.length > 0 ? (
                        <>
                            <div className="recommendation-header">
                                <h3>Based on your business profile, we recommend:</h3>
                            </div>
                            <div className="recommendations-grid">
                                {prediction.map((tool, index) => (
                                    <div key={index} className="recommendation-card">
                                        <div className="tool-name">{tool}</div>
                                        <div className="implementation-options">
                                            <div className="option-box ai">
                                                <h4>With AI</h4>
                                                <button 
                                                    className="select-button"
                                                    onClick={() => handleSelection(tool, 'AI')}
                                                >
                                                    Select AI
                                                </button>
                                            </div>
                                            <div className="option-box human">
                                                <h4>With Human Help</h4>
                                                <button 
                                                    className="select-button" 
                                                    onClick={() => handleSelection(tool, 'Human')}
                                                >
                                                    Select
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="no-recommendations">
                            <p>No recommendations available. Please try again.</p>
                        </div>
                    )}
                </div>

                <button onClick={handleBack} className="back-button">
                    Back to Questionnaire
                </button>
            </div>
        </div>
    );
};

export default ResultDisplay;