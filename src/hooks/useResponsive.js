import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

export const useResponsive = () => {
	const isLaptop = useMediaQuery("(max-width:900px)");
	const isTablet = useMediaQuery("(max-width:650px)");
	const isMobile = useMediaQuery("(max-width:600px)");

	return {
		isLaptop,
		isTablet,
		isMobile,
	};
};
