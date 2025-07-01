import React from 'react'
import testimonials from "./Testimonials.json"
import Image from 'next/image'
import { Button } from '../ui/button'

export default function Testimonials() {
  const [clients, setClients] = React.useState([]);
    const [newClient, setNewClient] = React.useState({
      img: '',
      name: '',
      description: '',
      designation: ''
    });
  
    React.useEffect(() => {
      fetch("/api/clients") // Adjust API endpoint for clients
        .then((res) => res.json())
        .then((data) => setClients(data));
    }, []);
    const duplicatedClients = clients;
  return (

    <div id ="testimonials"className="p-10 flex flex-col items-center">
        <h1 className="p-10 flex flex-col items-center text-3xl font-bold text-blue-500">Happy Clients</h1>
        <div className="flex flex-wrap gap-8 justify-evenly ">
         <div className="flex animate-scroll space-x-6 px-4 py-4">
          {duplicatedClients.map((client, index) => (
            <div
              key={`duplicate-client-${index}`}
              className="flex-shrink-0 w-60 border-2 border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl bg-white"
            >
              {/* Image Section with Circle */}
              <div className="w-full h-40 flex justify-center items-center bg-gray-200">
                {client.image ? (
                  <img
                    src={`data:image/jpeg;base64,${client.image}`}
                    alt={client.name}
                    className="w-20 h-20 object-cover rounded-full"
                  />
                ) : (
                  <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
                )}
              </div>

              {/* Client Details */}
              <div className="p-4 bg-white">
                <p className="text-sm text-gray-600 mt-2">{client.description}</p>
                <h3 className="text-lg font-semibold text-blue-600">{client.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{client.designation}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export function Testimonial({ image, review, name, title }) {
    return (
        <div className="rounded-md flex flex-col items-start w-[18vw] gap-3 bg-white drop-shadow-xl items-center pb-6">
          <Image src={image} width={50} height={50} alt={"review"} className="rounded-full w-10vw object-cover overflow-hidden"></Image>
          <div className="flex flex-col justify-start gap-2 p-3 ">
            <span className="review ">{review}</span>
            <h4 className="name font-bold text-blue-500 ">{name}</h4>
            <span className="title text-sm ">{title}</span>
          </div>
        </div>
    )
}
