
import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import MemberCard from "./MemberCard";
import baseAPIMethods from "../../../lib/axios/base";
import AnimatePage from "../../../ui/AnimatePage";

export default function AllTeam() {
	const [member, setMember] = useState([]);

	useEffect(() => {
		const getTeam = async () => {
			const res = await baseAPIMethods.members.getAllMembers();
			setMember(res.data);
			console.log(res.data);
		};
		getTeam();
	}, []);

	return (
		<AnimatePage>
				<Stack
					justifyContent={"center"}
					alignItems={"center"}
					gap={10}
				>
					<Typography variant="h2" color={"#fff"}>
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
						{member.map((member,idx) => (
							<MemberCard
								key={idx}
								memberName={member.profile.username}
								memberImage={
									import.meta.env.VITE_BASE_URL +
									"/media/" +
									member.profile.avatar
								}
							/>
						))}
					</Stack>
				</Stack>
		</AnimatePage>
	);
}