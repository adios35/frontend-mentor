import { create } from "zustand";
import { persist } from "zustand/middleware";
type item = {
  id: number;
  name: string;
  price: number;
  quantity?: number;
};
type cart = {
  cart: item[];
  addToCart: (data: item) => void;
  decreaseQuantity: (id: number) => void;
  removeFromcart: (id: number) => void;
};
const useStore = create<cart>()(
  persist(
    (set, _get) => ({
      cart: [],
      addToCart: (data) =>
        set((state) => {
          const isExist = state.cart.find((i) => i.id === data.id);
          if (isExist) {
            return {
              cart: state.cart.map((pre) =>
                pre.id === data.id
                  ? { ...pre, quantity: pre?.quantity! + 1 }
                  : pre,
              ),
            };
          } else {
            return { cart: [...state.cart, data] };
          }
        }),
      decreaseQuantity: (id) =>
        set((state) => {
          const isExist = state.cart.find((i) => i.id === id);
          if (isExist && isExist.quantity! > 1) {
            return {
              cart: state.cart.map((pre) =>
                pre.id === id ? { ...pre, quantity: pre.quantity! - 1 } : pre,
              ),
            };
          }
          return state;
        }),
      removeFromcart: (id) =>
        set((state) => ({ cart: state.cart.filter((pre) => pre.id !== id) })),
    }),
    {
      name: "cart",
    },
  ),
);
export default useStore;
