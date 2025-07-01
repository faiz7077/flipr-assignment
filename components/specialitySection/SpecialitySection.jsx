import Image from "next/image";

export default  function SpecialitySection() {
    const sections = [
      {
        img: "/assets/images/specialitysection/home.svg",
        title: "Potential ROI",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque, justo nec.",
      },
      {
        img: "/assets/images/specialitysection/paintbrush-2.svg",
        title: "Design",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque, justo nec.",
      },
      {
        img: "/assets/images/specialitysection/circle-dollar-sign.svg",
        title: "Marketing",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque, justo nec.",
      },
    ];
  
    return (

      <div className="t w-full t flex flex-col items-center justify-center p-10">
        <div className="text-3xl font-bold text-center p-3 text-blue-600">
          Why Choose Us?
        </div>
        <Image src="/assets/images/specialitysection/shapes/Rectangle 58.svg" width={100} height={100} alt="" className="mb-5 p-4" />
        <div className="t w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center relative ">
        <Image
            className=" absolute right-4 top-4"
            src="/assets/images/about/Group 1.svg"
            width={150} 
            height={150}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute left-0 top-0 bottom-10 z-[-5]"
            src="/assets/images/about/Ellipse 7-1.svg"
            width={300} 
            height={300}
            alt="Subtract"
          ></Image>
          {sections.map((section, index) => (
            <div key={index} className="p-4 mx-3 w-full t flex flex-col items-center h-72 z-999">
              <div className="rounded-full bg-blue-50 mb-4 z-3">
                <Image src={section.img} width={64} height={64} alt="" className="p-4" />
              </div>
              <h2 className="text-3xl m-3 p-4 text-blue-600 font-bold">{section.title}</h2>
              <p className="text-center px-5 py-4 text-ellipsis overflow-hidden whitespace-nowrap w-full">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  