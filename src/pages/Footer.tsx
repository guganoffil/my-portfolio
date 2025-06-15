import React from "react";
import ARROW from "../assets/icons/up-arrow.svg";
import WHATSAPP from "../assets/images/whatsapp.png";
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/918098707177", "_blank");
  };
  return (
    <section className="bg-[#1A1A1A] w-full p-10 text-white flex justify-center items-center  relative">
      <div className="flex flex-col space-y-8 items-center">
        <div
          className="cursor-pointer flex flex-col  items-center"
          onClick={scrollToTop}
        >
          <img src={ARROW} alt="" />
          BACK TO TOP
        </div>
        <p className="text-lg font-normal leading-2 ">
          @2025 All Rights Reserved
        </p>
      </div>
      <button
        type="button"
        onClick={handleWhatsAppClick}
        className=" cursor-pointer absolute bottom-15 right-5"
      >
        <img src={WHATSAPP} alt="" className="h-10 w-10" />
      </button>
    </section>
  );
};

export default Footer;
