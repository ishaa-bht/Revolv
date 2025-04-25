// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './JobListingsPage.css';

// const JobListingsPage = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const jobType = queryParams.get('jobType') || '';

//   // Sample job listings
//   const jobs = [
//     { id: 1, title: 'Social Media Manager', salary: '$50,000', description: 'Manage social media accounts for brands.' },
//     { id: 2, title: 'Software Developer', salary: '$80,000', description: 'Develop and maintain software applications.' },
//     { id: 3, title: 'Graphic Designer', salary: '$45,000', description: 'Create visual content for marketing campaigns.' },
//   ];

//   // Filter jobs based on the selected job type
//   const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(jobType.toLowerCase()));

//   return (
//     <div className="job-listings-container">
//       <h1 className="page-header">Available Jobs</h1>
//       <div className="job-list">
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map(job => (
//             <div key={job.id} className="job-card">
//               <h2>{job.title}</h2>
//               <p><strong>Salary:</strong> {job.salary}</p>
//               <p>{job.description}</p>
//               <button className="apply-button">Apply</button>
//             </div>
//           ))
//         ) : (
//           <p>No jobs found for "{jobType}"</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobListingsPage;


// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import './JobListingsPage.css';

// const JobListingsPage = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const jobType = queryParams.get('jobType') || '';
//   const jobTime = queryParams.get('jobTime') || '';
//   const locationPref = queryParams.get('location') || '';

//   // Sample job listings
//   const jobs = [
//     { id: 1, title: 'Social Media Manager', salary: '$50,000', jobTime: 'Full-time', location: 'New York' },
//     { id: 2, title: 'Software Developer', salary: '$80,000', jobTime: 'Full-time', location: 'San Francisco' },
//     { id: 3, title: 'Graphic Designer', salary: '$45,000', jobTime: 'Part-time', location: 'Los Angeles' },
//   ];

//   // Filter jobs based on user input
//   const filteredJobs = jobs.filter(
//     job =>
//       job.title.toLowerCase().includes(jobType.toLowerCase()) &&
//       (jobTime ? job.jobTime === jobTime : true) &&
//       (locationPref ? job.location.toLowerCase().includes(locationPref.toLowerCase()) : true)
//   );

//   return (
//     <div className="job-listings-container">
//       <h1 className="page-header">Available Jobs</h1>
//       <div className="job-list">
//         {filteredJobs.length > 0 ? (
//           filteredJobs.map(job => (
//             <div key={job.id} className="job-card">
//               <h2>{job.title}</h2>
//               <p><strong>Salary:</strong> {job.salary}</p>
//               <p><strong>Job Type:</strong> {job.jobTime}</p>
//               <p><strong>Location:</strong> {job.location}</p>
//               <button className="apply-button">Apply</button>
//             </div>
//           ))
//         ) : (
//           <p>No jobs found for "{jobType}" in "{locationPref}"</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default JobListingsPage;

import React from 'react';
import { useLocation } from 'react-router-dom';
import './JobListingPage.css';

const JobListingsPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobType = queryParams.get('jobType') || '';

  // Dummy job listings
  const jobs = [
    { id: 1, title: 'Social Media Manager', salary: '$5000', jobType: 'Full-time' , company : 'ABC Appareal',contact:'Hr@abc.com' },
    { id: 2, title: 'Social Media Manager', salary: '$5500', jobType: 'Freelance' ,company : 'Stanley inc',contact:'contactus@stanly.com'},
    { id: 3, title: 'Social Media Manager', salary: '$1500', jobType: 'Part-Time' ,company : 'Innotech soultion',contact:'contactus@innotech.com'},
    { id: 4, title: 'Social Media Manager', salary: '$4000', jobType: 'Full-time' ,company : 'Rivi inc',contact:'contactus@rivi.com'},
    { id: 5, title: 'Social Media Manager', salary: '$2000', jobType: 'Freelance' ,company : 'Bonum co',contact:'contactus@bonum.com'},
  ];

  // Filter jobs based on the input type
  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(jobType.toLowerCase()));

  return (
    <div className="job-listings-container">
      <h1 className="page-header">Jobs Available</h1>
      <div className="job-list">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <div key={job.id} className="job-card">
              <h2>{job.title}</h2>
              <p><strong>Salary Offered:</strong> {job.salary}</p>
              <p><strong>Job Type:</strong> {job.jobType}</p>
              <p><strong>Company Name:</strong> {job.company}</p>
              <p><strong>Contact:</strong> {job.contact}</p>
              <button className="apply-button">Apply</button>
            </div>
          ))
        ) : (
          <p>No jobs found for "{jobType}"</p>
        )}
      </div>
    </div>
  );
};

export default JobListingsPage;