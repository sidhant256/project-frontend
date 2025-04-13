import logoipsum from "../assets/logoipsum.svg";

export default function Header() {
  return (
    <header className="relative flex flex-col md:flex-row items-center justify-between mx-15 px-4 md:px-6 py-6 md:py-10">
      {/* logoipsum Logo */}
      <div className="flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
        <img className="w-[160px] md:w-[240px] h-auto" src={logoipsum} alt="Logo" />
      </div>

      {/* Navbar elements */}
      <nav className="w-full md:w-auto mb-4 md:mb-0">
        <ul className="flex flex-col md:flex-row justify-center gap-3 md:gap-8 text-xl font-medium font-inter text-center">
          <li><a href="#products" className="hover:text-blue-500">Products</a></li>
          <li><a href="#Solutions" className="hover:text-blue-500">Solutions</a></li>
          <li><a href="#Help" className="hover:text-blue-500">Help Center</a></li>
          <li><a href="#Get-started" className="hover:text-blue-500">Get started</a></li>
        </ul>
      </nav>

      {/* Actions buttons */}
      <div className="flex justify-center md:justify-end items-center gap-6 w-full md:w-auto">
        <a href="#login" className="text-lg font-bold font-inter text-[#4532FC] hover:text-blue-500">Login</a>
        <a href="#Demo" className="px-4 py-2 bg-[#4532FC] rounded-2xl font-inter text-white hover:bg-blue-700">
          Request a demo
        </a>
      </div>
    </header>
  );
}
