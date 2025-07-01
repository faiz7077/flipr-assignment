"use client";
import React, { useState } from 'react';
import "./Hero.css";

export default function Hero() {
  return (
    <div id="home" className="hero h-[60vh] px-4 md:px-[10vw] flex items-center">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <span className="text-3xl md:text-[3rem] text-white font-bold text-center lg:text-left pt-8">
          Consultaion, Design<br />& Marketing
        </span>
        <Form />
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async () => {
    try {
      const data = { name, email, mobile, city };

      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Form submitted successfully, thanks for joining");
        setName(""); setEmail(""); setMobile(""); setCity("");
      } else {
        console.error('Form submission failed');
      }
    } catch (err) {
      console.error('An error occurred:', err);
    }
  };

  return (
    <div className="w-full max-w-md bg-[#515F8C] flex flex-col items-center text-white justify-evenly rounded-xl p-6">
      <span className="font-bold text-xl text-center mb-4">
        Get a Free<br />Consultation
      </span>
      <input
        placeholder="Name"
        type="text"
        className="w-full border border-black rounded-xl px-4 py-2 mb-2 text-black"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter email address"
        type="email"
        className="w-full border border-black rounded-xl px-4 py-2 mb-2 text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Mobile Number"
        type="number"
        className="w-full border border-black rounded-xl px-4 py-2 mb-2 text-black"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <input
        placeholder="City"
        type="text"
        className="w-full border border-black rounded-xl px-4 py-2 mb-4 text-black"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="font-bold bg-[#F46D22] text-white px-4 py-2 rounded w-full"
        onClick={handleSubmit}
      >
        GET A QUICK QUOTE
      </button>
    </div>
  );
}
