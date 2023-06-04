"use client";

import { FaMinus, FaPlus } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import useProducts from "../hooks/useProducts";

const AddToCart = () => {
  const [qty, setQty] = useState(0);
  const { add, products, update } = useProducts();

  const item = {
    id: "Fles",
    name: "fall limited edition sneakers",
    price: 125.0,
    image: "/images/image-product-1.jpg",
  };

  const handleClick = () => {
    let product = products.find((product) => product.id === "Fles");
    if (product) {
      let newQty = product.quantity + qty;
      update("Fles", newQty);
    } else {
      if (qty > 0) {
        add({ ...item, quantity: qty });
      }
    }
  };

  return (
    <div className="w-full mt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
      <div className="rounded-lg sm:w-fit w-full flex items-center justify-between sm:justify-center px-4 sm:px-3 gap-8 py-4 bg-[#ffede0]">
        <FaMinus
          size={16}
          className="font-bold text-[#ff7d1a] hover:opacity-50 cursor-pointer"
          onClick={() => setQty((curr) => curr - 1)}
        />
        <p className="font-bold text-[#1c2026] text-base">{qty}</p>
        <FaPlus
          size={16}
          className="font-bold text-[#ff7d1a] hover:opacity-50 cursor-pointer"
          onClick={() => setQty((curr) => curr + 1)}
        />
      </div>
      <button
        type="button"
        className="flex-1 rounded-lg flex items-center justify-center gap-4 w-full py-4 text-white bg-[#ff7d1a] hover:opacity-50 cursor-pointer transition-all"
        onClick={handleClick}
      >
        <AiOutlineShoppingCart size={20} />
        <span>Add to cart</span>
      </button>
    </div>
  );
};

export default AddToCart;
