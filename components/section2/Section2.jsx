// import Image from "next/image";
// export default function Section2() {
//     return (
//       <div id="services" className="t w-full t flex items-center justify-center relative z-10" style={{ height: "100vh" }}>
//         <Image
//             className=" absolute left-5 top-[-50]"
//             src="/assets/images/about/Ellipse 22.svg"
//             width={150} 
//             height={150}
//             alt="Subtract"
//           ></Image>
//           <Image
//             className=" absolute left-5 top-[-50]"
//             src="/assets/images/about/Group 1.svg"
//             width={150} 
//             height={150}
//             alt="Subtract"
//           ></Image>
//         <div className="t w-1/2 flex flex-col items-center justify-center relative">
//           <h1 className="text-4xl p-2 ml-5 t text-blue-600 font-bold">
//             Not Your Average Realtor
//           </h1>
//           <p className="text-left py-2 t w-full ml-10 lg:w-1/2 lg:mr-5 lg:ml-0 text-gray-700">
//             Buying or selling a home is more than a transaction; it&aposs a life-changing experience. 
//             As &aposNot Your Average Realtor,&apos I go beyond the basics to deliver tailored, data-driven insights,
//             innovative marketing, and an unwavering commitment to your goals. My focus isn&apost just 
//             on closing deals but on creating an experience that&aposs as seamless and 
//             rewarding as possible
//           </p>
          
//         </div>
        
//         <div className="grid grid-cols-2 t w-1/2 place-items-center relative ">
//         <Image
//             className=" absolute left-5 top-[0]"
//             src="/assets/images/about/Ellipse 10.svg"
//             width={150} 
//             height={150}
//             alt="Subtract"
//           ></Image>
//           <Image
//             className=" absolute left-0 right-3 top-[0]"
//             src="/assets/images/about/Ellipse 10.svg"
//             width={75} 
//             height={75}
//             alt="Subtract"
//           ></Image>
//           <Image
//             className=" absolute left-0 right-5 top-[0] rotate-180 z-0"
//             src="/assets/images/about/Ellipse 7-1.svg"
//             width={400} 
//             height={400}
//             alt="Subtract"
//           ></Image>
//           <Image src="/assets/images/about/Ellipse 11.svg" alt="" width={288} height={288} />
//           <div>
//             <Image src="/assets/images/about/Ellipse 12.svg" width={288} height={288} alt="" />
//             <Image src="/assets/images/about/Ellipse 13.svg" width={288} height={288} alt="" />
//           </div>
//         </div>
//       </div>
//     );
//   }
  import Image from "next/image";

export default function Section2() {
  return (
    <div
      id="services"
      className="w-full flex flex-col lg:flex-row items-center justify-center relative px-4 py-12 min-h-screen"
    >
      {/* Decorative Background Images */}
      <Image
        className="absolute left-5 top-0 w-24 opacity-30 z-0 hidden md:block"
        src="/assets/images/about/Ellipse 22.svg"
        width={150}
        height={150}
        alt="Background Ring"
      />
      <Image
        className="absolute left-5 top-10 w-24 opacity-20 z-0 hidden md:block"
        src="/assets/images/about/Group 1.svg"
        width={150}
        height={150}
        alt="Group Decoration"
      />

      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start z-10 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
          Not Your Average Realtor
        </h1>
        <p className="text-base md:text-lg text-gray-700 px-2 md:px-0 max-w-xl">
          Buying or selling a home is more than a transaction; it's a life-changing experience. As
          <strong> "Not Your Average Realtor"</strong>, I go beyond the basics to deliver tailored,
          data-driven insights, innovative marketing, and an unwavering commitment to your goals.
          My focus isn't just on closing deals but on creating an experience that's as seamless and
          rewarding as possible.
        </p>
      </div>

      {/* Image Cluster Section */}
      <div className="w-full lg:w-1/2 grid grid-cols-2 place-items-center relative mt-10 lg:mt-0 gap-4">
        {/* Background Decoration */}
        <Image
          className="absolute top-0 left-8 w-24 z-0"
          src="/assets/images/about/Ellipse 10.svg"
          width={150}
          height={150}
          alt="Decoration"
        />
        <Image
          className="absolute top-10 right-4 w-20 z-0"
          src="/assets/images/about/Ellipse 10.svg"
          width={75}
          height={75}
          alt="Decoration"
        />
        <Image
          className="absolute top-20 left-1/2 transform -translate-x-1/2 rotate-180 z-0"
          src="/assets/images/about/Ellipse 7-1.svg"
          width={400}
          height={400}
          alt="Large Background Ring"
        />

        {/* Foreground Images */}
        <Image
          src="/assets/images/about/Ellipse 11.svg"
          alt="Main"
          width={288}
          height={288}
          className="z-10"
        />
        <div className="flex flex-col gap-4 z-10">
          <Image src="/assets/images/about/Ellipse 12.svg" width={288} height={288} alt="Sub 1" />
          <Image src="/assets/images/about/Ellipse 13.svg" width={288} height={288} alt="Sub 2" />
        </div>
      </div>
    </div>
  );
}
