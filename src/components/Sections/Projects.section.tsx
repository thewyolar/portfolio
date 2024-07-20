import type { NextComponentType } from "next";
import ProjectCard from "./ProjectCard.section";
import {useTranslation} from "next-i18next";
import React from "react";

type Project = {
  title: string;
  tags: string[];
  link?: string;
  description: string;
  isComingSoon: boolean;
}

const Projects: NextComponentType = () => {
  const { t } = useTranslation();

  const data: Project[] = Object.values(t('projects.data', { returnObjects: true })).map((project: Project) => ({
    title: project.title,
    tags: project.tags,
    description: project.description,
    link: project.link,
    isComingSoon: project.isComingSoon,
  }));

  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <div className="flex items-center">
        <p className="text-3xl font-bold text-white">{t('projects.title')}</p>
        <div className="flex-grow border-t border-white ml-4"></div>
      </div>

      <p className="mt-4 text-gray-400">{t('projects.desc')}</p>
      <div className="my-8 flex flex-col items-center justify-center gap-5">
        {
          data.map((project) =>
            <ProjectCard
              key={project.title}
              title={project.title}
              tags={project.tags}
              description={project.description}
              link={project.link}
              isComingSoon={project.isComingSoon} />
          )
        }
      </div>
    </div>
  );
};

export default Projects;
