import Link from "next/link";
import React from "react";

export default function Btn({ content, href }) {
  return (
    <>
      <Link passHref href={href}>
        <div className="h-8 w-20 text-sm border-2 rounded-full flex justify-center items-center cursor-pointer text-whiteRabbit border-emphasis bg-deepBlack hover:bg-pineTree hover:text-emphasis focus:bg-pineTree focus:text-emphasis">
          <p>{content}</p>
        </div>
      </Link>
    </>
  );
}
