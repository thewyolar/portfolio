import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";
import {BsLinkedin, BsTelegram} from "react-icons/bs";
import {useTranslation} from "next-i18next";

const Contact: NextComponentType = () => {
  const { t } = useTranslation();

  return (
    <div className="px-3 font-sen" id="contact">
      <div className="flex items-center">
        <p className="text-3xl font-bold text-white">{t('contact.title')}</p>
        <div className="flex-grow border-t border-white ml-4"></div>
      </div>

      <p className="mt-4 text-gray-400">{t('contact.desc')}{' '}
        <a
          className="dark:text-white text-black transition-colors duration-500"
          href={`mailto:${t('contact.email')}`}
        >
          {t('contact.email')}
        </a>
      </p>
      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon
          icon={<AiOutlineGithub/>}
          url="https://github.com/thewyolar"/>

        <Icon
          icon={<BsTelegram />}
          url="https://t.me/thewyolar" />

        <Icon
          icon={<MdEmail />}
          url="mailto:thewyolar@gmail.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/31anzfysecowiu62ocqeqceusas4" />

        <Icon
          icon={<BsLinkedin />}
          url="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%BA%D0%B0%D1%80%D0%B0%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2-875014298/" />
      </div>
    </div>
  );
};

export default Contact;
