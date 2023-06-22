import { Avatar, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import cardStyles from "./team.module.css";

export default function MemberCard({ memberImage, memberName }) {
	const profileRedirect = () => {
		const newPageUrl =
			process.env.NEXT_PUBLIC_WEB_URL + "/profile/" + memberName;
		window.open(newPageUrl, "_blank");
	};

	return (
		<Card
			className={cardStyles.memberCard}
			sx={{
				borderRadius: "15px",
				padding: "3rem",
				direction: "column",
				gap: "5px",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
			}}
		>
			<Stack
				position={"absolute"}
				height={"fit-content"}
				width={"fit-content"}
				left={20}
				top={20}
			>
				<Typography variant="h6">🎯</Typography>
			</Stack>
			<Stack
				direction={"column"}
				gap={3}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Avatar
					alt={memberName}
					sx={{ width: 100, height: 100 }}
					src={memberImage}
				/>

				<Stack direction={"column"} gap={1}>
					<Typography textAlign={"center"}>{memberName}</Typography>
					<Typography variant="caption">Full Stack Developer</Typography>
				</Stack>

				<Button variant="outlined" onClick={profileRedirect}>
					View Profile
				</Button>
			</Stack>
		</Card>
	);
}
