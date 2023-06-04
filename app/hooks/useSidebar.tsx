import { create } from "zustand";

interface SidebarStore {
  showSidebar: boolean;
  show: () => void;
  remove: () => void;
}

const useSidebar = create<SidebarStore>((set) => ({
  showSidebar: false,
  show: () => set(() => ({ showSidebar: true })),
  remove: () => set(() => ({ showSidebar: false })),
}));

export default useSidebar;
