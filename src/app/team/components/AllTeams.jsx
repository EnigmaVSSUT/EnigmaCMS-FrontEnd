import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MemberCard from "./MemberCard";
import baseAPIMethods from "../../../lib/axios/base";
import AnimatePage from "../../../ui/AnimatePage";
import { useResponsive } from "../../../hooks/useResponsive";
import useLoading from "../../../shared/store/useLoading";

export default function AllTeam({ year }) {
	const [members, setMembers] = useState([]);
	const [filteredMembers, setFilteredMembers] = useState([]);
	const { isMobile, isTablet } = useResponsive();
	const [loading, setLoading] = useLoading((state) => [
		state.loading,
		state.setLoading,
	]);
	const shimmerSize = localStorage.getItem("teamSize") || 0;

	useEffect(() => {
		const getTeam = async () => {
			setLoading(true);
			const res = await baseAPIMethods.members.getAllMembers();
			setMembers(res.data);
			localStorage.setItem("teamSize", res.data.length);
			setLoading(false);
		};
		getTeam();
	}, [setLoading]);

	useEffect(() => {
		let filtered;
		if (year === "all") {
			filtered = members;
		} else if (year === "alumni") {
			filtered = members.filter(
				(member) => parseInt(member.profile.graduation_year) < 2024
			);
		} else {
			filtered = members.filter(
				(member) => member.profile.graduation_year === parseInt(year)
			);
		}
		setFilteredMembers(filtered);
	}, [year, members]);

	return (
		<AnimatePage>
			<Stack justifyContent={"center"} alignItems={"center"} gap={5}>
				<Typography
					variant="h2"
					paddingY="20px"
					sx={{
						fontSize: { xs: "30px", md: "45px", lg: "60px" },
						fontWeight: isMobile ? "200" : isTablet ? "300" : "400",
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
					{loading ? (
						[...Array(Number(shimmerSize)).keys()].map((i) => (
							<MemberCard
								key={i}
								memberImage="loadingShimmer"
								memberName="loadingShimmer"
								memberUsername="loadingShimmer"
							/>
						))
					) : (
						filteredMembers.map((member, idx) => (
							<MemberCard
								key={idx}
								memberName={member.profile.name}
								memberImage={member.profile.avatar}
								memberUsername={member.profile.username}
							/>
						))
					)}
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
