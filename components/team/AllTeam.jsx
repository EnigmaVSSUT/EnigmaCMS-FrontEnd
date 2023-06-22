import AnimatePage from "@/layout/AnimatePage";
import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import baseAPIMethods from "@/lib/axios/base";
import { useState } from "react";
import MemberCard from "@/components/team/MemberCard";

export default function AllTeam() {
	const [member, setMember] = useState([]);

	useEffect(() => {
		const getTeam = async () => {
			const res = await baseAPIMethods.members.getAllMembers();
			setMember(res.data);
			//console.log(res.data);
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
						{member.map((member) => (
							<MemberCard
								key={member.id}
								memberName={member.profile.username}
								memberImage={
									process.env.NEXT_PUBLIC_BASE_URL +
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
