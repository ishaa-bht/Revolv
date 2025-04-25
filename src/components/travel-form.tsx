// import { useState } from 'react';

// const TravelForm = () => {
//   const [loading, setLoading] = useState(false);
//   const [itinerary, setItinerary] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     const query = {
//       userDetails: {
//         name: "Ayush",
//         preferredLanguage: {
//           options: ["English", "Spanish"],
//           selected: "English"
//         }
//       },
//       travelPreferences: {
//         travelType: {
//           options: ["Solo", "Group"],
//           selected: "Group"
//         },
//         activities: {
//           options: ["Trekking", "Cultural Tours"],
//           selected: ["Trekking"]
//         },
//         duration: {
//           options: ["1-3 days", "4-7 days"],
//           selected: "4-7 days"
//         },
//         budget: {
//           currency: "USD",
//           range: {
//             min: 500,
//             max: 3000
//           }
//         }
//       },
//       healthDetails: {
//         activityLevel: {
//           options: ["Low", "Moderate", "High"],
//           selected: "Moderate"
//         },
//         dietaryPreferences: {
//           options: ["Vegetarian", "Vegan"],
//           selected: ["Vegan"]
//         },
//         allergies: []
//       },
//       destinationPreferences: {
//         regions: {
//           options: ["Mountains", "Cities"],
//           selected: ["Mountains"]
//         },
//         popularDestinations: {
//           options: ["Everest Base Camp", "Pokhara"],
//           selected: []
//         },
//         offbeatDestinations: []
//       },
//       travelLogistics: {
//         transportPreferences: {
//           options: ["Private Vehicle", "Public Transport"],
//           selected: ["Public Transport"]
//         },
//         accommodationType: {
//           options: ["Budget", "Mid-range"],
//           selected: "Mid-range"
//         },
//         arrivalDate: "",
//         departureDate: ""
//       },
//       personalization: {
//         travelGoals: {
//           options: ["Relaxation", "Adventure"],
//           selected: ["Adventure"]
//         },
//         socialPreferences: {
//           options: ["Meet New People", "Travel in Peace"],
//           selected: "Travel in Peace"
//         }
//       }
//     };

//     try {
//       const response = await fetch('http://localhost:8000/itinerary', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(query)
//       });

//       if (!response.ok) {
//         throw new Error('Failed to fetch itinerary');
//       }

//       const data = await response.json();
//       setItinerary(data);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-4 max-w-4xl mx-auto">
//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
//       >
//         {loading ? 'Generating Itinerary...' : 'Get Itinerary'}
//       </button>

//       {error && (
//         <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
//           {error}
//         </div>
//       )}

//       {itinerary && (
//         <div className="mt-4">
//           <h2 className="text-xl font-bold mb-2">Your Itinerary</h2>
//           <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">
//             {itinerary.itinerary}
//           </pre>
          
//           <h3 className="text-lg font-bold mt-4 mb-2">Sources</h3>
//           <ul className="list-disc pl-5">
//             {itinerary.sources.map((source, index) => (
//               <li key={index}>
//                 File: {source.file}, Row: {source.row}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TravelForm;