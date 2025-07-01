import Image from "next/image";

export default function GallerySection() {
  return (
    <div className="t w-full flex flex-col items-center justify-center p-10">
      <div className="grid grid-cols-3 t" style={{ height: "70vh" }}>
        <div className="t flex items-start justify-end p-5 relative">
          <Image
            className=" absolute  left-8 top-[-4]"
            src="/assets/images/about/Ellipse 19.svg"
            width={300}
            height={300}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute  left-8 bottom-5"
            src="/assets/images/about/Ellipse 21.svg"
            width={300}
            height={300}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute  left-8 bottom-5"
            src="/assets/images/about/Ellipse 21.svg"
            width={300}
            height={300}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute  left-8 bottom-0.5"
            src="/assets/images/about/Subtract-4.svg"
            width={150}
            height={150}
            alt="Subtract"
          ></Image>
          <Image
            className="t w-36 lg:w-60 lg:-translate-x-6"
            src="/assets/images/gallerysection/pexels-brett-sayles-2881232.svg"
            alt="Gallery Image 1"
            width={240} // Adjust width as needed
            height={320} // Adjust height as needed
          />
        </div>
        <div className="translate-y-20 relative">
        <Image
            className=" absolute  left-8 bottom-10 opacity-10"
            src="/assets/images/about/Rectangle 54.svg"
            width={100}
            height={100}
            alt="Subtract"
          ></Image>
        <Image
            className=" absolute  left-8 bottom-0.5 "
            src="/assets/images/about/Ellipse 19.svg"
            width={300}
            height={300}
            alt="Subtract"
          ></Image>
          <Image
            className="w-96"
            src="/assets/images/gallerysection/pexels-andres-ayrton-6578391.svg"
            alt="Gallery Image 2"
            width={384} // Adjust width as needed
            height={512} // Adjust height as needed
          />
        </div>
        <div className="flex lg:items-end translate-x-10 relative">
        <Image
            className=" absolute  top-20"
            src="/assets/images/about/Group 1.svg"
            width={150}
            height={150}
            alt="Subtract"
          ></Image>
        <Image
            className=" absolute  top-0"
            src="/assets/images/about/Ellipse 27.svg"
            width={150}
            height={150}
            alt="Subtract"
          ></Image>
          <Image
            className=" absolute  top-0"
            src="/assets/images/about/Ellipse 27.svg"
            width={150}
            height={150}
            alt="Subtract"
          ></Image>
        <Image
            className=" absolute  top-1 right-1"
            src="/assets/images/about/Subtract.svg"
            width={150}
            height={150}
            alt="Subtract"
          ></Image>
          <Image
            className="w-36 lg:w-60"
            src="/assets/images/gallerysection/pexels-fauxels-3182834.svg"
            alt="Gallery Image 3"
            width={240} // Adjust width as needed
            height={320} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
}


