// import React, { useState } from 'react';
// import axios from 'axios';
// import './QueriesPage.css';

// const QueryPage = () => {
//     const [formData, setFormData] = useState({
//         businessName: '',
//         industry: [],
//         businessType: [],
//         businessSize: '',
//         hasWebsite: '',
//         sellsOnline: '',
//         tools: [],
//         customerInteraction: [],
//         challenges: []
//     });

//     const [prediction, setPrediction] = useState(null);

//     const industryOptions = ['Retail', 'Tech', 'Food', 'Finance'];
//     const businessTypeOptions = ['Retail', 'Service', 'Manufacturing', 'E-commerce', 'Consulting'];
//     const businessSizeOptions = ['Small', 'Medium', 'Large'];
//     const binaryOptions = ['Yes', 'No'];
//     const toolOptions = ['CRM', 'ERP', 'Inventory Management', 'Email Marketing', 'Social Media Management', 'Accounting', 'Analytics'];
//     const interactionOptions = ['Phone', 'In-store', 'Email', 'Social media', 'Automated chatbots', 'CRM'];
//     const challengeOptions = ['Marketing', 'Sales', 'Inventory management', 'Customer retention', 'Time management', 'Operational efficiency'];

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
        
//         if (type === 'checkbox') {
//             setFormData(prev => ({
//                 ...prev,
//                 [name]: checked 
//                     ? [...prev[name], value]
//                     : prev[name].filter(item => item !== value)
//             }));
//         } else {
//             setFormData(prev => ({
//                 ...prev,
//                 [name]: value
//             }));
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             console.log('Form data:', formData);
//             const response = await axios.post('http://127.0.0.1:5000/predict', formData);
//             setPrediction(response.data.recommended_tools);
//         } catch (error) {
//             console.error('Error fetching prediction:', error);
//         }
//     };

//     const renderCheckboxGroup = (name, options) => (
//         <div className="checkbox-group">
//             {options.map(option => (
//                 <label key={option} className="checkbox-label">
//                     <input
//                         type="checkbox"
//                         name={name}
//                         value={option}
//                         checked={formData[name].includes(option)}
//                         onChange={handleChange}
//                     />
//                     {option}
//                 </label>
//             ))}
//         </div>
//     );

//     const renderRadioGroup = (name, options) => (
//         <div className="radio-group">
//             {options.map(option => (
//                 <label key={option} className="radio-label">
//                     <input
//                         type="radio"
//                         name={name}
//                         value={option}
//                         checked={formData[name] === option}
//                         onChange={handleChange}
//                     />
//                     {option}
//                 </label>
//             ))}
//         </div>
//     );

//     return (
//         <div className="query-container">
//             <form onSubmit={handleSubmit} className="query-form">
//                 <h1>Business Profile Questionnaire</h1>

//                 <div className="form-group">
//                     <label>Business Name</label>
//                     <input
//                         type="text"
//                         name="businessName"
//                         value={formData.businessName}
//                         onChange={handleChange}
//                         className="text-input"
//                         required
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Select your industry:</label>
//                     {renderCheckboxGroup('industry', industryOptions)}
//                 </div>

//                 <div className="form-group">
//                     <label>Select your business type:</label>
//                     {renderCheckboxGroup('businessType', businessTypeOptions)}
//                 </div>

//                 <div className="form-group">
//                     <label>What is the size of your business?</label>
//                     {renderRadioGroup('businessSize', businessSizeOptions)}
//                 </div>

//                 <div className="form-group">
//                     <label>Do you have a website for your business?</label>
//                     {renderRadioGroup('hasWebsite', binaryOptions)}
//                 </div>

//                 <div className="form-group">
//                     <label>Do you sell products/services online?</label>
//                     {renderRadioGroup('sellsOnline', binaryOptions)}
//                 </div>

//                 <div className="form-group">
//                     <label>Which tools do you currently use?</label>
//                     {renderCheckboxGroup('tools', toolOptions)}
//                 </div>

