import Link from "next/link";


export default function Footer() {
    return (
      <div className="md:p-4 w-full flex flex-col sm:flex-row items-center justify-evenly bg-gray-300 p-2 text-black font-bold">
        <div className="w-full sm:w-1/3 text-center sm:text-left p-3">
          All Rights Reserved | 2024
        </div>
        <Link href={"/home"}><img className="max-w-36 m-3" src="/assets/images/logo.svg" alt="" /></Link>
        
        <div className="w-1/3 flex items-center justify-center sm:justify-end">
        <Link href ={"#"}><img className="m-2" src="/assets/images/specialitysection/Group.svg" alt="" /></Link>
        <Link href ={"#"}><img className="m-2" src="/assets/images/specialitysection/Linkedin.svg" alt="" /></Link>
        <Link href ={"#"}><img className="m-2" src="/assets/images/specialitysection/Frame.svg" alt="" />
        </Link>
        <Link href ={"#"}><img className="m-2" src="/assets/images/specialitysection/Group-1.svg" alt="" /></Link>
          
          
          
        </div>
      </div>
    );
  }
  

                 