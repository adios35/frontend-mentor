import image1 from "../../../assets/images/image-product-1.jpg";
import image2 from "../../../assets/images/image-product-2.jpg";
import image3 from "../../../assets/images/image-product-3.jpg";
import image4 from "../../../assets/images/image-product-4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
export default function LeftContent() {
  return (
    <Carousel
      className="md:scale-100 scale-110"
      autoPlay={false}
      infiniteLoop={true}
    >
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
  );
}
