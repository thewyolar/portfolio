import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import {useTranslation} from "next-i18next";
import {mdiPaperclip} from "@mdi/js";
import Icon from "@mdi/react";

const About: NextComponentType = () => {
  const { t } = useTranslation();

  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">{t('about.greetings')}</p>
        <p className="mt-1 text-lg text-gray-300">
          {t('about.description1')}
        </p>

        <p className="mt-4 text-gray-400">
          {t('about.description2')} <br />
          {t('about.description3')}
        </p>

        <Link
          href="/assets/docs/cv.pdf"
          passHref
          className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
          target="_blank"
          rel="noopener noreferrer">
            <span className="flex flex-row">
              <Icon path={mdiPaperclip} size={1} />
              {t('about.cv')}
            </span>
            <HiOutlineArrowNarrowRight />
        </Link>
      </div>

      <div className="hidden custom:block">
        <Image
          src="/assets/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
    </div>
  );
};

export default About;
