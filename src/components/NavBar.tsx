import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SideBar from "./SideBar";

gsap.registerPlugin(useGSAP); // register the hook to avoid React version discrepancies

interface NavStateProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebarOpen: boolean;
}

export default function NavBar({
  setIsSidebarOpen,
  isSidebarOpen,
}: NavStateProps) {
  const sideBarBtnRef = useRef<HTMLButtonElement>(null);
  const sideBarRef = useRef<HTMLDivElement>(null);

  const links = [
    { text: "home", href: "https://cinny.neocities.org" },
    { text: "github", href: "https://www.github.com/cinnyamon" },
  ];

  return (
    <nav className="flex place-content-around items-center h-[55px] border-t-indigo-700 border-t fixed w-[100%] ">
      <div className="">
        {links.map((link, index) => (
          <p key={index} className="text-[14px]">
            {" "}
            &lt;&nbsp;
            <a className="text-[12px] text-amber-400" href={link.href}>
              {link.text}
            </a>
            &nbsp;&gt;
          </p>
        ))}
      </div>
      <button
        ref={sideBarBtnRef}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          handleNavAnim(
            sideBarBtnRef,
            sideBarRef,
            setIsSidebarOpen,
            isSidebarOpen
          );
        }}
        className="open-btn fixed right-[20px] top-[17px] z-10 cursor-pointer"
      >
        &lt;&gt;
      </button>
      <SideBar ref={sideBarRef}></SideBar>
    </nav>
  );
}

function handleNavAnim(
  sideBarBtnRef: React.RefObject<HTMLButtonElement | null>,
  sideBarRef: React.RefObject<HTMLDivElement | null>,
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  isSidebarOpen: boolean
) {
  if (!sideBarBtnRef.current) return;

  if (!isSidebarOpen) {
    console.log("will be opening");
    gsap.to(sideBarBtnRef.current, {
      x: -90,
      rotation: 180,
      duration: 1,
    });
    gsap.to(sideBarRef.current, {
      x: -150,
      width: 150,
      duration: 1,
    });
  } else {
    console.log("will be closing");
    gsap.to(sideBarBtnRef.current, {
      x: 0,
      rotation: 0,
      duration: 1,
    });
    gsap.to(sideBarRef.current, {
      x: 0,
      duration: 1,
    });
  }
  setIsSidebarOpen(!isSidebarOpen);
}
