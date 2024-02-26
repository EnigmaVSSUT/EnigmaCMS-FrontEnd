import { Stack, Box, Typography } from "@mui/material";

const EnigmaNavLink = ({
	href = "/",
	color = "text.body",
	children,
	...props
}) => {
	return (
		<Stack
			direction="row"
			position="relative"
			gap="8px"
			{...props}
			alignItems="center"
			sx={{
				width: "fit-content",
				"&:hover": {
					"& .MuiBox-root": {
						width: "100%",
					},
				},
			}}
		>
			<a href={href}>
				<Typography color={color}>{children}</Typography>
			</a>
			<Box
				sx={{
					position: "absolute",
					bottom: "-4px",
					left: "0",
					width: "0%",
					height: "2px",
					bgcolor: "primary.main",
					borderRadius: "10px",
					transition: "width 300ms",
				}}
			/>
		</Stack>
	);
};

export default EnigmaNavLink;
