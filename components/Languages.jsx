import Image from "next/image";
import html from "../assets/icons/html.png";
import css from "../assets/icons/css.png";
import js from "../assets/icons/js.png";
import react from "../assets/icons/react.png";
import next from "../assets/icons/next.png";
import nodejs from "../assets/icons/nodejs.png";
import sql from "../assets/icons/sql.png";

import React from "react";

export default function Languages() {
  return (
    <div className="bg-deepBlack w-fit h-fit p-8 lg:p-0 lg:w-9/12 lg:h-24 mt-12 rounded-xl lg:rounded-full xl:ounded-full flex flex-wrap lg:flex-row xl:flex-row justify-center items-center gap-4">
      <div className="flex justify-center items-center rounded-full hover:scale-110 duration-500 ease-in-out shadow-xl hover:shadow-pineTree">
        <Image src={html} alt="HTML logo" width={64} height={64} />
      </div>
      <div className="flex justify-center items-center rounded-full hover:scale-110 duration-500 ease-in-out shadow-xl hover:shadow-pineTree">
        <Image src={css} alt="CSS logo" width={64} height={64} />
      </div>
      <div className="flex justify-center items-center hover:scale-110 duration-500 ease-in-out overflow-hidden shadow-xl hover:shadow-pineTree">
        <Image src={js} alt="JS logo" width={64} height={64} />
      </div>
      <div className="flex justify-center items-center rounded-full hover:scale-110 duration-500 ease-in-out overflow-hidden shadow-xl hover:shadow-pineTree">
        <Image src={react} alt="React logo" width={64} height={64} />
      </div>
      <div className="flex justify-center items-center rounded-full hover:scale-110 duration-500 ease-in-out overflow-hidden shadow-xl hover:shadow-pineTree">
        <Image src={next} alt="Next logo" width={64} height={64} />
      </div>
      <br />
      <div className="flex justify-center items-center rounded-full hover:scale-110 duration-500 ease-in-out overflow-hidden shadow-xl hover:shadow-pineTree">
        <Image src={nodejs} alt="Nodejs logo" width={64} height={64} />
      </div>
      <div className="flex justify-center items-center hover:scale-110 duration-500 ease-in-out overflow-hidden shadow-xl hover:shadow-pineTree">
        <Image src={sql} alt="SQL logo" width={64} height={64} />
      </div>
    </div>
  );
}
