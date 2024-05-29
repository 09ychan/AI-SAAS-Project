import { create } from "zustand";

interface useProModealStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useProModal = create<useProModealStore>((set)=>({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}));

