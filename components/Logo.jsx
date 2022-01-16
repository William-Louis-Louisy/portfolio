import Link from "next/link";

export default function Logo() {
  return (
    <>
      <Link passHref href="/">
        <div className="h-12 w-20 text-emphasis font-black flex flex-row justify-center items-center text-5xl cursor-pointer">
          <p>W</p>
          <p>L</p>
          <p>L</p>
        </div>
      </Link>
    </>
  );
}
