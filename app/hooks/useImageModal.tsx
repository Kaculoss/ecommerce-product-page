import { create } from "zustand";

interface ImageModalStore {
  showModal: boolean;
  show: () => void;
  remove: () => void;
}

const useImageModal = create<ImageModalStore>((set) => ({
  showModal: false,
  show: () => set(() => ({ showModal: true })),
  remove: () => set(() => ({ showModal: false })),
}));

export default useImageModal;
