import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import MemberCard from "./MemberCard";
import baseAPIMethods from "../../../lib/axios/base";
import AnimatePage from "../../../ui/AnimatePage";
import { useResponsive } from "../../../hooks/useResponsive";

export default function AllTeam() {
	const [member, setMember] = useState([]);
	const { isTablet, fontSize, fontWeight } = useResponsive();

	useEffect(() => {
		const getTeam = async () => {
			const res = await baseAPIMethods.members.getAllMembers();
			setMember(res.data);
			console.log("members", res.data);
		};
		getTeam();
	}, []);

	console.log("fontSize", fontSize);

	return (
		<AnimatePage>
			<Stack justifyContent={"center"} alignItems={"center"} gap={10}>
				<Typography
					sx={{
						fontSize: fontSize,
						fontWeight: fontWeight,
						textAlign: "center",
						color: "#fff",
					}}
				>
					Team Enigma
				</Typography>

				<Stack
					className="team-grid"
					direction={"row"}
					gap={4}
					justifyContent={"center"}
					alignItems={"center"}
					flexWrap={"wrap"}
				>
					{member.map((member, idx) => (
						<MemberCard
							key={idx}
							memberName={member.profile.name}
							memberImage={member.profile.avatar}
							memberUsername={member.profile.username}
						/>
					))}
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
