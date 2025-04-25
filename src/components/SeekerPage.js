// import React from 'react';
// import './SeekerPage.css';

// const SeekerPage = () => {
//   return (
//     <div className="seeker-page">
//       <h1>Welcome, Job Seeker!</h1>
//       <p className="description">
//         Find the best job opportunities tailored just for you. Explore the options and take the next step towards your career.
//       </p>

//       <div className="job-list">
//         <h2>Available Jobs</h2>
//         <ul>
//           <li className="job-item">
//             <h3>Software Developer</h3>
//             <p>Location: Remote</p>
//             <button className="apply-btn">Apply Now</button>
//           </li>
//           <li className="job-item">
//             <h3>Data Analyst</h3>
//             <p>Location: New York, USA</p>
//             <button className="apply-btn">Apply Now</button>
//           </li>
//           <li className="job-item">
//             <h3>Product Manager</h3>
//             <p>Location: San Francisco, USA</p>
//             <button className="apply-btn">Apply Now</button>
//           </li>
//           {/* Add more job listings here */}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SeekerPage;

// import React, { useState } from 'react';
// import './SeekerPage.css';

// const SeekerPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     qualification: '',
//     experience: '',
//     jobType: '',
//     jobTime: '',
//     location: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted with data:', formData);
//     // Here, you can proceed with the form data (send to a backend or navigate to another page)
//   };

//   return (
//     <div className="seeker-page">
//       <h1>Welcome, Job Seeker!</h1>
//       <p className="description">
//         Find the best job opportunities tailored just for you. Explore the options and take the next step towards your career.
//       </p>

//       <form onSubmit={handleSubmit} className="seeker-form">
//         <label>
//           <span>Name:</span>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your full name"
//             required
//           />
//         </label>

//         <label>
//           <span>Age:</span>
//           <input
//             type="number"
//             name="age"
//             value={formData.age}
//             onChange={handleChange}
//             placeholder="Enter your age"
//             required
//           />
//         </label>

//         <label>
//           <span>Qualification:</span>
//           <input
//             type="text"
//             name="qualification"
//             value={formData.qualification}
//             onChange={handleChange}
//             placeholder="Enter your highest qualification"
//             required
//           />
//         </label>

//         <label>
//           <span>Experience (in years):</span>
//           <input
//             type="number"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             placeholder="Enter years of experience"
//             required
//           />
//         </label>

//         <label>
//           <span>Type of job you're looking for:</span>
//           <input
//             type="text"
//             name="jobType"
//             value={formData.jobType}
//             onChange={handleChange}
//             placeholder="e.g., Full-time, Part-time"
//             required
//           />
//         </label>

//         <label>
//           <span>Time of job:</span>
//           <select
//             name="jobTime"
//             value={formData.jobTime}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select job timing</option>
//             <option value="Full-time">Full-time</option>
//             <option value="Part-time">Part-time</option>
//             <option value="Freelance">Freelance</option>
//           </select>
//         </label>

//         <label>
//           <span>Preferred location:</span>
//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Enter preferred location"
//             required
//           />
//         </label>

//         <button type="submit" className="submit-btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SeekerPage;

// import React, { useState } from 'react';
// import './SeekerPage.css';

// const SeekerPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     qualification: '',
//     experience: '',
//     jobType: '',
//     jobTime: '',
//     location: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted with data:', formData);
//     // Here, you can proceed with the form data (send to a backend or navigate to another page)
//   };

//   return (
//     <div className="seeker-container">
//       <h1>Welcome, Job Seeker!</h1>
//       <p className="description">
//         Find the best job opportunities tailored just for you. Explore the options and take the next step towards your career.
//       </p>

//       <form onSubmit={handleSubmit} className="seeker-form">
//         <div className="form-group">
//           <label htmlFor="name">Name:</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Enter your full name"
//             className="text-input"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             name="age"
//             id="age"
//             value={formData.age}
//             onChange={handleChange}
//             placeholder="Enter your age"
//             className="text-input"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="qualification">Qualification:</label>
//           <input
//             type="text"
//             name="qualification"
//             id="qualification"
//             value={formData.qualification}
//             onChange={handleChange}
//             placeholder="Enter your highest qualification"
//             className="text-input"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="experience">Experience (in years):</label>
//           <input
//             type="number"
//             name="experience"
//             id="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             placeholder="Enter years of experience"
//             className="text-input"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="jobType">Type of job you're looking for:</label>
//           <input
//             type="text"
//             name="jobType"
//             id="jobType"
//             value={formData.jobType}
//             onChange={handleChange}
//             placeholder="e.g.,Social Media Manager"
//             className="text-input"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label htmlFor="jobTime">Time of job:</label>
//           <select
//             name="jobTime"
//             id="jobTime"
//             value={formData.jobTime}
//             onChange={handleChange}
//             className="select-input"
//             required
//           >
//             <option value="">Select job timing</option>
//             <option value="Full-time">Full-time</option>
//             <option value="Part-time">Part-time</option>
//             <option value="Freelance">Freelance</option>
//           </select>
//         </div>

//         <div className="form-group">
//           <label htmlFor="location">Preferred location:</label>
//           <input
//             type="text"
//             name="location"
//             id="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Enter preferred location"
//             className="text-input"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <button type="submit" className="submit-button">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SeekerPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeekerPage.css';

const SeekerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    qualification: '',
    experience: '',
    jobType: '',
    jobTime: '',
    location: '',
  });

  const navigate = useNavigate(); // Initialize navigation function

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);

    // Redirect to JobListingsPage with all form data as URL parameters
    const queryString = new URLSearchParams(formData).toString();
    navigate(`/job-listings?${queryString}`);
  };

  return (
    <div className="seeker-container">
      <h1>Welcome, Job Seeker!</h1>
      <p className="description">
        Find the best job opportunities tailored just for you. Explore the options and take the next step towards your career.
      </p>

      <form onSubmit={handleSubmit} className="seeker-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" className="text-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" name="age" id="age" value={formData.age} onChange={handleChange} placeholder="Enter your age" className="text-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="qualification">Qualification:</label>
          <input type="text" name="qualification" id="qualification" value={formData.qualification} onChange={handleChange} placeholder="Enter your highest qualification" className="text-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience (in years):</label>
          <input type="number" name="experience" id="experience" value={formData.experience} onChange={handleChange} placeholder="Enter years of experience" className="text-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="jobType">Type of job you're looking for:</label>
          <input type="text" name="jobType" id="jobType" value={formData.jobType} onChange={handleChange} placeholder="e.g., Social Media Manager" className="text-input" required />
        </div>

        <div className="form-group">
          <label htmlFor="jobTime">Time of job:</label>
          <select name="jobTime" id="jobTime" value={formData.jobTime} onChange={handleChange} className="select-input" required>
            <option value="">Select job timing</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="location">Preferred location:</label>
          <input type="text" name="location" id="location" value={formData.location} onChange={handleChange} placeholder="Enter preferred location" className="text-input" required />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default SeekerPage;