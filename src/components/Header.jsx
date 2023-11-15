import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo2.png";


import { housesData } from "../data";

const Header = () => {
  const moduleHouse = housesData.find((house) => house.type === "Module");
  const villaHouse = housesData.find((house) => house.type === "Villa");
  return (
    <header className="py-3 mb-3 border-b bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="logo modulhome" />
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            className="text-white hover:text-violet-600 transition " 
            to={`/property/${moduleHouse ? moduleHouse.id : ""}`}
            >
            Modules
          </Link>
          <Link
            className=" bg-white text-violet hover:bg-violet-800 px-4 py-3 rounded-lg transition "
            to={`/property/${villaHouse ? villaHouse.id : ""}`}
          >
            Villas
          </Link>
        </div>
      </div>
    </header>
    
  );
};

export default Header;
