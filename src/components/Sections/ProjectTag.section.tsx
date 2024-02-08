import React from "react";
import Icon from "@mdi/react";
import {mdiDatabase, mdiDocker, mdiLanguageJava, mdiLanguageKotlin, mdiLanguageTypescript} from "@mdi/js";

type Props = {
  tag: string;
};

const names = {
  "Java": mdiLanguageJava,
  "Kotlin": mdiLanguageKotlin,
  "PostgreSQL": mdiDatabase,
  "Docker": mdiDocker,
  "TypeScript": mdiLanguageTypescript,
};

const ProjectTag: React.FC<Props> = ({tag}) => {
  return (
    <span className="tag">
      {names[tag] && <Icon path={names[tag]} className="h-5"/>}
      <p className="text-slate-400 text-base">{tag}</p>
    </span>
  )
}

export default ProjectTag;