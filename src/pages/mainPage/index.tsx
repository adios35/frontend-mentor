// import{} from
import { BiCart } from "react-icons/bi";
import MainButton from "../../components/btns/mainBtn/";
import LeftContent from "./leftContent";
import ModalImage from "./modal/ModalImage";
import { useState } from "react";
export default function Content() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="md:py-11 py-32 gap-16  [&>*]:flex-[50%] flex flex-col md:flex-row justify-center items-center">
      {showModal && <ModalImage setShowModal={setShowModal} />}
      <div className="images max-w-[350px]">
        <LeftContent />
      </div>
      <div className="content space-y-3  max-w-[350px]">
        <h3 className="text-md font-semibold text-Orange">sneaker company</h3>
        <h1 className="text-3xl font-bold text-gray-800">
          Fall Limited Edition <br /> Sneakers
        </h1>
        <p className="desc text-gray-400 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          aut quod alias necessitatibus tenetur voluptatum excepturi eius sint
          eaque aperiam.
        </p>
        <div className="price">
          <div className="discount flex gap-2 items-center">
            <span className="font-bold text-gray-700 inline-block text-xl">
              $125.00
            </span>
            <span className="disc font-bold  p-[2px] text-center text-xs rounded-md bg-Pale-orange text-Orange">
              50%
            </span>
          </div>
          <div className="actual-price text-xs text-gray-400">$250.00</div>
        </div>

        <div className="ctas flex flex-col md:flex-row gap-2  ">
          <div className="button-group items-center  font-bold flex bg-gray-100 gap-6 rounded-md">
            <button className="text-Orange text-2xl p-2">-</button>
            <span className="text-center text-md block">0</span>
            <button className="text-Orange text-2xl p-2">+</button>
          </div>
          <MainButton className="shadow-xl flex items-center justify-center gap-3 shadow-Orange/30 hover:text-gray-400">
            <BiCart /> <span>Add to cart</span>
          </MainButton>
        </div>
      </div>
    </div>
  );
}
