
"use client";
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import "./projects.css"; // Import the CSS file

export default function Project({ img, imgAlt, title, description }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('https://flipr-assignm.onrender.com/api/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const convertBufferToBase64 = (bufferData) => {
    const byteArray = new Uint8Array(bufferData);
    let binary = '';
    byteArray.forEach((byte) => (binary += String.fromCharCode(byte)));
    return `data:image/jpeg;base64,${btoa(binary)}`;
  };

  // Duplicate projects array for seamless infinite scroll when there are multiple projects
  const shouldScroll = projects.length > 3; // Enable scrolling when more than 3 projects
  const displayProjects = shouldScroll ? [...projects, ...projects] : projects;

  return (
    <div id="projects" className="pl-10 pr-10 bg-gray-100 rounded-3xl">
      <h1 className="p-10 flex flex-col items-center text-3xl font-bold text-blue-500">Our Projects</h1>
      <span className="text-xl flex flex-col items-center">
        We know what buyers are looking for and suggest projects that will bring
        <br />
        <span>Clients top dollar at sale of their homes</span>
      </span>

      <div className={`${shouldScroll ? 'overflow-hidden' : 'overflow-x-auto scroll-container'}`}>
        <div 
          className={`flex space-x-4 px-4 py-4 ${shouldScroll ? 'animate-scroll' : ''}`}
          style={shouldScroll ? { '--project-count': projects.length } : {}}
        >
          {displayProjects.map((project, index) => {
            let imgSrc = '';

            if (typeof project.img === 'string') {
              imgSrc = project.img;
            } else if (project.img && project.img.data && Array.isArray(project.img.data.data)) {
              imgSrc = convertBufferToBase64(project.img.data.data);
            }

            return (
              <div
                key={`${project._id || project.id}-${index}`}
                className="project-card flex-shrink-0 w-60 border rounded-lg shadow-lg overflow-hidden transform hover:scale-105 bg-white"
              >
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={project.title || 'Project Image'}
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
                  <h3 className="text-lg font-semibold text-blue-600">{project.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                  <Button className="mt-4 w-full bg-orange-500 text-white hover:bg-blue-600">Read More</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}