import React from "react";
export interface I_SkillData {
  icon: string;
  title: string;
}
const SkillCard: React.FC<I_SkillData> = ({ icon, title }) => {
  return (
    <div className="w-20 h-24 flex flex-col">
      <img src={icon} alt="" />
     <p className="uppercase">{title}</p>
    </div>
  );
};

export default SkillCard;
