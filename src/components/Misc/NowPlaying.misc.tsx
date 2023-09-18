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

  return (
    <div className="font-sen mb-8 p-4 bg-gray-800 rounded-md">
      <div className="flex items-center gap-x-4">
        <div className="relative w-8 h-8">
          <Image
            src="/assets/spotify.svg"
            alt="spotify icon"
            layout="fill"
          />
        </div>
        {data?.isPlaying ? (
          <Link href={data?.songUrl} passHref legacyBehavior>
            <div className="cursor-pointer">
              <p className="text-white text-base truncate">
                {t('spotify.yes')}{" "}
                <span className="text-green-500">{data?.title}</span>
              </p>
              <p className="text-gray-400 text-sm">
                {t('spotify.by')} {data?.artist}
              </p>
            </div>
          </Link>
        ) : (
          <p className="text-white">{t('spotify.no')}</p>
        )}
      </div>
    </div>
  );
};

export default SpotifyCard;
