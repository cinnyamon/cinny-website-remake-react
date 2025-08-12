// const SideBar = forwardRef<HTMLElement, SidebarProps>(){ links }: SideBarProps) => {

import { forwardRef } from "react";

const SideBar = forwardRef<HTMLDivElement>((_props, ref) => {
  const linksSidebar = [
    { href: "#", linkText: "About me" },
    { href: "@", linkText: "Links" },
    { href: "!", linkText: "Fav artist" },
    { href: "^", linkText: "Meow" },
    { href: "#", linkText: "About me" },
    { href: "@", linkText: "Links" },
    { href: "!", linkText: "Fav artist" },
    { href: "^", linkText: "Meow" },
  ];
  return (
    <>
      <div
        ref={ref}
        className=" fixed w-[150px] right-[-150px] bg-[#080809] border h-[60vh] pt-[50px] overflow-auto rounded-bl-[8px] rounded-l-[8px] border-indigo-700 "
      >
        <div className="flex flex-col items-end gap-[20px] p-[20px] ">
          {linksSidebar.map((link, index) => (
            <div key={index} className="">
              #&nbsp;
              <a key={index} href={link.href}>
                {link.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default SideBar;
