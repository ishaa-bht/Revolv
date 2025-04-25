import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './WithAIPage.css';

const WithAIPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { tool, businessName } = location.state || {};
    const [selectedTools, setSelectedTools] = useState([]);

    // Convert tool to an array if it's a string
    const toolList = typeof tool === 'string' ? tool.split(',').map(t => t.trim()) : [tool];

    // Handle tool selection
    const handleToolSelect = (selectedTool) => {
        setSelectedTools(prev => 
            prev.includes(selectedTool) 
                ? prev.filter(t => t !== selectedTool)
                : [...prev, selectedTool]
        );
    };

    // Handle QR generation for a specific tool
    const handleQRGeneration = (selectedTool) => {
        navigate('/qr-generation', {
            state: { 
                tools: [selectedTool], // Pass the selected tool
                businessName 
            }
        });
    };

    // Handle back navigation
    const handleBack = () => {
        navigate('/results');
    };

    return (
        <div className="ai-implementation-container">
            <div className="welcome-message">
                <h1>AI-Powered Tool Implementation</h1>
                <h2>for {businessName}</h2>
            </div>

            <div className="implementation-options">
                <h3>Select Tools for AI Implementation:</h3>
                <div className="options-grid">
                    {toolList.map((toolItem, index) => (
                        <div 
                            key={index}
                            className={`option-card ${selectedTools.includes(toolItem) ? 'selected' : ''}`}
                            onClick={() => handleToolSelect(toolItem)}
                        >
                            <h4>{toolItem}</h4>
                            <p>Implement {toolItem} using an AI-driven approach</p>
                            <button 
                                className="generate-qr-button"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevents parent div click
                                    handleQRGeneration(toolItem); // Pass individual tool
                                }}
                            >
                                Generate 
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="action-buttons">
                <button onClick={handleBack} className="back-button">
                    Back to Recommendations
                </button>
            </div>
        </div>
    );
};

export default WithAIPage;