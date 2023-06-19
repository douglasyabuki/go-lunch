import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import plateIcon from "public/g.svg"

export interface AuthProps {}

export default function Authentication(props: AuthProps) {
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="min-h-screen relative group">
      <Image
        src="/background.jpg"
        alt="Picture from Lydie on Unsplash"
        fill={true}
        className="opacity-100"
      />
      <div
        className={`z-100 absolute flex flex-col items-center justify-center w-screen min-h-full ${
          !animate ? `backdrop:blur-none` : `backdrop-blur-[3px]`
        } delay-200 transition-all duration-400 ease-out`}
      >
        <div className="flex text-xl text-not-so-white items-center align-middle">
          <Image src="/g.svg" alt='' fill={true} className="mr-1"/>
          <h1 className="text-not-so-white text-4xl font-extrabold mr-1">go</h1>
          <h1 className="text-primary-green text-4xl font-extrabold">lunch</h1>
        </div>
        <div
          className={`w-96 h-96 ${
            !animate ? `-translate-x-[5000px]` : `translate-x-0`
          } bg-background-div1 rounded-xl transition-transform duration-300 ease-out p-12 shadow-lg shadow-transparent-black`}
        >
          <Link href={"/"}>Home</Link>
        </div>
      </div>
    </div>
  );
}
