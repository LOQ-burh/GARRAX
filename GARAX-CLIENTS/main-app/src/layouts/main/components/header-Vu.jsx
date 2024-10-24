import Menu from "../../../assets/iconMenu.svg";
import iconMenu from "../../../assets/GRAX.svg";
import iconPhone from "../../../assets/noun-display-big-notch-4064633.svg";
import { Link } from "react-router-dom";


function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center border-b-gray-100 border-2 p-4 md:p-7 bg-white shadow-md">
      {/* Left Section: Menu and Phone */}
      <div className="flex items-center space-x-6">
        {/* Menu Button */}
        <button className="flex items-center">
          <img src={Menu} className="w-[20px] h-[20px]" alt="Menu Icon" />
          <span className="pl-2 text-sm text-black">Menu</span>
        </button>

        {/* Phone Info */}
        <div className="flex items-center">
          <img src={iconPhone} className="w-[20px] h-[20px]" alt="Phone Icon" />
          <span className="text-sm pl-1 text-black">+84 876 787 946</span>
        </div>
      </div>

      {/* Logo Section */}
      <div className="mt-4 md:mr-24 md:mt-0">
        <img src={iconMenu} alt="Logo" className="w-[100px] md:w-auto" />
      </div>

      {/* Right Section: Sign In */}
      <div className="mt-4 md:mt-0">
        <Link to="/auth/login">
          <button className="border border-gray-300 text-black rounded-full px-4 py-2 flex items-center">
            <i className="fas fa-user mr-2"></i> Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
