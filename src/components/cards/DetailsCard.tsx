import React from "react";
export interface I_DetailsCardInfo {
  icon: string;
  title: string;
  message: string;
}
const DetailsCard: React.FC<I_DetailsCardInfo> = ({ icon, message, title }) => {
  return (
    <section className="p-3 w-full md:w-[450px]">
      <div className="flex relative">
        <img src={icon} alt="" className="h-16 w-16" />
        <p className="font-bold text-xl absolute left-10 top-4 ">{title}</p>
      </div>
      <p className="font-light text-sm ml-7">{message}</p>
    </section>
  );
};

export default DetailsCard;
