import type { NextComponentType } from "next";
import type { NowPlayingSong } from "../../@types/now-playing-song.type";

import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import {useTranslation} from "next-i18next";

const SpotifyCard: NextComponentType = () => {
  const { t } = useTranslation();
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  return <>
    <div className="font-sen mb-8 flex max-w-full flex-row items-center gap-x-2 rounded-md text-center text-lg text-gray-300">
      <Image
        src="/assets/spotify.svg"
        width="40"
        height="40"
        alt="spotify icon"
      />
      {data?.isPlaying ? (
          <Link href={data?.songUrl} passHref legacyBehavior>
            <p className="cursor-pointer truncate">
              {t('spotify.yes')}{" "}
              <span className="text-white">{data?.title}</span>.
            </p>
          </Link>
      ) : (
          <p>{t('spotify.no')}</p>
      )}
    </div>
  </>;
};

export default SpotifyCard;
