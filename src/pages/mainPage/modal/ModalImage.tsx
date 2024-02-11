import image1 from "../../../assets/images/image-product-1.jpg";
import image2 from "../../../assets/images/image-product-2.jpg";
import image3 from "../../../assets/images/image-product-3.jpg";
import image4 from "../../../assets/images/image-product-4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function ModalImage({
  setShowModal,
}: {
  showModal?: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className=" w-screen grid place-items-center h-screen inset-0 w-screen fixed z-[99]   bg-black/60 ">
      <div className="wrapper relative max-w-[400px]">
        <button
          onClick={() => setShowModal(false)}
          className="absolute text-2xl text-white -top-8 -right-7 z-[991]"
        >
          X
        </button>
        <Carousel autoPlay={false} infiniteLoop={true}>
          <div>
            <img src={image1} alt="image1" />
          </div>
          <div>
            <img src={image2} alt="image2" />
          </div>
          <div>
            <img src={image3} alt="image3" />
          </div>
          <div>
            <img src={image4} alt="image4" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
