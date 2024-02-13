import { BiTrash } from "react-icons/bi";
import useStore from "../../../store/cart";
import image from "../../../assets/images/image-product-1-thumbnail.jpg";

export default function CartModal() {
  const { cart, removeFromcart } = useStore();
  return (
    <div className=" bg-white  top-2 sm:static w-full shadow-xl bg-white rounded-md h-3xl">
      <div className="border-b-2 p-3">
        <h4 className="text-sm text-gray-700 font-semibold">Cart</h4>
      </div>
      <div className="cart-content flex justify-center items-center place-items-center  p-3">
        {cart.length > 0 ? (
          <div className="flex gap-3 justify-between  w-full h-14 text-xs items-center">
            <div className="row">
              <img
                src={image}
                alt="hell"
                width={30}
                className="rounded-sm"
                height={30}
              />
            </div>
            <div className="row flex-1">
              <span className="title block">{cart[0].name}</span>
              <div className="price">
                <span>${cart[0].price} x </span>
                <span>{cart[0].quantity} </span>
                <span className="font-bold text-gray-800">
                  ${cart[0].price * cart[0].quantity!}
                </span>
              </div>
            </div>
            <button onClick={() => removeFromcart(cart[0].id)} className="row">
              <BiTrash size={18} />
            </button>
          </div>
        ) : (
          <span className="text-xs w-full h-20  text-center">
            Your cart is empty
          </span>
        )}
      </div>
    </div>
  );
}
