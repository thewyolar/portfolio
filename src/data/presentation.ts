type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "thewyolar@gmail.com",
  title: "Hi, I’m Alexey 👋",
  // profile: "/profile.webp",
  description:
    "I am a Java and Kotlin developer from Russia with a *year* of experience. Currently actively studying *Spring* and *Jetpack Compose*.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/thewyolar",
    },
    {
      label: "Telegram",
      link: "https://t.me/thewyolar"
    },
    {
      label: "CV",
      link: "/assets/cv.pdf"
    }
  ],
};

export default presentation;
