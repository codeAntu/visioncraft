// "use client";

// import { create } from "zustand";

// interface Store {
//   user: any;
//   setUser: (user: any) => void;
// }

// const useStore = create<Store>()((set) => ({
//   user: localStorage.getItem("user") || null,
//   setUser: (user) => {
//     if (user === null) localStorage.removeItem("user");
//     else localStorage.setItem("user", user.toString());
//     set({ user });
//   },
// }));

// export { useStore };
