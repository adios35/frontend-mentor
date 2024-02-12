export default function CartModal() {
  return (
    <div className="md:w-56 inset-0 bg-white   left-2/4 top-2 md:static w-full  -translate-x-2/4 shadow-xl bg-white rounded-md h-3xl">
      <div className="border-b-2 p-3">
        <h4 className="text-sm text-gray-700 font-semibold">Cart</h4>
      </div>
      <div className="cart-content flex justify-center items-center place-items-center  p-3">
        <span className="text-xs w-full h-20  text-center">
          Your cart is empty
        </span>
      </div>
    </div>
  );
}
