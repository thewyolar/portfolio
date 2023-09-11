import type { NextComponentType } from "next";
import ProjectCard from "./ProjectCard.section";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-5">

        <ProjectCard
          title={"UPAS. Backend"}
          techs={["Java", "Spring Boot", "Docker"]}
          description={"Backend for Unified Polyclinic Automation System"}
          link={"https://github.com/thewyolar/esap"}
          isComingSoon={false} />

        <ProjectCard
          title={"UPAS. Application"}
          techs={["Kotlin", "Jetpack Compose"]}
          description={"Mobile client for Unified Polyclinic Automation System"}
          isComingSoon={true} />

        <ProjectCard
          title={"PasteShare"}
          description={"Simple clone of the pastebin.com"}
          isComingSoon={true}
          techs={["Java", "Spring Boot", "ReactJS(NextJS)", "TypeScript"]} />

      </div>
    </div>
  );
};

export default Projects;
