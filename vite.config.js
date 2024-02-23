import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		port: 3000,
		host: "club.enigma.code",
		// host: "localhost",
	},
	optimizeDeps: {
		include: ["@mui/icons-material"],
	},
});
