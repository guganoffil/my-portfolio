import React from "react";
import email from "../assets/icons/email.png";
import linkedIn from "../assets/icons/linkedin.png";
import mobile_email from "../assets/images/mobile-email.png";
import mobile_linkedIn from "../assets/images/mobile-linkedin.png";
import about from "../assets/images/Logo ITB.png";
import Gugan from '../assets/images/Gugan_Photo.png';
const Landing: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:gugans.info@gmail.com";
  };
  return (
    <>
      {/* <Topbar /> */}
      <div className="flex flex-col-reverse lg:h-[350px] lg:flex-row">
        {/* Info Section */}
        <section className="bg-[#D7D7D7] hidden md:flex md:w-full lg:w-1/2 p-36 flex-col items-center">
          {/* Info Section */}
          <div className="w-full">
            <p className="font-bold text-sm">Hi,I am</p>
            <h5 className="font-bold text-2xl mt-2">Gugan S</h5>
            <h3 className="font-extrabold text-[#909090]">
              Full Stack Developer
            </h3>
          </div>
          {/* Contact My Profile */}
          <section className="flex space-x-3 mt-1 w-full">
            <div
              className="w-6 bg-[#C4C4C4] p-1 rounded-md cursor-pointer"
              onClick={handleEmailClick}
            >
              <img src={email} alt="Email" />
            </div>
            <div className="w-6 bg-[#C4C4C4] p-1 rounded-md cursor-pointer">
              <a
                href="https://www.linkedin.com/in/gugan-s-38275819a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </div>
          </section>
        </section>

        {/* Image Section */}
        <section className="bg-[#000000] hidden w-full lg:w-1/2 md:flex justify-center">
          <img src={Gugan} alt="" className="w-fit h-full" />
        </section>
        {/* Small Screen only */}
        <section className="bg-black w-full md:hidden relative">
          <img
            src={Gugan}
            alt="Profile"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute bottom-0 w-full bg-black/80 px-6 py-8">
            <p className="text-white text-base font-semibold">Hi, I am</p>
            <h1 className="text-white text-3xl font-bold mt-1">Gugan S</h1>
            <div className="mt-2 inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded">
              Full Stack Developer
            </div>
          </div>

          {/* Right icons (optional if needed) */}

          <div className="absolute bottom-3 right-5 transform -translate-y-1/2 space-y-4">
            <a onClick={handleEmailClick}>
               <img src={mobile_email} alt="Email" className="mb-4" />
            </a>
            <a href="https://www.linkedin.com/in/gugan-s-38275819a/"
                target="_blank"
                rel="noopener noreferrer">
               <img src={mobile_linkedIn} alt="LinkedIn" />
            </a>
          </div>
        </section>
      </div>
      {/* My Info */}
      <section className="bg-[#1D1D1D] flex justify-between items-center p-3 text-white  ">
        <div className="flex-col">
          <h5 className="font-bold text-lg">Short Summary</h5>
          <p className="text-sm font-medium">
            I'm a Frontend Developer with 3 years of hands-on experience
            building responsive and scalable web applications using Angular.
            Recently, I’ve expanded into full-stack development with the MERN
            stack (MongoDB, Express.js, React, Node.js), and I’m eager to bring
            this broader skill set to a forward-thinking team. I’m passionate
            about clean code, intuitive UI/UX, and continuous learning.
          </p>
        </div>
        <img src={about} alt="" className="w-20 h-20 " />
      </section>
    </>
  );
};

export default Landing;
