interface SideBarProps {
  links: SideBarLinks[];
}

interface SideBarLinks {
  href: string;
  linkText: string;
}

const SideBar = ({ links }: SideBarProps) => {
  return (
    <>
<<<<<<< HEAD
      <div className="fixed right-0 top-[0px] bg-[#080809] border w-[150px] h-[60vh] pt-[50px] overflow-auto rounded-bl-[8px] rounded-l-[8px] ">
=======
      <div className="fixed right-0 top-[70px] bg-[#080809] border w-[150px] h-[60vh] pt-[50px] overflow-auto rounded-bl-[8px] rounded-l-[8px] ">
>>>>>>> 42b42bc (React website Remake)
        <div className="flex flex-col items-end gap-[70px] p-[20px] ">
          {links.map((link, index) => (
            <div className="">
              #
              <a key={index} href={link.href}>
                {link.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
