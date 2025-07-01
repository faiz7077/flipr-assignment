// "use client";
// import { useState } from "react";


// export default function NewsletterSection() {
//   const [email, setEmail] = useState("");

//   const handleNewsLetterSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await instance.post("/create/newsletter", { email });
//       console.log(response.data);
//       alert(response.data);
//       setEmail("");
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className="bg-blue-600 t w-full flex items-center justify-center flex-col lg:flex-row">
//       <ul className="flex justify-center w-full lg:w-1/2 t lg:px-10 items-center text-white mx-auto">
//         <li className="p-4">Home</li>
//         <li className="p-4">Services</li>
//         <li className="p-4">Projects</li>
//         <li className="p-4">Testimonials</li>
//         <li className="p-4">Contact</li>
//       </ul>
//       <div className="w-full p-5 lg:w-1/2 flex text-white items-center justify-center">
//         <h3 className="mx-5">Subscribe Us</h3>
//         <form onSubmit={handleNewsLetterSubmit}>
//           <input
//             type="email"
//             name="newsletter-email"
//             id="newsletter-email"
//             placeholder="Enter Email Address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="outline-none px-10 py-2 rounded-l-xl bg-transparent border-2 border-r-0 border-white"
//           />
//           <button
//             type="submit"
//             className="font-bold px-10 py-2 rounded-r-xl text-blue-600 bg-white border-2 border-l-0 border-white"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
"use client";
import { useState } from "react";
import axios from "axios";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");

  const handleNewsLetterSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/create/newsletter", { email });
      console.log(response.data);
      alert(response.data);
      setEmail("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="bg-blue-600 w-full flex flex-col lg:flex-row items-center justify-between p-6 gap-6 text-white">
      {/* Navigation Links */}
      <ul className="flex flex-wrap justify-center gap-4 lg:gap-8 lg:justify-start w-full lg:w-1/2 text-sm sm:text-base">
        <li className="px-3 py-2 cursor-pointer">Home</li>
        <li className="px-3 py-2 cursor-pointer">Services</li>
        <li className="px-3 py-2 cursor-pointer">Projects</li>
        <li className="px-3 py-2 cursor-pointer">Testimonials</li>
        <li className="px-3 py-2 cursor-pointer">Contact</li>
      </ul>

      {/* Newsletter Subscription */}
      <div className="w-full lg:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-4">
        <h3 className="text-lg font-semibold">Subscribe Us</h3>
        <form
          onSubmit={handleNewsLetterSubmit}
          className="flex flex-col sm:flex-row w-full sm:w-auto items-center"
        >
          <input
            type="email"
            name="newsletter-email"
            id="newsletter-email"
            placeholder="Enter Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none px-4 py-2 rounded-t-xl sm:rounded-l-xl sm:rounded-tr-none bg-transparent border-2 border-white text-white w-full sm:w-auto"
          />
          <button
            type="submit"
            className="font-bold px-6 py-2 rounded-b-xl sm:rounded-r-xl sm:rounded-bl-none bg-white text-blue-600 border-2 border-white mt-2 sm:mt-0"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
