"use client";
import Footer from "@/layout/footer/Footer";
import { Stack } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import EnigmaTheme from "theme/EnigmaTheme";
import BackgroundBlob from "@/layout/BackgroundBlob";
import Header from "@/layout/appbar/Header";
import dynamic from "next/dynamic";
import "@/styles/globals.css";

const Cursor = dynamic(() => import("@/components/cursor/Cursor"), {
	ssr: false,
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<EnigmaTheme>
				<Head>
					<title>Enigma VSSUT</title>
				</Head>
				<body>
					<Stack minHeight="100vh" bgcolor="background.default">
						<BackgroundBlob />
						<Cursor />
						<Header />
						<Stack
							flexGrow={1}
							overflow="hidden"
							sx={
								{
									// backdropFilter: 'blur(200px)'
								}
							}
						>
							<AnimatePresence mode="wait" initial={false}>
								{children}
							</AnimatePresence>
						</Stack>
						<Footer />
					</Stack>
				</body>
			</EnigmaTheme>
		</html>
	);
}
