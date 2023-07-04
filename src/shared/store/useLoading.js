import { create } from "zustand";

const useLoading = create((set) => ({
loading: false,
setLoading: (loading) => set({ loading}),
}));

export default useLoading;