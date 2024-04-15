import { Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import MemberCard from "./MemberCard";
import baseAPIMethods from "../../../lib/axios/base";
import AnimatePage from "../../../ui/AnimatePage";
import { useResponsive } from "../../../hooks/useResponsive";
import useLoading from "../../../shared/store/useLoading";

export default function AllTeam() {
	const [member, setMember] = useState([]);
	const { isMobile, isTablet } = useResponsive();
	const [loading, setLoading] = useLoading((state) => [
		state.loading,
		state.setLoading,
	]);
	const shimmerSize = localStorage.getItem("teamSize");
	console.log("local", shimmerSize);
	useEffect(() => {
		setLoading(true);
		const getTeam = async () => {
			const res = await baseAPIMethods.members.getAllMembers();
			setMember(res.data);
			console.log("members", res.data);
			return res.data;
		};
		getTeam().then((res) => {
			console.log("test", res);
			localStorage.setItem("teamSize", res.length);
		}).then(() => {
			setLoading(false);
		})
	}, []);

	return (
		<AnimatePage>
			<Stack justifyContent={"center"} alignItems={"center"} gap={5}>
				<Typography variant="h2" paddingY="20px" sx={{
					fontSize: { xs: "30px", md: "45px", lg: "60px" }, fontWeight: isMobile ? "200" : isTablet ? "300" : "400",
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
						<>
							{[
								...Array(shimmerSize).map((_, i) => {
									<>
										{console.log('cnt', i)}
										<MemberCard key={i}
											memberImage="loadingShimmer"
											memberName="loadingShimmer"
											memberUsername="loadingShimmer"
										/>;
									</>
								}),
							]}
						</>
					) : (
						<>
							{member.map((member, idx) => (
								<MemberCard
									key={idx}
									memberName={member.profile.name}
									memberImage={member.profile.avatar}
									memberUsername={member.profile.username}
								/>
							))}
						</>
					)}
				</Stack>
			</Stack>
		</AnimatePage>
	);
}