"use client";

import { IoClose } from "react-icons/io5";
import ImagePreview from "./ImagePreview";
import useImageModal from "../hooks/useImageModal";

const ImageModal = () => {
  const { showModal, remove } = useImageModal();

  if (!showModal) return null;

  return (
    <div className="hidden transition fixed inset-0 bg-black/75 z-50 md:flex items-center justify-center">
      <div className="flex flex-col gap-8 items-end">
        <div className="text-end">
          <IoClose
            size={25}
            className="text-bold text-[#ff7d1a] hover:text-[#ffede0] cursor-pointer"
            onClick={remove}
          />
        </div>
        <ImagePreview isModal />
      </div>
    </div>
  );
};

export default ImageModal;
