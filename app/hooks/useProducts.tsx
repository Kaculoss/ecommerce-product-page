import { create } from "zustand";

interface ProductStore {
  products: Product[];
  add: (product: Product) => void;
  remove: (id: string) => void;
  update: (id: string, qty: number) => void;
  set: (product: Product[]) => void;
}

const useProducts = create<ProductStore>((set) => ({
  products: [],
  add: (prod) => set((state) => ({ products: [...state.products, prod] })),
  remove: (prodId) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== prodId),
    })),
  update: (prodId, prodqty) =>
    set((state) => {
      let curProd = state.products.find((product) => product.id === prodId);
      if (curProd) {
        let updateProd = { ...curProd, quantity: prodqty };
        let filtedProd = state.products.filter(
          (product) => product.id !== prodId
        );
        return { products: [...filtedProd, updateProd] };
      }
      return { products: [...state.products] };
    }),
  set: (prods) => set({ products: prods }),
}));

export default useProducts;
