interface NavLinks {
  href: string;
  text: string;
}

interface NavProps {
  links: NavLinks[];
}

const NavBar = ({ links }: NavProps) => {
  return (
    <nav>
      <div className="flex place-content-around items-center text-white h-[55px] border-t-indigo-700 border-t fixed w-[100%]">
        {links.map((link, index) => (
          <p key={index} className="text-[14px]">
            {" "}
            &lt;
            <a className="text-[12px] text-amber-400" href={link.href}>
              {link.text}
            </a>
            &gt;
          </p>
        ))}
      </div>
      <div className="open-btn fixed right-[20px] top-[17px]">&lt;&gt;</div>
    </nav>
  );
};

export default NavBar;
