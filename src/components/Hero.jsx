import design from "../assets/design.svg";

export default function Hero() {
  return (
    <section className="bg-[#121D2D] text-white min-h-[521px] flex flex-col md:flex-row items-center px-6 md:px-20 py-10 gap-10">
      {/* Left content */}
      <div className="w-full scale-105 md:scale-110 mx-20 md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold font-inter leading-tight">
          Get instant cash <br />
          flow with invoice <br />
          factoring
        </h1>

        <p className="text-base md:text-lg text-gray-300 font-inter">
          Why wait? Get same day funding and a faster way to access cash flow.
        </p>

        <div className="space-y-6">
          <button className="bg-white text-[#6c2bd9] font-medium px-5 py-2 rounded-xl text-base hover:bg-gray-200 transition">
            Get started
          </button>

          {/* Slide indicators */}
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-3 h-3 bg-fuchsia-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full opacity-100"></span>
            <span className="w-3 h-3 bg-gray-500 rounded-full opacity-100"></span>
          </div>
        </div>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 scale-105 md:scale-110 flex justify-center md:justify-end">
        <img
          src={design}
          alt="Hero Image"
          className="w-full max-w-[700px] md:max-w-[700px] object-contain "
        />
      </div>
    </section>
  );
}
