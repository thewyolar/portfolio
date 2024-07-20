import React from 'react';
import {useTranslation} from "next-i18next";
import ProjectTag from "./ProjectTag.section";

type Props = {
  title: string;
  tags: string[];
  link?: string;
  description: string;
  isComingSoon: boolean;
};

const ProjectCard: React.FC<Props> = ({title, tags, link, description, isComingSoon}) => {
  const { t } = useTranslation();

  return (
    <>
      {isComingSoon ? (
        <div className="group flex w-full flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-4 sm:flex-col md:flex-row">
              <p className="text-white text-xl">{title}</p>
              <div className="flex flex-wrap sm:flex-row sm:justify-between">
                {tags.map((tag: string, index: number) => <ProjectTag key={index} tag={tag} />)}
              </div>
            </div>
            <p className="text-slate-400">{description}</p>
          </div>

          <p className="w-fit rounded-md bg-neutral-800 text-white text-lg px-4 py-1">{t('projects.soon')}</p>
        </div>
      ) : (
        <>
          {link &&
              <a
                  className="group flex w-full cursor-pointer flex-col justify-between gap-2 rounded-md border border-neutral-700 p-4 transition-all duration-300 hover:-translate-y-2 hover:border-neutral-400 md:flex-row md:items-center"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
              >
                  <div className="flex flex-col gap-2">
                      <div className="flex flex-wrap gap-4 sm:flex-col md:flex-row">
                          <p className="text-white text-xl">{title}</p>
                          <div className="flex flex-wrap sm:flex-row sm:justify-between">
                            {tags.map((tag) => <ProjectTag key={title} tag={tag} />)}
                          </div>
                      </div>
                      <p className="text-slate-400">{description}</p>
                  </div>

                  <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      className="transition-all duration-300 group-hover:translate-x-1"
                  >
                      <path
                          d="M5.25 12.75L12.75 5.25"
                          stroke="#999999"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                      <path
                          d="M5.25 5.25H12.75V12.75"
                          stroke="#999999"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                      />
                  </svg>
              </a>
          }
        </>
      )}
    </>
  );
};

export default ProjectCard;