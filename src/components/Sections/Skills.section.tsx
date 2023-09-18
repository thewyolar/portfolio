import { BsArrowRightShort } from "react-icons/bs";
import {useTranslation} from "next-i18next";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="my-16 px-3 font-sen text-white" id="skills">
      <p className="text-3xl font-bold text-white">{t('skills.title')}</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">{t('skills.java.name')}</span>
          &nbsp;{t('skills.java.description')}
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">{t('skills.spring.name')}</span>
          &nbsp;{t('skills.spring.description')}
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">{t('skills.postgresql.name')}</span>
          &nbsp;{t('skills.postgresql.description')}
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">{t('skills.docker.name')}</span>
          &nbsp;{t('skills.docker.description')}
        </p>
      </div>

      <p className="text-lg font-medium text-slate-300">
        {t('skills.more.common')} <span className="text-white">{t('skills.more.javascript')}</span>,{" "}
        <span className="text-white">{t('skills.more.reactjs')}</span>,{" "}
        <span className="text-white">{t('skills.more.nextjs')}</span>
      </p>
    </div>
  );
};

export default Skills;
