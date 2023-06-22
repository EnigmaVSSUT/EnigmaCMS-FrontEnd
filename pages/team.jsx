import AnimatePage from "@/layout/AnimatePage";
import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import baseAPIMethods from "@/lib/axios/base";
import { useState } from "react";
import MemberCard from "@/components/team/MemberCard";
import SideTab from "@/components/team/SideTab";

export default function Team() {
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
			<Stack direction={"row"}  flexGrow={1} borderColor={"#fff"}>

          <SideTab />
				
			</Stack>
		</AnimatePage>
	);
}
