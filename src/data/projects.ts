export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Unified Polyclinic Automation System. Backend",
    techs: ["Java", "Spring Boot", "Docker"],
    link: "https://github.com/thewyolar/esap",
  },
  {
    title: "Unified Polyclinic Automation System. Application",
    techs: ["Kotlin", "Jetpack Compose",],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "PasteShare",
    techs: ["Java", "ReactJS (NextJS)", "TypeScript"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
