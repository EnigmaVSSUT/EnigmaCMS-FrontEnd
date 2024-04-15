import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";

export const useResponsive = () => {
	const isLaptop = useMediaQuery("(max-width:1100px)");
	const isTablet = useMediaQuery("(max-width:700px)");
	const isMobile = useMediaQuery("(max-width:500px)");

	let fontSize, lineHeight, fontWeight;

	useEffect(() => {
		window.addEventListener("resize", ()=>{});
		return () => {
			window.removeEventListener("resize", ()=>{});
		}
	},[]);

	return {
		isLaptop,
		isTablet,
		isMobile
	};
};
