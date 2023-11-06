import { create } from "zustand";

const useDatePicker = create((set) => ({
pickedDate: '',
setPickedDate: (pickedDate) => set({ pickedDate}),
}));

export default useDatePicker;