import type { NextPage } from "next";

import Image from "next/image";
import { useRouter } from "next/router";
import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

const ErrorPage: NextPage = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return <>
    <div className="flex min-h-screen min-w-full flex-col justify-center bg-[#fafdfe]">
      <Image
        src="/assets/404.svg"
        width="800"
        height="400"
        alt="404 illustration"
        style={{
          maxWidth: "100%",
          height: "auto"
        }} />

      <div className="flex w-full flex-col items-center justify-center">
        <p className="font-jost text-2xl font-bold text-gray-800 sm:text-3xl">
          {t('error.title')}
        </p>
        <p className="text-md text-center font-sen font-medium text-gray-700 sm:text-lg">
          {t('error.message1')} <br />
          {t('error.message2')}
        </p>

        <button
          className="text-md mt-4 rounded-md bg-purple-600 px-4 py-2 font-jost font-medium text-white duration-100 hover:bg-purple-500 hover:text-gray-100 sm:px-6 sm:py-3 sm:text-lg"
          onClick={() => router.push("/")}
        >
          {t('error.buttonText')}
        </button>
      </div>
    </div>
  </>;
};

export default ErrorPage;
