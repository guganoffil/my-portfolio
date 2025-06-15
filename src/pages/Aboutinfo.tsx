import React from "react";
import seperator from '../assets/images/separator.png'
import develop from '../assets/images/design.png'
import design from '../assets/images/development.png'
import maintanance from '../assets/images/maintenance.png'
import DetailsCard from "../components/cards/DetailsCard";
const Aboutinfo: React.FC = () => {
  return (
    <>
      <section className="bg-[#D7D7D7] p-10 flex flex-col items-center">
        <p className="uppercase border-4 border-[#000000] p-3 font-bold text-xl">
          About Me
        </p>
        <div className="text-[#050505] font-normal text-xs text-center mt-4 max-w-lg">
          I’m passionate about clean code, intuitive UI/UX, and continuous
          learning. I’ve attached my resume below for your review, and I’d love
          to connect and explore any opportunities you might have.
        </div>
      </section>
      <section className="bg-[#D7D7D7] p-4 flex flex-col items-center">
        <p className="uppercase border-r-2 border-l-2 border-[#000000] p-3 font-semibold text-base">
          Explore More
        </p>
        <img src={seperator} alt="" className="my-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center py-10">
          <DetailsCard
            icon={design}
            title="Design"
            message="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
          />
          <DetailsCard
            icon={develop}
            title="Development"
            message="I can develop the application and do RESTful API integration as well."
          />
          <DetailsCard
            icon={maintanance}
            title="Maintenance"
            message="I can maintain the site and fix any bugs that may arise."
          />
        </div>
        <img src={seperator} alt="" className="my-10 text-center" />
      </section>
      
    </>
  );
};

export default Aboutinfo;
