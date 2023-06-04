"use client";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import useProducts from "../hooks/useProducts";
import { useMemo, useState } from "react";
import Image from "next/image";

const CartButton = () => {
  const [showCart, setShowCart] = useState(false);
  const { products, remove } = useProducts();

  const totalQty = useMemo(
    () => products.reduce((acc, item) => acc + item.quantity, 0),
    [products]
  );

  return (
    <div className="relative group">
      <AiOutlineShoppingCart
        onClick={() => setShowCart(!showCart)}
        size={25}
        className="text-[#68707d] font-normal group-hover:text-[#1c2026] cursor-pointer"
      />
      <div
        onClick={() => setShowCart(!showCart)}
        className="absolute -right-2 -top-2 bg-[#ff7d1a] px-2 rounded-full cursor-pointer"
      >
        {totalQty > 0 && (
          <p className="text-xs font-bold text-white ">{totalQty}</p>
        )}
      </div>
      {showCart && (
        <div className="absolute top-16 sm:top-8 -left-[275px] sm:-left-80 z-40 w-[400px] min-h-[200px] bg-white shadow-xl rounded-xl flex flex-col">
          <div className="px-4 py-4 w-full border-b border-[#f7f8fd]">
            <p className="font-normal text-lg text-[#1c2026]">Cart</p>
          </div>
          <div className="flex-1 w-full h-full flex items-center justify-center">
            {products.length === 0 ? (
              <p className="font-normal textbase text-[#1c2026]">
                Your cart is empty.
              </p>
            ) : (
              <div className="flex flex-col px-5 py-8 w-full">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex mb-2 items-center justify-center w-full gap-4"
                  >
                    <Image
                      alt="cart item"
                      src={product.image}
                      width={50}
                      height={50}
                      className="rounded"
                    />
                    <div className="flex flex-col gap-1 items-start flex-1 ">
                      <p className=" capitalize font-normal text-base text-[#b6bcc8]">
                        {product.name}
                      </p>
                      <div className="flex gap-1 items-start justify-center">
                        <p className="font-normal text-base text-[#b6bcc8]">
                          ${product.price.toFixed(2)} x {product.quantity}
                        </p>
                        <p className="font-normal text-base text-[#1c2026]">
                          ${(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <BsTrash
                      size={20}
                      className="text-[#68707d] font-normal hover:text-[#1c2026] cursor-pointer"
                      onClick={() => remove(product.id)}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="rounded-lg mt-4 flex items-center justify-center w-full py-4 text-white bg-[#ff7d1a] hover:opacity-50 cursor-pointer transition-all"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
