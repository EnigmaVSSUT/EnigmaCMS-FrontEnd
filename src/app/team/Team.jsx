
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import SideTab from "./components/SideTab";
import baseAPIMethods from "../../lib/axios/base";
import AnimatePage from "../../ui/AnimatePage";

export default function Team() {
	const [member, setMember] = useState([]);

	useEffect(() => {
		const getTeam = async () => {
			const res = await baseAPIMethods.members.getAllMembers();
			setMember(res.data);
			//console.log(res.data);
		};
		getTeam();
	}, [member]);

	return (
		<AnimatePage>
			<Stack direction={"row"}  flexGrow={1} borderColor={"#fff"}>

          <SideTab />
				
			</Stack>
		</AnimatePage>
	);
}