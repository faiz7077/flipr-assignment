
// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Image from "next/image";

// export default function Client({ img, name, description, designation }) {
//   const [clients, setClients] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchClients = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/clients");
//         setClients(response.data);
//         console.log("Fetched Clients Data:", response.data);
//       } catch (err) {
//         console.error("Error fetching clients:", err);
//         setError("Failed to load clients. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchClients();
//   }, []);

//   // Fixed convertBufferToBase64 function - simplified and consistent with Projects.jsx
//   const convertBufferToBase64 = (bufferData) => {
//     const byteArray = new Uint8Array(bufferData);
//     let binary = '';
//     byteArray.forEach((byte) => (binary += String.fromCharCode(byte)));
//     return `data:image/jpeg;base64,${btoa(binary)}`;
//   };

//   if (loading) {
//     return <div className="text-center py-8">Loading clients...</div>;
//   }

//   if (error) {
//     return <div className="text-center py-8 text-red-500">{error}</div>;
//   }

//   if (clients.length === 0 && !loading && !error) {
//     return <div className="text-center py-8 text-gray-500">No clients to display.</div>;
//   }

//   return (
//     <div className="client-list bg-gray-100 pl-10 pr-10 rounded-3xl">
//       <h2 className="text-3xl text-blue-600 font-bold text-center my-8">Our Happy Clients</h2>
//       <p className="text-xl flex flex-col items-center">Here is a list of all the clients</p>
//       <div className="overflow-hidden">
//         <div className="flex animate-scroll space-x-6 px-4 py-4">
//           {clients.map((client, index) => {
//             let imgSrc = '';

//             // Fixed image processing logic - using correct field name 'img'
//             if (typeof client.img === 'string') {
//               // Handle file path - convert to full URL
//               imgSrc = client.img.startsWith('/storage/') 
//                 ? `http://localhost:3000${client.img}` 
//                 : client.img;
//             } else if (client.img && client.img.data && Array.isArray(client.img.data.data)) {
//               imgSrc = convertBufferToBase64(client.img.data.data);
//             }

//             return (
//               <div
//                 key={`${client._id || client.id}-${index}`}
//                 className="flex-shrink-0 w-60 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-white"
//               >
//                 <div className="w-full h-40 flex justify-center items-center bg-gray-200">
//                   {imgSrc ? (
//                     <Image
//                       src={imgSrc}
//                       alt={client.name || 'Client Image'}
//                       width={80}
//                       height={80}
//                       unoptimized={imgSrc.startsWith("data:image")}
//                       className="w-20 h-20 object-cover rounded-full"
//                     />
//                   ) : (
//                     <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-xs">
//                       No Img
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-4 bg-white">
//                   <h3 className="text-lg font-semibold text-blue-600">{client.name || "N/A"}</h3>
//                   <p className="text-sm text-gray-600 mt-1">{client.designation || "N/A"}</p>
//                   <p className="text-sm text-gray-600 mt-2 line-clamp-3">{client.description || "No description provided."}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import "./clients.css"; // Import the CSS file

export default function Client({ img, name, description, designation }) {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    fetchClients();
  }, []);

  const convertBufferToBase64 = (bufferData) => {
    const byteArray = new Uint8Array(bufferData);
    let binary = '';
    byteArray.forEach((byte) => (binary += String.fromCharCode(byte)));
    return `data:image/jpeg;base64,${btoa(binary)}`;
  };

  // Duplicate clients array for seamless infinite scroll when there are multiple clients
  const shouldScroll = clients.length > 3; // Enable scrolling when more than 3 clients
  const displayClients = shouldScroll ? [...clients, ...clients] : clients;

  return (
    <div id="clients" className="pl-10 pr-10 bg-gray-100 rounded-3xl">
      <h1 className="p-10 flex flex-col items-center text-3xl font-bold text-blue-500">Our Happy Clients</h1>
      <span className="text-xl flex flex-col items-center">
        Here are the testimonials from our satisfied clients who trust
        <br />
        <span>our expertise and dedication to excellence</span>
      </span>

      <div className={`${shouldScroll ? 'overflow-hidden' : 'overflow-x-auto scroll-container'}`}>
        <div 
          className={`flex space-x-4 px-4 py-4 ${shouldScroll ? 'animate-scroll' : ''}`}
          style={shouldScroll ? { '--client-count': clients.length } : {}}
        >
          {displayClients.map((client, index) => {
            let imgSrc = '';

            if (typeof client.img === 'string') {
              imgSrc = client.img;
            } else if (client.img && client.img.data && Array.isArray(client.img.data.data)) {
              imgSrc = convertBufferToBase64(client.img.data.data);
            }

            return (
              <div
                key={`${client._id || client.id}-${index}`}
                className="client-card flex-shrink-0 w-60 border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 bg-white"
              >
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={client.name || 'Client Image'}
                    width={240}
                    height={160}
                    unoptimized={imgSrc.startsWith('data:image')}
                    className="w-full h-40 object-contain flex justify-center items-center bg-gray-200"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                    No Image Available
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-600">{client.name || "N/A"}</h3>
                  <p className="text-sm text-gray-600 mt-1">{client.designation || "N/A"}</p>
                  <p className="text-sm text-gray-600 mt-2">{client.description || "No description provided."}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}