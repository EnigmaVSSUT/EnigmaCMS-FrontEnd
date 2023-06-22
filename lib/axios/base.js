import axios from "axios";

const APIInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

const AuthorizedAPIInstance = axios.create({
	baseURL: process.env.BASE_URL,
	headers: { "Content-Type": "application/json" },
});

AuthorizedAPIInstance.interceptors.request.use((config) => {
	config.headers.Authorization = Cookies.get("accessToken");
	return config;
});

const baseAPIMethods = {
	user: {
		userProfile: (data) => {
			return APIInstance.get(`/user/${data}`);
		},
	},
	members : {
		getAllMembers: () => {
			return APIInstance.get(`/user/all`);
		}
	}
};

export default baseAPIMethods;
