import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {

  FRONTEND_SKILL,
  Technical_SKILL ,
  

} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-12 sm:py-16 md:py-20 px-4"
    >
      <SkillText />

      {/* Technical Skills */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-4 md:gap-5 items-center max-w-6xl">
        {Technical_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={"width" in skill ? skill.width : 80}
            height={"height" in skill ? skill.height : 80}
            index={i}
          />
        ))}
      </div>

      {/* Frontend Skills */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-3 sm:gap-4 md:gap-5 items-center max-w-6xl">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={"width" in skill ? skill.width : 80}
            height={"height" in skill ? skill.height : 80}
            index={i}
          />
        ))}
      </div>
    

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
