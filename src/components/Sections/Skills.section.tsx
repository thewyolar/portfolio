import { BsArrowRightShort } from "react-icons/bs";
import {useTranslation} from "next-i18next";

type Skill = {
  name: string;
  description: string;
}

const Skills = () => {
  const { t } = useTranslation();
  const more: string[] = Object.values(t('skills.more.data', { returnObjects: true })).map(value => String(value));
  const data: Skill[] = Object.values(t('skills.data', { returnObjects: true })).map((skill: Skill) => ({
    name: skill.name,
    description: skill.description,
  }));

  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <div className="flex items-center">
        <p className="text-3xl font-bold text-white">{t('skills.title')}</p>
        <div className="flex-grow border-t border-white ml-4"></div>
      </div>

      <div className="text-md my-8 flex font-medium md:text-xl custom:text-lg">
        {data.map((skill: Skill) => (
          <div key={skill.name}
               className="flex flex-row items-center border-gray-500 py-1 text-slate-300">
            <span
              className="border border-lightText rounded-lg me-3 px-3 py-1"
              key={skill.name}
            >
              {skill.name}
            </span>
          </div>
        ))}
      </div>

      <p className="text-lg font-medium text-slate-300">
        {t('skills.more.common')}{" "}
        {more.map((skill: string, index: number) => (
          <span key={skill} className="text-white">{skill}{index !== more.length - 1 && ", "}</span>
        ))}
      </p>
    </div>
  );
};

export default Skills;