//                 <div className="form-group">
//                     <label>How do you interact with your customers?</label>
//                     {renderCheckboxGroup('customerInteraction', interactionOptions)}
//                 </div>

//                 <div className="form-group">
//                     <label>What are the major challenges your business faces?</label>
//                     {renderCheckboxGroup('challenges', challengeOptions)}
//                 </div>

//                 <button type="submit" className="submit-button">Submit</button>
//             </form>

//             {prediction && (
//                 <div className="prediction-results">
//                     <h2>Recommended Tools:</h2>
//                     <ul>
//                         {prediction.map((tool, index) => (
//                             <li key={index}>{tool}</li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default QueryPage;


// QueriesPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './QueriesPage.css';

const QueryPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        businessName: '',
        industry: [],
        businessType: [],
        businessSize: '',
        hasWebsite: '',
        sellsOnline: '',
        tools: [],
        customerInteraction: [],
        challenges: []
    });

    const industryOptions = ['Retail', 'Tech', 'Food', 'Finance'];
    const businessTypeOptions = ['Retail', 'Service', 'Manufacturing', 'E-commerce', 'Consulting'];
    const businessSizeOptions = ['Small', 'Medium', 'Large'];
    const binaryOptions = ['Yes', 'No'];
    const toolOptions = ['CRM', 'ERP', 'Inventory Management', 'Email Marketing', 'Social Media Management', 'Accounting', 'Analytics'];
    const interactionOptions = ['Phone', 'In-store', 'Email', 'Social media', 'Automated chatbots', 'CRM'];
    const challengeOptions = ['Marketing', 'Sales', 'Inventory management', 'Customer retention', 'Time management', 'Operational efficiency'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                [name]: checked 
                    ? [...prev[name], value]
                    : prev[name].filter(item => item !== value)
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData);
            // Navigate to results page with the prediction data
            navigate('/results', { 
                state: { 
                    prediction: response.data.recommended_tools,
                    businessName: formData.businessName 
                }
            });
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };

    const renderCheckboxGroup = (name, options) => (
        <div className="checkbox-group">
            {options.map(option => (
                <label key={option} className="checkbox-label">
                    <input
                        type="checkbox"
                        name={name}
                        value={option}
                        checked={formData[name].includes(option)}
                        onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    );

    const renderRadioGroup = (name, options) => (
        <div className="radio-group">
            {options.map(option => (
                <label key={option} className="radio-label">
                    <input
                        type="radio"
                        name={name}
                        value={option}
                        checked={formData[name] === option}
                        onChange={handleChange}
                    />
                    {option}
                </label>
            ))}
        </div>
    );

    return (
        <div className="query-container">
            <form onSubmit={handleSubmit} className="query-form">
                <h1>Business Profile Questionnaire</h1>

                <div className="form-group">
                    <label>Business Name</label>
                    <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="text-input"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Select your industry:</label>
                    {renderCheckboxGroup('industry', industryOptions)}
                </div>

                <div className="form-group">
                    <label>Select your business type:</label>
                    {renderCheckboxGroup('businessType', businessTypeOptions)}
                </div>

                <div className="form-group">
                    <label>What is the size of your business?</label>
                    {renderRadioGroup('businessSize', businessSizeOptions)}
                </div>

                <div className="form-group">
                    <label>Do you have a website for your business?</label>
                    {renderRadioGroup('hasWebsite', binaryOptions)}
                </div>

                <div className="form-group">
                    <label>Do you sell products/services online?</label>
                    {renderRadioGroup('sellsOnline', binaryOptions)}
                </div>

                <div className="form-group">
                    <label>Which tools do you currently use?</label>
                    {renderCheckboxGroup('tools', toolOptions)}
                </div>

                <div className="form-group">
                    <label>How do you interact with your customers?</label>
                    {renderCheckboxGroup('customerInteraction', interactionOptions)}
                </div>

                <div className="form-group">
                    <label>What are the major challenges your business faces?</label>
                    {renderCheckboxGroup('challenges', challengeOptions)}
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default QueryPage;