import CloseButton from "../assets/window-close.svg";
import Minimize from "../assets/go-down.svg";
import Maximize from "../assets/go-up.svg";
import TermIcon from "../assets/utilities-terminal.svg";
import "./TermToolbarStyles/TerminalToolbar.css";
import { useRef /* useEffect */ /* useState */, useState } from "react";

export default function Terminal() {
  const userInputArr = [];
  const writableBoxRef = useRef<HTMLSpanElement>(null);
  const [numChildren, setNumChildren] = useState(0);
  const children = [];

  for (let i = 0; i < numChildren; i++) {
    children.push(<ChildComponent key={i} />);
  }

  const addComponent = () => {
    setNumChildren((count) => count + 1);
  };

  // const [fetchedRef, setFetchedRef] = useState<boolean>(false);
  // const [loading, setLoading] = useState<boolean>(false);
  // useEffect(() => {
  //   if (loading) setFetchedRef(!fetchedRef);
  //   setLoading(false);
  // }, [loading, fetchedRef]);

  // console.log({ fetchedRef, writableBoxRef: writableBoxRef.current });

  const focusTextBox = () => {
    if (writableBoxRef.current) {
      writableBoxRef.current.focus();
    }
  };

  return (
    <div className=" flex justify-center my-[40px] font-['Space_Mono','Courier','Monospace'] ">
      <div className=" w-[90%] max-w-[1000px] bg-gray-900 rounded-[8px] relative shadow-[0_0_50px_rgba(0,0,0,1)] ">
        <div className="term-titlebar flex justify-between items-center px-[8px] ">
          <div className="title-left flex items-center text-nowrap overflow-hidden">
            <img
              className="term-icon h-[18px] mx-[10px] overflow-visible "
              src={TermIcon}
              alt="Terminal Icon"
            ></img>
            <p className="term-title text-[16px] ">
              &#126;&#58;
              <a
                className="no-underline cursor-pointer"
                href="https://ohmyz.sh/"
              >
                <span className="zsh-text">zsh</span>
              </a>
              &#8213; Terminal
            </p>
          </div>
          <div className="title-right w-[95px] h-[15px] relative ">
            <img
              className="term-mini h-[16px] cursor-pointer absolute right-[68px] hover:bg-gray-600 hover:rounded-[4px] hover:right-[63px] hover:px-[5px]"
              src={Minimize}
              alt="Minimize Button"
            />
            <img
              className="term-maxi h-[16px] cursor-pointer absolute right-[38px] hover:bg-gray-600 hover:rounded-[4px] hover:right-[33px] hover:px-[5px]"
              src={Maximize}
              alt="Maximize Button"
            />
            <img
              className="term-close h-[16px] cursor-pointer absolute right-[8px] hover:bg-red-600 hover:rounded-[4px] hover:rounded-tr-[6px] hover:right-[3px] hover:px-[5px] "
              src={CloseButton}
              alt="Close Button"
            />
          </div>
        </div>
        <div className="term-tool flex flex-wrap py-[4px] bg-gray-700 ">
          <p className="toolbar">
            File <span className="tooltiptext ">Save Yoself</span>
          </p>
          <p className="toolbar">
            Edit <span className="tooltiptext ">Edit Yoself</span>
          </p>
          <p className="toolbar">
            View <span className="tooltiptext ">View Yoself</span>
          </p>
          <p className="toolbar">
            Bookmarks <span className="tooltiptext ">Bookmark Yoself</span>
          </p>
          <p className="toolbar">
            Plugins <span className="tooltiptext ">Plug Yoself</span>
          </p>
          <p className="toolbar">
            Settings <span className="tooltiptext ">Set Yoself</span>
          </p>
          <p className="toolbar">
            Help <span className="tooltiptext ">Kill Yoself</span>
          </p>
          {/* add more tooltips here */}
        </div>
        <div
          onClick={focusTextBox}
          className="term-main-body h-[400px] rounded-bl-[8px] rounded-br-[8px] bg-gray-950 overflow-auto flex flex-col p-[0_0_5px_10px] text-nowrap "
        >
          <div>{children}</div>
          <div className="flex items-center justify-stretch pt-[5px] border-none ">
            <span className="username rainbow">placeholder</span>
            <p>@</p>
            <span className="sitename">neocities</span>
            <p>:~&nbsp;</p>
            <span
              ref={writableBoxRef}
              onKeyDown={(e) => {
                logKeyPresses(e, writableBoxRef, userInputArr);
                if (e.key === "Enter") {
                  addComponent();
                }
              }}
              className="w-fit min-w-2 h-[18px] outline-none"
              id="writable-box"
              role="textbox"
              tabIndex={0}
              contentEditable={true}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* const shellInputContainer = (
  writableBoxRef: React.RefObject<HTMLSpanElement | null>,
  userInputArr: any,
  addComponent: any
) => {
  return (
    <div className="flex items-center justify-stretch pt-[5px] border-none ">
      <span className="username rainbow">placeholder</span>
      <p>@</p>
      <span className="sitename">neocities</span>
      <p>:~&nbsp;</p>
      <span
        ref={writableBoxRef}
        onKeyDown={(e) => {
          logKeyPresses(e, writableBoxRef, userInputArr, addComponent);
        }}
        className="w-fit min-w-2 h-[18px] outline-none"
        id="writable-box"
        role="textbox"
        tabIndex={0}
        contentEditable={true}
      ></span>
    </div>
  );
}; */

const logKeyPresses = (
  e: React.KeyboardEvent<HTMLSpanElement>,
  writableBoxRef: any,
  userInputArr: any
) => {
  if (e.key === "Enter") {
    userInputArr.push(writableBoxRef.current.innerText);
    console.log(userInputArr);
  }
};

const ChildComponent = () => {
  return (
    <div className="flex items-center justify-stretch pt-[5px] border-none ">
      <span className="username rainbow">placeholder</span>
      <p>@</p>
      <span className="sitename">neocities</span>
      <p>:~&nbsp;</p>
      <p> if it worked this was placed correctly</p>
    </div>
  );
};
