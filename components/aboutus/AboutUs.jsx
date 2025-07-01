import Image from "next/image";

export default function AboutUsSection() {
  return (
    <div className="t w-full flex flex-col items-center justify-center p-10">
      <div className="text-3xl font-bold text-center p-3 text-blue-600">
        About Us
      </div>
      <Image 
        src="/assets/images/about/Rectangle 58.svg" 
        alt="Decoration" 
        className="mb-5 p-4" 
        width={200} // Adjust width as needed
        height={50} // Adjust height as needed
      />
      <p className="w-3/4 lg:w-1/2 p-4 my-4 text-xl text-gray-600 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        quaerat quia accusamus autem adipisci esse mollitia, cum officiis atque
        unde ipsum totam voluptatibus quibusdam placeat maxime, ab dolores sequi
        et.
      </p>
      <button className="my-6 px-4 py-3 border border-b-2 border-b-blue-600 shadow-md text-blue-600 font-bold rounded-lg w-1/4 ">
        LEARN MORE
      </button>
    </div>
  );
}

 
