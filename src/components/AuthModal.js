import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthModal.css';

const AuthModal = ({ closeModal, setIsSignedUp, setUserType }) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedType, setSelectedType] = useState('business'); // Track user selection
  const [phone, setPhone] = useState('');
  const [pan, setPan] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSignedUp(true);
    setUserType(selectedType); // Set user type in App.js
    closeModal();
    
    if (selectedType === 'business') {
      navigate("/queries");
    } else {
      navigate("/seeker");
    }
  };

  return (
    <div className="auth-modal">
      <div className="auth-box">
        <button className="close-btn" onClick={closeModal}>×</button>
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>

        {/* User Type Selection */}
        <div className="user-type-selection">
          <button 
            className={selectedType === 'business' ? 'active' : ''} 
            onClick={() => setSelectedType('business')}
          >
            Business Owner
          </button>
          <button 
            className={selectedType === 'seeker' ? 'active' : ''} 
            onClick={() => setSelectedType('seeker')}
          >
            Job Seeker
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required 
              />
              {selectedType === 'business' && (
                <input 
                  type="text" 
                  placeholder="PAN Number" 
                  value={pan} 
                  onChange={(e) => setPan(e.target.value)} 
                  required 
                />
              )}
            </>
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignUp && <input type="password" placeholder="Confirm Password" required />}

          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>

        <p onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
