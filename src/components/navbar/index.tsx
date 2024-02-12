import { BiCart, BiMenu } from "react-icons/bi";
import "./style.css";
import avatar from "../../assets/images/image-avatar.png";
import { useEffect, useRef, useState } from "react";
import CartModal from "./cartModal";
export default function NavBar() {
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
    <div className="py-8 md:border-b-[1px] fixed z-[9999] bg-white w-full pr-4 border-none  border-gray-300 items-center flex gap-8">
      <div className="hamburger">
        <BiMenu size="40" />
      </div>
      <div className="logo text-3xl text-black/70 font-extrabold">sneakers</div>
      <ul className="navigation hidden p-[30px] pt-20 absolute md:static bg-white z-[9999] bottom-0 w-3/5   h-screen left-0 flex flex-col md:flex-col  mr-auto gap-3">
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
        <li ref={ref} className="cursor-pointer">
          <button onClick={() => SetshowModalcart((pre) => !pre)}>
            <BiCart size={30} />
          </button>
          {showModalcart && (
            <div className="  left-2/4 px-2 top-28 -translate-x-2 fixed w-full ">
              {" "}
              <CartModal />
            </div>
          )}
        </li>
        <li className="cursor-pointer">
          <img
            src={avatar}
            className="profile hover:border-2 border-Orange  rounded-full p-[2px] h-10 w-10"
          />
        </li>
      </ul>
    </div>
  );
}
