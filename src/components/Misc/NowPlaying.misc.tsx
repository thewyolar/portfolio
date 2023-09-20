import type { NextComponentType } from "next";
import type { NowPlayingSong } from "../../@types/now-playing-song.type";

import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";
import {useTranslation} from "next-i18next";
import {Audio} from "react-loader-spinner";

const SpotifyCard: NextComponentType = () => {
  const { t } = useTranslation();
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher, {
    refreshInterval: 1000,
  });

  return (
    <div className="font-sen mb-8 p-4 bg-gray-800 rounded-md">
      <div className="flex items-center gap-x-4">
        {data?.isPlaying ? (
          <>
            <div className="relative w-8 h-8">
              <Audio
                height="32"
                width="32"
                color="rgb(34 197 94)"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true} />
            </div>
            <Link href={data?.songUrl} passHref>
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
          </>
        ) : (
          <>
            <div className="relative w-8 h-8">
              <Image
                src="/assets/spotify.svg"
                alt="spotify icon"
                fill
                sizes="32" />
            </div>
            <p className="text-white">{t('spotify.no')}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SpotifyCard;
