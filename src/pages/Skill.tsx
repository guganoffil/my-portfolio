import React from "react";
import SkillCard from "../components/cards/SkillCard";
import node from "../assets/images/nodeJs.png";
import ts from "../assets/images/typescript.png";
import html from "../assets/icons/html.svg";
import git from "../assets/icons/git.svg";
import js from "../assets/icons/js.svg";
import react from "../assets/icons/react.svg";
import angular from "../assets/icons/angular-icon.svg";
import tailwind from "../assets/icons/Tailwind CSS.svg";
import mongo from "../assets/icons/mongodb-icon.svg";
import css from "../assets/icons/css.svg";
import next from "../assets/icons/nextjs-icon.svg";
import vue from "../assets/icons/vue-js-com.svg";

const Skill: React.FC = () => {
  return (
    <div className="bg-[#D7D7D7] p-10 flex flex-col items-center">
      <p className="uppercase border-4 border-[#000000] p-3 font-bold text-xl">
        Skills
      </p>
      {/* Current Skills */}
      <p className="w-full md:min-w-4xl font-bold text-xl mt-4 uppercase">
        Using Now:
      </p>
      <div className="w-full max-w-screen-xl mx-auto space-y-3 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3 place-items-center">
        <SkillCard icon={html} title="HTML 5" />
        <SkillCard icon={css} title="CSS 3" />
        <SkillCard icon={js} title="Javascript" />
        <SkillCard icon={ts} title="TypeScript" />
        <SkillCard icon={react} title="React" />
        <SkillCard icon={angular} title="Angular" />
        <SkillCard icon={node} title="NodeJs" />
        <SkillCard icon={mongo} title="MongoDB" />
        <SkillCard icon={tailwind} title="Tailwind CSS" />
        <SkillCard icon={git} title="Git" />
      </div>

      <p className="w-full max-w-screen-xl mx-auto font-bold text-xl mt-10 uppercase p-3">
        Learnings:
      </p>

      <div className="w-full max-w-screen-xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-3 place-items-center">
        <SkillCard icon={next} title="Next Js" />
        <SkillCard icon={vue} title="Vue Js" />
      </div>
    </div>
  );
};

export default Skill;
