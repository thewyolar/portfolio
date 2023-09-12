import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";
import {BsTelegram} from "react-icons/bs";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon
          icon={<AiOutlineGithub />}
          url="https://github.com/thewyolar" />

        <Icon
          icon={<BsTelegram />}
          url="https://t.me/thewyolar" />

        <Icon
          icon={<MdEmail />}
          url="mailto:thewyolar@gmail.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/31anzfysecowiu62ocqeqceusas4" />
      </div>
    </div>
  );
};

export default Contact;
