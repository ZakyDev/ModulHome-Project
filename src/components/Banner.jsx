import React from "react";
import Image from "../assets/img/house-banner.png";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-10 xl:mb-26 ">
      <div className="flex flex-col lg:flex-row">
        <div className=" lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 ">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6 ">
            <span className=" text-green-800 ">ModulHome</span> Maison <span className=" text-violet-600 ">Modulaire</span>.
          </h1>
          <p className="max-w-[480px] mb-8 ">
            Nos conteneurs réaménagés en habitations modulables sont durables, autonomes et économes. 
            Nos modules sont parfaitement adaptés pour votre résidence, bureaux ou locaux administratifs, évènementiels et bien d'autres.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end ">
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
