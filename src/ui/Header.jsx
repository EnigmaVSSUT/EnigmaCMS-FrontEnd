import {
	Typography,
	IconButton,
	Divider,
	AppBar,
	Box,
	SwipeableDrawer,
	List,
	ListItem,
	Stack,
} from "@mui/material";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import EnigmaNavLink from "./EnigmaNavLink";
// import { motion } from "framer-motion";
// import { navVariants } from "../Utils/motion";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Navbar() {
	const [open, setOpen] = useState(false);
	return (
		<>
			{/* <motion.nav
				variants={navVariants}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
			> */}
			<AppBar
				elevation={0}
				sx={{
					position: "relative",
					top: "0",
					left: "0",
					padding: { lg: "10px 30px", xs: "10px 10px" },
					flexDirection: "row",
					justifyContent: "space-between",
					background: "rgb(17,17,17)",
					boxShadow: "0px 3px 7px black",
					position:"sticky"
				}}
			>
				<a href="/">
				<Stack direction="row" alignItems="center" gap="10px">
					<img src="/logo/enigma_contained.png" alt="logo" width={80} />
					<Typography
						sx={{
							fontSize: { lg: "24px", xs: "18px" },
							fontWeight: "500",
						}}
					>
						ENIGMA
					</Typography>
				</Stack>
				</a>
				<Box
					sx={{
						display: { xs: "none", md: "flex" },
						flexDirection: "row",
						gap: "30px",
						alignItems: "center",
					}}
				>
					<Stack direction="row" gap="20px">
						<EnigmaNavLink href="/events">Events</EnigmaNavLink>
						<EnigmaNavLink href="/blogs">Blogs</EnigmaNavLink>
						<EnigmaNavLink href="/projects">Projects</EnigmaNavLink>
						<EnigmaNavLink href="/team">Team</EnigmaNavLink>
					</Stack>
				</Box>
				<IconButton sx={{ display: { md: "none" } }}>
					<FormatAlignLeftIcon
						onClick={() => setOpen(true)}
						sx={{ color: "white" }}
					/>
				</IconButton>
				<SwipeableDrawer
					PaperProps={{
						sx: {
							background: "transparent",
							backdropFilter: "blur(10px)",
							width: "200px",
							display: open ? "flex" : "none",
						},
					}}
					open={open}
					anchor="right"
					onOpen={() => {
						setOpen(true);
					}}
					onClose={() => {
						setOpen(false);
					}}
				>
					<div>
						<IconButton>
							<ChevronRightIcon
								onClick={() => setOpen(false)}
								sx={{ color: "white" }}
							/>
						</IconButton>
					</div>
					<Divider sx={{ backgroundColor: "white" }} />
					<List>
						<ListItem>
							<EnigmaNavLink href="/events">Events</EnigmaNavLink>
						</ListItem>
						<ListItem>
						<EnigmaNavLink href="/blogs">Blogs</EnigmaNavLink>
						</ListItem>
						<ListItem>
						<EnigmaNavLink href="/projects">Projects</EnigmaNavLink>
						</ListItem>
						<ListItem>
						<EnigmaNavLink href="/team">Team</EnigmaNavLink>
						</ListItem>
					
						
					</List>
				</SwipeableDrawer>
			</AppBar>
			{/* </motion.nav> */}
		</>
	);
}
