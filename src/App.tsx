import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import { GlobalNav } from "./GlobalNav";
import { GlobalNavContext } from "./GlobalNavContext";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSubNavOpen, setIsSubNavOpen] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      setIsNavOpen(!isNavOpen);
      setIsButtonDisabled(true);
      setTimeout(() => {
        setIsButtonDisabled(false);
      }, 600);
    }
  };

  return (
    <GlobalNavContext.Provider value={{ isNavOpen, isSubNavOpen }}>
      <div>
        <nav className="bg-[#161617cc] text-[#ffffffcc] h-12 fixed w-full top-0 left-0 right-0">
          <div className="flex h-full">
            <ul className="flex flex-1">
              <li className="flex-1">
                <a href="#" className="block w-max px-4 h-12">
                  <FaApple className="h-full" />
                </a>
              </li>
              <GlobalNav />
              <li>
                <a href="#" className="block w-max px-4 h-12">
                  <BsSearch className="h-full" />
                </a>
              </li>
              <li>
                <a href="#" className="block w-max px-4 h-12">
                  <IoBagOutline className="h-full" />
                </a>
              </li>
            </ul>
            <div className="z-10">
              <button
                className="block w-max px-4 h-12"
                aria-label="Menu"
                onClick={handleButtonClick}
              >
                <HiOutlineMenuAlt4 className="h-full" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </GlobalNavContext.Provider>
  );
}

export default App;
