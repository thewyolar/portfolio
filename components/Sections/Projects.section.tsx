import type { NextComponentType } from "next";
import ProjectCard from "./ProjectCard.section";
import {useTranslation} from "next-i18next";

const Projects: NextComponentType = () => {
  const { t } = useTranslation();

  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">{t('projects.title')}</p>
      <div className="my-8 flex flex-col items-center justify-center gap-5">

        <ProjectCard
          title={t('projects.esap.backend.title')}
          techs={t('projects.esap.backend.techs')}
          description={t('projects.esap.backend.description')}
          link={t('projects.esap.backend.link')}
          isComingSoon={JSON.parse(t('projects.esap.backend.isComingSoon'))} />

        <ProjectCard
          title={t('projects.esap.application.title')}
          techs={t('projects.esap.application.techs')}
          description={t('projects.esap.application.description')}
          isComingSoon={JSON.parse(t('projects.esap.application.isComingSoon'))} />

        <ProjectCard
          title={t('projects.pasteshare.title')}
          techs={t('projects.pasteshare.techs')}
          description={t('projects.pasteshare.description')}
          isComingSoon={JSON.parse(t('projects.pasteshare.isComingSoon'))} />

      </div>
    </div>
  );
};

export default Projects;
