import { create } from "zustand";

interface Store {
  user: any;
  setUser: (user: any) => void;
}

const useStore = create<Store>()((set) => ({
  user: localStorage.getItem("user"),
  setUser: (user) => {
    localStorage.setItem("user", user.toString());
    set({ user });
  }
}));


export { useStore };