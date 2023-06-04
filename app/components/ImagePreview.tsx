"use client";

import Image from "next/image";
import { useState } from "react";
import useImageModal from "../hooks/useImageModal";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const allImages = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

type ImagePreviewProps = {
  isModal?: boolean;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ isModal }) => {
  const [index, setIndex] = useState(0);
  const { show } = useImageModal();

  const startpath = "/images/";

  const handleClick = (direction: "left" | "right") => {
    if (direction === "left" && index > 0) {
      setIndex((curr) => curr - 1);
    }
    if (direction === "right" && index < allImages.length - 1) {
      setIndex((curr) => curr + 1);
    }
  };

  return (
    <div className="w-full sm:w-fit">
      <div className="flex justify-center w-full">
        <div className="relative w-full">
          <Image
            src={`${startpath}${allImages[index]}`}
            alt="sneaker"
            width={1000}
            height={1000}
            onClick={show}
            className="w-full sm:w-[450px] sm:h-[450px] rounded-none sm:rounded-2xl cursor-pointer transition duration-300 ease-in-out block object-contain"
          />
          <div className="sm:hidden absolute top-[250px] left-10 w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <FiChevronLeft
              size={25}
              onClick={() => handleClick("left")}
              className={`text-bold cursor-pointer transition-all ${
                index > 0
                  ? "text-[#1c2026] hover:text-[#68707d]"
                  : "text-[#f7f8fd]"
              }`}
            />
          </div>
          <div className="sm:hidden absolute top-[250px] right-10 w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <FiChevronRight
              size={25}
              onClick={() => handleClick("right")}
              className={`text-bold cursor-pointer transition-all ${
                index >= allImages.length - 1
                  ? "text-[#f7f8fd]"
                  : "text-[#1c2026] hover:text-[#68707d]"
              }`}
            />
          </div>
          {isModal && (
            <>
              <div className="absolute top-[205px] left-10 sm:-left-[20px] w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <FiChevronLeft
                  size={25}
                  onClick={() => handleClick("left")}
                  className={`text-bold cursor-pointer transition-all ${
                    index > 0
                      ? "text-[#1c2026] hover:text-[#68707d]"
                      : "text-[#f7f8fd]"
                  }`}
                />
              </div>
              <div className="absolute top-[205px] right-10 sm:-right-[20px] w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <FiChevronRight
                  size={25}
                  onClick={() => handleClick("right")}
                  className={`text-bold cursor-pointer transition-all ${
                    index >= allImages.length - 1
                      ? "text-[#f7f8fd]"
                      : "text-[#1c2026] hover:text-[#68707d]"
                  }`}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className="hidden sm:flex gap-8 mt-10 flex-wrap justify-center">
        {allImages.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`relative cursor-pointer group w-[90px] h-[90px] rounded-xl ${
                i === index ? "border-[3px] border-[#ff7d1a]" : "border-none"
              }`}
            >
              <Image
                src={`${startpath}${item}`}
                alt="sneaker thumbnail"
                width={176}
                height={176}
                className={`w-full h-full rounded-xl`}
              />
              <div
                className={`absolute inset-0 rounded-xl ${
                  i === index && "bg-white/75"
                } ${i !== index && "group-hover:bg-white/40"}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImagePreview;
