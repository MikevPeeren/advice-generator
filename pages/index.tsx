import Head from "next/head";
import Image from "next/image";

import DIVIDER_DEKSTOP from "/public/pattern-divider-desktop.svg";
import DIVIDER_MOBILE from "/public/pattern-divider-mobile.svg";

export default function Home() {
  return (
    <div className="px-2">
      <Head>
        <title>Advice Generator</title>
        <meta name="description" content="Generated by Mike van Peeren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="py-2 flex flex-1 flex-col justify-center items-center min-h-screen">
        <div className="bg-darkGrayBlue shadow-lg  rounded-lg flex flex-col text-center items-center justify-center w-2/6">
          <h1 className="text-neon text-xs tracking-[4px] mt-10">
            ADVICE #117
          </h1>
          <p className="mt-10 text-3xl text-lightCyan tracking-[-0.3px] w-3/4">
            “It is easy to sit up and take notice, what&apos;s difficult is
            getting up and taking action.”
          </p>

          <div className="my-10">
            <Image src={DIVIDER_DEKSTOP} alt="" />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
