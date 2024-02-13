import { BiCart, BiMenu } from "react-icons/bi";
import "./style.css";
import avatar from "../../assets/images/image-avatar.png";
import { useEffect, useRef, useState } from "react";
import CartModal from "./cartModal";
export default function NavBar() {
  const [showMenu, setshowMenu] = useState(false);
  const [active, setActive] = useState("");
  const [showModalcart, SetshowModalcart] = useState(false);
  const ref = useRef<HTMLLIElement | null>(null);
  const navLink = [
    {
      id: 0,
      name: "Collection",
    },
    {
      id: 1,
      name: "Men",
    },
    {
      id: 2,
      name: "Women",
    },
    {
      id: 3,
      name: "About",
    },
    {
      id: 4,
      name: "Contact",
    },
  ];
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref?.current! && !ref.current.contains(e.target as Node)) {
        SetshowModalcart(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return (
    <div className="md:py-8 py-3 border-b-[1px] border-opacity-0 md:border-opacity-100 fixed z-[9999] right-0 w-full bg-white md:w-4/5 pr-4  md:mx-32   border-gray-300 items-center flex gap-2 md:gap-8">
      {" "}
      <button
        onClick={() => setshowMenu(true)}
        className="hamburger ml-2 md:hidden  ml-8"
      >
        <BiMenu size="40" />
      </button>
      <div className="logo text-3xl text-black/70 font-extrabold">sneakers</div>
      <div
        onClick={() => setshowMenu(false)}
        className={`fixed h-scereen w-screen md:hidden ${!showMenu ? " -translate-x-96 hidden" : "block"} bg-black/80 inset-0 `}
      ></div>
      <ul
        className={`navigation  p-[30px]
pt-20 md:p-0  fixed  md:static z-[9999] bottom-0 w-3/5 md:w-auto z-[9999999] top-0  ${showMenu ? "" : "-translate-x-[999px] block"} md:translate-x-0 bg-white  duration-300  bottom-0 h-screen md:h-auto left-30 flex flex-col md:flex-row md:mr-2  mr-auto gap-3`}
      >
        <button
          onClick={() => setshowMenu(false)}
          className="text-2xl  md:hidden font-bold text-gray-500 absolute top-3 left-8"
        >
          X
        </button>
        {navLink.map((link, i) => (
          <li
            onClick={() => setActive(link.name)}
            className={`${link.name == active ? "font-bold" : ""} font-semibold md:font-thin relative group  cursor-pointer text-gray-700`}
            key={i}
          >
            <div
              className={`bottom-active absolute h-[4px] ${link.name != active ? "hidden" : ""} w-full bg-red-500 -bottom-[39px]`}
            ></div>
            {link.name}
          </li>
        ))}
      </ul>
      <ul className="ctas text-xl ml-auto  text-gray-500 flex gap-5 items-center justify-between">
        <li ref={ref} className="cursor-pointer relative">
          <button onClick={() => SetshowModalcart((pre) => !pre)}>
            <BiCart size={30} />
          </button>
          {showModalcart && (
            <div className="left-2/4  sm:w-60 md:left-auto md:right-[10%]  px-2 md:top-20 top-28 sm:top-14 -translate-x-2/4 md:translate-x-[20%]   fixed w-full ">
              {" "}
              <CartModal />
            </div>
          )}
        </li>
        <li className="cursor-pointer">
          <img
            src={avatar}
            className="profile hover:border-2 border-Orange  rounded-full p-[2px] h-10 min-w-10"
          />
        </li>
      </ul>
    </div>
  );
}
