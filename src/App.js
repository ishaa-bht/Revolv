// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import QueryPage from "./pages/QueryPage";

// function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/query" element={<QueryPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     window.history.back(); // Go back to the previous page when modal is closed
//   };

//   return (
//     <div className="App">
//       <Header onGetStarted={handleGetStarted} />
//       <Features />
//       <Testimonials />
//       <Footer />
      
//       {isModalOpen && !isSignedUp && <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />}
//       {isSignedUp && <UserInfoForm />}
//       {isSignedUp && <QueriesPage />}
//     </div>
//   );
// };

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleSignupSuccess = () => {
//     setIsModalOpen(false);
//     navigate('/user-info'); // Redirect to the user info form
//   };

//   return (
//     <div className="App">
//       <Header onGetStarted={handleGetStarted} />
//       <Routes>
//         <Route path="/" element={<><Features /><Testimonials /><Footer /></>} />
//         <Route path="/user-info" element={<UserInfoForm />} />
//         <Route path="/queries" element={<QueriesPage />} />
//       </Routes>
//       {isModalOpen && <AuthModal closeModal={closeModal} onSignupSuccess={handleSignupSuccess} />}
//     </div>
//   );
// };

// const MainApp = () => (
//   <Router>
//     <App />
//   </Router>
// );

// export default MainApp;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// // export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// // export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [bgColor, setBgColor] = useState("#23446e"); // Initial color

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const scrollRatio = Math.min(scrollTop / scrollHeight, 1); // Ensure between 0 and 1

//       // Define start and end colors in RGB
//       const startColor = [35, 68, 110]; // #23446e (dark blue)
//       const endColor = [207, 227, 249]; // #cfe3f9 (light blue)

//       // Calculate interpolated color
//       const newColor = startColor.map((start, i) =>
//         Math.round(start + (endColor[i] - start) * scrollRatio)
//       );

//       setBgColor(`rgb(${newColor[0]}, ${newColor[1]}, ${newColor[2]})`);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Router>
//       <div
//         className="App"
//         style={{
//           backgroundColor: bgColor,
//           transition: "background 0.3s ease-in-out",
//           minHeight: "100vh",
//         }}
//       >
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal closeModal={closeModal} setIsSignedUp={setIsSignedUp} />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp ? <QueriesPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';
// import SeekerPage from './components/SeekerPage'; // Import the new SeekerPage
// import ResultDisplay from './components/ResultDisplay';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [userType, setUserType] = useState('business'); // Track selected user type

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal
//                     closeModal={closeModal}
//                     setIsSignedUp={setIsSignedUp}
//                     setUserType={setUserType} // Pass user type setter
//                   />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp && userType === 'business' ? <QueriesPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/seeker"
//             element={isSignedUp && userType === 'seeker' ? <SeekerPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';
// import SeekerPage from './components/SeekerPage';
// import ResultDisplay from './components/ResultDisplay';
// import JobProposal from './components/JobProposal';
// import PostJobDashboard from './components/PostJobDashboard';
// import QRGenerationPage from './components/QRGenerationPage';
// import WebsiteLinkQRPage from './components/WebsiteLinkQRPage';
// import WithAIPage from './components/WithAIPage';
// import JobListingPage from './components/JobListingPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [userType, setUserType] = useState('business');

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal
//                     closeModal={closeModal}
//                     setIsSignedUp={setIsSignedUp}
//                     setUserType={setUserType}
//                   />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp && userType === 'business' ? <QueriesPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/seeker"
//             element={isSignedUp && userType === 'seeker' ? <SeekerPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/results"
//             element={isSignedUp && userType === 'business' ? <ResultDisplay /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/job-listings"
//             element={isSignedUp && userType === 'seeker' ? <JobListingPage /> : <Navigate to="/" />}
//           />
//            <Route path="/job-proposal" element={<JobProposal />} />
//            <Route path="/post-job-dashboard" element={<PostJobDashboard />} />
//            <Route
//             path="/qr-generation"
//             element={isSignedUp && userType === 'business' ? <QRGenerationPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/website-link-qr"
//             element={isSignedUp && userType === 'business' ? <WebsiteLinkQRPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/with-ai"
//             element={isSignedUp && userType === 'business' ? <WithAIPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react'; // <-- add useEffect here
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Features from './components/Features';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer';
// import AuthModal from './components/AuthModal';
// import UserInfoForm from './components/UserInfoForm';
// import QueriesPage from './components/QueriesPage';
// import SeekerPage from './components/SeekerPage';
// import ResultDisplay from './components/ResultDisplay';
// import JobProposal from './components/JobProposal';
// import PostJobDashboard from './components/PostJobDashboard';
// import QRGenerationPage from './components/QRGenerationPage';
// import WebsiteLinkQRPage from './components/WebsiteLinkQRPage';
// import WithAIPage from './components/WithAIPage';
// import JobListingPage from './components/JobListingPage';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [userType, setUserType] = useState('business');
//   const [apiData, setApiData] = useState(null); // <-- to store API response

//   const handleGetStarted = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // 🔥 Fetch data from Flask backend when app loads
//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}/predict`) // <-- example endpoint
//       .then(response => response.json())
//       .then(data => {
//         console.log('API Data:', data);
//         setApiData(data); // Save response to state if needed
//       })
//       .catch(error => {
//         console.error('Error fetching API:', error);
//       });
//   }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <Header onGetStarted={handleGetStarted} />
//                 <Features />
//                 <Testimonials />
//                 <Footer />
//                 {isModalOpen && (
//                   <AuthModal
//                     closeModal={closeModal}
//                     setIsSignedUp={setIsSignedUp}
//                     setUserType={setUserType}
//                   />
//                 )}
//               </>
//             }
//           />
//           <Route
//             path="/userinfo"
//             element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/queries"
//             element={isSignedUp && userType === 'business' ? <QueriesPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/seeker"
//             element={isSignedUp && userType === 'seeker' ? <SeekerPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/results"
//             element={isSignedUp && userType === 'business' ? <ResultDisplay /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/job-listings"
//             element={isSignedUp && userType === 'seeker' ? <JobListingPage /> : <Navigate to="/" />}
//           />
//           <Route path="/job-proposal" element={<JobProposal />} />
//           <Route path="/post-job-dashboard" element={<PostJobDashboard />} />
//           <Route
//             path="/qr-generation"
//             element={isSignedUp && userType === 'business' ? <QRGenerationPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/website-link-qr"
//             element={isSignedUp && userType === 'business' ? <WebsiteLinkQRPage /> : <Navigate to="/" />}
//           />
//           <Route
//             path="/with-ai"
//             element={isSignedUp && userType === 'business' ? <WithAIPage /> : <Navigate to="/" />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react'; // <-- add useEffect here
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import UserInfoForm from './components/UserInfoForm';
import QueriesPage from './components/QueriesPage';
import SeekerPage from './components/SeekerPage';
import ResultDisplay from './components/ResultDisplay';
import JobProposal from './components/JobProposal';
import PostJobDashboard from './components/PostJobDashboard';
import QRGenerationPage from './components/QRGenerationPage';
import WebsiteLinkQRPage from './components/WebsiteLinkQRPage';
import WithAIPage from './components/WithAIPage';
import JobListingPage from './components/JobListingPage';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [userType, setUserType] = useState('business');
  const [apiData, setApiData] = useState(null); // <-- to store API response
  const [error, setError] = useState(null); // <-- to store any error

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Fetch data from Flask backend when form is submitted (on demand, not on page load)
  const fetchPrediction = async (inputData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/predict`, {
        method: 'POST', // Make sure to use POST method
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData), // send input data to backend
      });

      if (!response.ok) {
        throw new Error(`API returned status: ${response.status}`);
      }

      const data = await response.json();
      console.log('API Data:', data);
      setApiData(data); // Save response to state if needed
    } catch (error) {
      console.error('Error fetching API:', error);
      setError(error.message); // Save error if any
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header onGetStarted={handleGetStarted} />
                <Features />
                <Testimonials />
                <Footer />
                {isModalOpen && (
                  <AuthModal
                    closeModal={closeModal}
                    setIsSignedUp={setIsSignedUp}
                    setUserType={setUserType}
                  />
                )}
              </>
            }
          />
          <Route
            path="/userinfo"
            element={isSignedUp ? <UserInfoForm /> : <Navigate to="/" />}
          />
          <Route
            path="/queries"
            element={isSignedUp && userType === 'business' ? <QueriesPage /> : <Navigate to="/" />}
          />
          <Route
            path="/seeker"
            element={isSignedUp && userType === 'seeker' ? <SeekerPage /> : <Navigate to="/" />}
          />
          <Route
            path="/results"
            element={isSignedUp && userType === 'business' ? <ResultDisplay /> : <Navigate to="/" />}
          />
          <Route
            path="/job-listings"
            element={isSignedUp && userType === 'seeker' ? <JobListingPage /> : <Navigate to="/" />}
          />
          <Route path="/job-proposal" element={<JobProposal />} />
          <Route path="/post-job-dashboard" element={<PostJobDashboard />} />
          <Route
            path="/qr-generation"
            element={isSignedUp && userType === 'business' ? <QRGenerationPage /> : <Navigate to="/" />}
          />
          <Route
            path="/website-link-qr"
            element={isSignedUp && userType === 'business' ? <WebsiteLinkQRPage /> : <Navigate to="/" />}
          />
          <Route
            path="/with-ai"
            element={isSignedUp && userType === 'business' ? <WithAIPage /> : <Navigate to="/" />}
          />
        </Routes>

        {/* Example form for testing prediction */}
        {isSignedUp && userType === 'business' && (
          <div>
            <h3>Get Prediction</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const inputData = {
                  businessName: 'Test Business',
                  industry: ['IT'],
                  businessType: ['Startup'],
                  businessSize: 'Small',
                  hasWebsite: 'Yes',
                  sellsOnline: 'Yes',
                  tools: ['Tool1'],
                  customerInteraction: ['Online'],
                  challenges: ['Marketing'],
                };
                fetchPrediction(inputData); // Call API with data
              }}
            >
              <button type="submit">Submit</button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {apiData && (
              <div>
                <h4>Prediction Results:</h4>
                <pre>{JSON.stringify(apiData, null, 2)}</pre>
              </div>
            )}
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;

