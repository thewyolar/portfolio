export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
  description?: string;
};

const projects: Project[] = [
  {
    title: "UPAS. Backend",
    techs: ["Java", "Spring Boot", "Docker"],
    link: "https://github.com/thewyolar/esap",
    description: "Backend for Unified Polyclinic Automation System",
  },
  {
    title: "UPAS. Application",
    techs: ["Kotlin", "Jetpack Compose",],
    link: "/",
    isComingSoon: true,
    description: "Mobile client for Unified Polyclinic Automation System (UPAS)",
  },
  {
    title: "PasteShare",
    techs: ["Java", "ReactJS (NextJS)", "TypeScript"],
    link: "/",
    isComingSoon: true,
    description: "Simple clone of the pastebin.com",
  },
];

export default projects;
