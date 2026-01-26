import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

export default function Navbar() {
  return (
    <nav className="bg-white/20 backdrop-blur-md shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="CommunityApp Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="text-xl font-bold text-teal-600">
            CommunityApp
          </span>
        </Link>

        {/* Nav Links */}
        <div className="space-x-4">
          <Link to="/" className="text-blue-500 hover:text-teal-300 transition">
            Home
          </Link>
          <Link
            to="/profile"
            className="text-blue-500 hover:text-teal-300 transition"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}
