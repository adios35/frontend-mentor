// import{} from
import { BiCart } from "react-icons/bi";
import MainButton from "../../components/btns/mainBtn/";
import LeftContent from "./leftContent";
import ModalImage from "./modal/ModalImage";
import { useState } from "react";
export default function Content() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" md:py-32 py-28 md:gap-16 gap-8  [&>*]:flex-[50%] flex md:px-10 flex-col md:flex-row justify-evenly items-center">
      {showModal && <ModalImage setShowModal={setShowModal} />}
      <div className="images max-w-[350px]">
        <LeftContent />
      </div>
      <div className="content p-3 space-y-3  max-w-[350px]">
        <h3 className="text-md font-semibold text-Orange">sneaker company</h3>
        <h1 className="text-3xl font-bold text-gray-800">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="desc text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          aut quod alias necessitatibus tenetur voluptatum excepturi eius sint
          eaque aperiam.
        </p>
        <div className="price flex items-center justify-betwen">
          <div className="discount flex gap-2 items-center">
            <span className="font-bold text-gray-700 inline-block text-2xl">
              $125.00
            </span>
            <span className="disc font-bold  p-[2px] text-center text-xs rounded-md bg-Pale-orange text-Orange">
              50%
            </span>
          </div>
          <div className="actual-price text-md text-gray-400 block ml-auto">
            $250.00
          </div>
        </div>

        <div className="ctas flex flex-col md:flex-row gap-2  ">
          <div className="button-group items-center justify-between [&>*]:mx-auto  font-bold flex bg-gray-100 gap-6 rounded-md">
            <button className="text-Orange text-2xl text-center  p-2">-</button>
            <span className="text-center text-md block">0</span>
            <button className="text-Orange text-2xl p-2">+</button>
          </div>
          <MainButton className="shadow-xl flex items-center justify-center gap-3 p-4 shadow-Orange/30 hover:text-gray-400">
            <BiCart /> <span>Add to cart</span>
          </MainButton>
        </div>
      </div>
    </div>
  );
}
