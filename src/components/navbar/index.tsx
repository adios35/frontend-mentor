import { BiCart } from "react-icons/bi";
export default function NavBar() {
  return (
    <div className="py-8 border-b-[1px]  border-gray-300 items-center flex gap-8">
      <div className="logo text-3xl text-black/70 font-extrabold">
        sneakers{" "}
      </div>
      <ul className="navigation sm:flex mr-auto gap-3 font-thin">
        <li>link1</li>
        <li>link2</li>
        <li>link3</li>
      </ul>
      <ul className="ctas text-xl text-gray-500 flex gap-5 items-center justify-between">
        <li>
          <BiCart />
        </li>
        <li>
          <div className="profile bg-gray-400 rounded-full h-8 w-8"></div>
        </li>
      </ul>
    </div>
  );
}
