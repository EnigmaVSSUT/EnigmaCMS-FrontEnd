import { create } from "zustand";

const useUserProfile = create((set) => ({
	user: {
		username: "",
		name: "",
		avatar: "",
		graduationYear: "",
		linkedin_handle: "",
		twitter_handle: "",
	},
	setUser: (u) => set({ user: u }),
}));

export default useUserProfile;