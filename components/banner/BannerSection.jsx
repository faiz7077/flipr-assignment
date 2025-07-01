export default function BannerSection() {
    return (
      <div
        className="t w-full t flex items-center flex-col justify-center relative min-h-96 bg-no-repeat pt-10"
        style={{
          background: `url('/assets/images/gallerysection/Rectangle.svg')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "rgba(0,0,0, 0.5)",
          backgroundBlendMode: "multiply",
        }}
      >
        <h2 className="text-3xl mb-5 text-white font-extrabold w-1/2 text-center p-4">
          Learn more about our listing process, as well as our additional staging and design work.
        </h2>
        <button className="my-4 px-4 py-3 text-blue-600 font-bold rounded-lg w-1/4 bg-white">
          LEARN MORE
        </button>
      </div>
    );
  }
  