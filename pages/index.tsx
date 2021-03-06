import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import DIVIDER_DEKSTOP from "/public/pattern-divider-desktop.svg";
import DIVIDER_MOBILE from "/public/pattern-divider-mobile.svg";

import DICE from "/public/icon-dice.svg";
import useWindowDimensions from "../utils/hooks/useWindowDimension";

export default function Home() {
  const [adviceId, setAdviceId] = useState(1337);
  const [advice, setAdvice] = useState(
    "Mike van Peeren is a cool dude and great frontend developer"
  );

  const { width } = useWindowDimensions();

  const rollTheDiceBaby = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setAdviceId(data?.slip?.id);
        setAdvice(data?.slip?.advice);
      });
  };

  const isMobile = width && width < 768;

  return (
    <div className="px-2">
      <Head>
        <title>Advice Generator</title>
      </Head>
      <main className="py-2 flex flex-1 flex-col justify-center items-center min-h-screen">
        <div className="relative flex flex-col text-center items-center justify-center w-full relative">
          <div className="bg-darkGrayBlue shadow-lg rounded-lg flex flex-col text-center items-center justify-center md:w-3/6 lg:w-3/6 xl:w-2/6 relative mx-4">
            <h1 className="text-neon text-xs tracking-[4px] mt-10">
              {`ADVICE #${adviceId}`}
            </h1>
            <p className="mt-10 text-3xl text-lightCyan tracking-[-0.3px] w-3/4">
              {`“${advice}”`}
            </p>

            <div className="mt-10 mb-20 mx-6">
              <Image src={isMobile ? DIVIDER_MOBILE : DIVIDER_DEKSTOP} alt="" />
            </div>
            <button
              className="absolute -bottom-10 bg-neon rounded-full w-20 h-20 flex items-center justify-center flex-col hover:shadow-cyan"
              onClick={() => {
                rollTheDiceBaby();
              }}
              aria-label="Roll the dice"
            >
              <Image src={DICE} alt="" />
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
