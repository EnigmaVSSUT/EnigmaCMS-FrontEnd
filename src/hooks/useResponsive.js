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


	 fontSize = isMobile ? "1.4rem" : isTablet ? "2rem" : "2.5rem";
	 lineHeight = isMobile ? "1.1rem" : isTablet ? "1.3rem" : "1.5rem";
	 fontWeight = isMobile ? "200" : isTablet ? "300" : "400";

	return {
		isLaptop,
		isTablet,
		isMobile,
		fontSize,
		lineHeight,
		fontWeight,
	};
};
