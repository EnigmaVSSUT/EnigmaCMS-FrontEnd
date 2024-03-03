import React, { useState, useEffect } from "react";
import { AppBar, Stack, Typography, Drawer } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import EnigmaNavLink from "./EnigmaNavLink";
import EventIcon from "@mui/icons-material/Event";
import BookIcon from "@mui/icons-material/Book";
import WebhookIcon from "@mui/icons-material/Webhook";
import GroupsIcon from "@mui/icons-material/Groups";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import "../App.css";

const DrawerList = ({ activeLink }) => (
	<Stack
		className="drawerStyles"
		direction="column"
		gap="25px"
		padding="20px"
		width="210px"
		alignItems="flex-start"
		height={1}
		position={"relative"}
	>
		<Stack
			width={"100%"}
			direction={"row"}
			gap={2}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<img
				src="/logo/enigma_contained.png"
				alt="Enigma VSSUT logo"
				width={50}
				height={50}
			/>
			<Typography variant="body1">Enigma VSSUT</Typography>
		</Stack>

		<Divider
			sx={{
				backgroundColor: "white",
				width: "100%",
			}}
		/>
		<Stack
			gap={4}
			paddingLeft={4}
			justifyContent={"center"}
			alignItems={"start"}
		>
			<EnigmaNavLink
				href="/events"
				className={activeLink === "/events" ? "active" : ""}
				color={activeLink === "/events" ? "#5cdc21" : "inherit"}
			>
				<Stack
					direction={"row"}
					gap={2}
					justifyContent={"start"}
					alignItems={"center"}
					fontSize={18}
				>
					<EventIcon sx={{ fontSize: 24 }} />
					Events
				</Stack>
			</EnigmaNavLink>

			<EnigmaNavLink
				href="/blogs"
				className={activeLink === "/blogs" ? "active" : ""}
				color={activeLink === "/blogs" ? "#5cdc21" : "inherit"}
			>
				<Stack
					direction={"row"}
					gap={2}
					justifyContent={"start"}
					alignItems={"center"}
					fontSize={18}
				>
					<BookIcon sx={{ fontSize: 24 }} />
					Blogs
				</Stack>
			</EnigmaNavLink>

			<EnigmaNavLink
				href="/projects"
				className={activeLink === "/projects" ? "active" : ""}
				color={activeLink === "/projects" ? "#5cdc21" : "inherit"}
			>
				<Stack
					direction={"row"}
					gap={2}
					justifyContent={"start"}
					alignItems={"center"}
					fontSize={18}
				>
					<WebhookIcon sx={{ fontSize: 24 }} />
					Projects
				</Stack>
			</EnigmaNavLink>

			<EnigmaNavLink
				href="/team"
				className={activeLink === "/team" ? "active" : ""}
				color={activeLink === "/team" ? "#5cdc21" : "inherit"}
			>
				<Stack
					direction={"row"}
					gap={2}
					justifyContent={"start"}
					alignItems={"center"}
					fontSize={18}
				>
					<GroupsIcon sx={{ fontSize: 24 }} />
					Team
				</Stack>
			</EnigmaNavLink>
		</Stack>

		<Stack position={"absolute"} bottom={15} left={"23%"}>
			<Typography variant="caption">© 2024 Enigma VSSUT</Typography>
		</Stack>
	</Stack>
);

const Header = () => {
	const isPhone = useMediaQuery("(max-width:600px)");
	const [open, setOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		const currentPath = window.location.pathname;
		setActiveLink(currentPath);
	}, [activeLink]);

	const toggleDrawer = (newOpen) => () => {
		setOpen(newOpen);
	};

	return (
		<AppBar
			position="sticky"
			sx={{
				backgroundColor: "#12121290",
				backdropFilter: "blur(200px)",
			}}
		>
			<Stack
				direction="row"
				borderBottom="1px solid"
				borderColor="divider"
				justifyContent="center"
				alignItems="center"
				padding="10px 32px"
				gap="16px"
			>
				<Stack
					component={Link}
					href="/"
					style={{
						textDecoration: "none",
					}}
					direction="row"
					gap="12px"
					alignItems="center"
					flexGrow={1}
				>
					<img
						src="/logo/enigma_contained.png"
						alt="Enigma VSSUT logo"
						width={42}
						height={42}
					/>
					<Typography>Enigma VSSUT</Typography>
				</Stack>
				{isPhone ? (
					<>
						<IconButton aria-label="options" onClick={toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
						<Drawer
							sx={{
								"& .MuiDrawer-paper": {
									backgroundColor: "transparent",
									color: "white",
								},
							}}
							open={open}
							onClose={toggleDrawer(false)}
							anchor="right"
						>
							<DrawerList activeLink={activeLink} />
						</Drawer>
					</>
				) : (
					<Stack direction="row" gap="20px">
						<EnigmaNavLink
							href="/events"
							className={activeLink === "/events" ? "active" : ""}
							color={activeLink === "/events" ? "#5cdc21" : "inherit"}
						>
							Events
						</EnigmaNavLink>
						<EnigmaNavLink
							href="/blogs"
							className={activeLink === "/blogs" ? "active" : ""}
							color={activeLink === "/blogs" ? "#5cdc21" : "inherit"}
						>
							Blogs
						</EnigmaNavLink>
						<EnigmaNavLink
							href="/projects"
							className={activeLink === "/projects" ? "active" : ""}
							color={activeLink === "/projects" ? "#5cdc21" : "inherit"}
						>
							Projects
						</EnigmaNavLink>
						<EnigmaNavLink
							href="/team"
							className={activeLink === "/team" ? "active" : ""}
							color={activeLink === "/team" ? "#5cdc21" : "inherit"}
						>
							Team
						</EnigmaNavLink>
					</Stack>
				)}
			</Stack>
		</AppBar>
	);
};

export default Header;
