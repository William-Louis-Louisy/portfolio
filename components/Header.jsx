import Btn from "./Btn";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <div className="h-14 bg-deepBlack py-1 px-6 flex flex-row items-center justify-between">
        <Logo />
        <div className="flex flex-row gap-4">
          <Btn content="ABOUT ME" href="#" />
          <Btn content="PROJECTS" href="#" />
          <Btn content="RESUME" href="#" />
        </div>
      </div>
    </>
  );
}
