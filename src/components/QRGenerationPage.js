import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QRCodeCanvas } from 'qrcode.react';
import './QRGenerationPage.css';
const QRGenerationPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { tools, businessName } = location.state || {};
    const [websiteLink, setWebsiteLink] = useState('');
    const handleLinkSubmit = () => {
        if (websiteLink.trim()) {
            navigate('/website-link-qr', {
                state: { 
                    tools, 
                    businessName,
                    websiteLink 
                }
            });
        }
    };
    const handleBack = () => {
        navigate('/with-ai');
    };
    return (
        <div className="qr-generation-container">
            <div className="welcome-message">
                <h1>Website Link for QR Code</h1>
                <h2>for {businessName}</h2>
            </div>
            <div className="link-input-section">
                <input 
                    type="text"
                    placeholder="Enter website link"
                    value={websiteLink}
                    onChange={(e) => setWebsiteLink(e.target.value)}
                    className="website-link-input"
                />
                <button 
                    onClick={handleLinkSubmit}
                    disabled={!websiteLink.trim()}
                    className="submit-link-button"
                >
                    Generate QR Code
                </button>
            </div>
            <div className="action-buttons">
                <button onClick={handleBack} className="back-button">
                    Back to Tool Selection
                </button>
            </div>
        </div>
    );
};
export default QRGenerationPage;