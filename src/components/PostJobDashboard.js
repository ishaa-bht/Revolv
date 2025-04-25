import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostJobDashboard.css';

const PostJobDashboard = () => {
    const navigate = useNavigate();

    // Example data for posted requests
    const [postedRequests, setPostedRequests] = useState([
        { id: 1, tool: 'Salesforce CRM', status: 'Pending', details: 'Looking for a Salesforce expert to integrate CRM with our existing systems.' },
        { id: 2, tool: 'Tableau', status: 'Matched', details: 'Need a Tableau specialist to create interactive dashboards for sales data.' },
        { id: 3, tool: 'HubSpot', status: 'Completed', details: 'HubSpot specialist helped us set up email marketing automation.' },
    ]);

    const [expandedId, setExpandedId] = useState(null); // Track which request is expanded
    const [searchQuery, setSearchQuery] = useState(''); // Search query state
    const [filterStatus, setFilterStatus] = useState('all'); // Filter by status

    const handleBack = () => {
        navigate('/queries');
    };

    const toggleDetails = (id) => {
        setExpandedId(expandedId === id ? null : id); // Toggle details section
    };

    const filteredRequests = postedRequests.filter((request) => {
        const matchesSearch = request.tool.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesStatus = filterStatus === 'all' || request.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="dashboard-container">
            <h1>Your Posted Requests</h1>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by tool name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {/* Filter Buttons */}
            <div className="filter-buttons">
                <button onClick={() => setFilterStatus('all')} className={filterStatus === 'all' ? 'active' : ''}>
                    All
                </button>
                <button onClick={() => setFilterStatus('Pending')} className={filterStatus === 'Pending' ? 'active' : ''}>
                    Pending
                </button>
                <button onClick={() => setFilterStatus('Matched')} className={filterStatus === 'Matched' ? 'active' : ''}>
                    Matched
                </button>
                <button onClick={() => setFilterStatus('Completed')} className={filterStatus === 'Completed' ? 'active' : ''}>
                    Completed
                </button>
            </div>

            {/* Requests List */}
            <div className="requests-list">
                {filteredRequests.map((request) => (
                    <div key={request.id} className="request-card">
                        <h3>{request.tool}</h3>
                        <p>Status: <span className={`status ${request.status.toLowerCase()}`}>{request.status}</span></p>
                        <button onClick={() => toggleDetails(request.id)} className="view-details-button">
                            {expandedId === request.id ? 'Hide Details' : 'View Details'}
                        </button>
                        {expandedId === request.id && (
                            <div className="details-section">
                                <p>{request.details}</p>
                                <button className="contact-specialist-button">Contact Specialist</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Statistics Section */}
            <div className="statistics-section">
                <h2>Statistics</h2>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Total Requests</h3>
                        <p>{postedRequests.length}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Matched Requests</h3>
                        <p>{postedRequests.filter((req) => req.status === 'Matched').length}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Completed Requests</h3>
                        <p>{postedRequests.filter((req) => req.status === 'Completed').length}</p>
                    </div>
                </div>
            </div>

            {/* Activity Feed */}
            <div className="activity-feed">
                <h2>Recent Activity</h2>
                <ul>
                    <li>Request for <strong>Salesforce CRM</strong> posted.</li>
                    <li>Specialist matched for <strong>Tableau</strong>.</li>
                    <li>Request for <strong>HubSpot</strong> completed.</li>
                </ul>
            </div>

            {/* Back Button */}
            <button onClick={handleBack} className="back-button">
                Back to Recommendations
            </button>
        </div>
    );
};

export default PostJobDashboard;