import React from "react";
import {SiJetpackcompose, SiKotlin, SiSpring, SiTypescript, SiAndroid} from "react-icons/si";
import {FaDatabase, FaDocker, FaJava} from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb";

type Props = {
  tag: string;
};

const names: Record<string, React.ReactNode> = {
  "Java": <FaJava color="white" className="h-5" />,
  "Kotlin": <SiKotlin color="white" className="h-5" />,
  "PostgreSQL": <FaDatabase color="white" className="h-5" />,
  "Docker": <FaDocker color="white" className="h-5"/>,
  "TypeScript": <SiTypescript color="white" className="h-5" />,
  "Android": <SiAndroid color="white" className="h-5" />,
  "Spring Boot": <SiSpring color="white" className="h-5" />,
  "Jetpack Compose": <SiJetpackcompose color="white" className="h-5" />,
  "Next JS": <TbBrandNextjs color="white" className="h-5" />
};

const ProjectTag: React.FC<Props> = ({ tag }) => {
  return (
    <span className="tag">
      {names[tag] && names[tag]}
      <p className="text-slate-400 text-base">{tag}</p>
    </span>
  );
};

export default ProjectTag;