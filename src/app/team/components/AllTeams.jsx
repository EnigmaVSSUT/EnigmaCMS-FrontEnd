import { Stack, Typography, Pagination } from "@mui/material";
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
	const shimmerSize = Number(localStorage.getItem("teamSize")) || 0;

	const [currentPage, setCurrentPage] = useState(1);
	const cardsPerPage = 9;

	const indexOfLastCard = currentPage * cardsPerPage;
	const indexOfFirstCard = indexOfLastCard - cardsPerPage;
	const currentCards = filteredMembers.slice(indexOfFirstCard, indexOfLastCard);

	useEffect(() => {
		// Load team data from local storage if available
		const storedMembers = JSON.parse(localStorage.getItem("teamMembers"));
		if (storedMembers) {
			setMembers(storedMembers);
		}

		const getTeam = async () => {
			setLoading(true);
			try {
				const res = await baseAPIMethods.members.getAllMembers();
				setMembers(res.data);
				localStorage.setItem("teamMembers", JSON.stringify(res.data));
				localStorage.setItem("teamSize", res.data.length);
			} catch (error) {
				console.error("Failed to fetch team members:", error);
			} finally {
				setLoading(false);
			}
		};
		getTeam();
	}, [setLoading]);

	useEffect(() => {
		const filterMembers = () => {
			if (year === "all") {
				setFilteredMembers(members);
			} else if (year === "alumni") {
				setFilteredMembers(
					members.filter(
						(member) => parseInt(member.profile.graduation_year) < 2024
					)
				);
			} else {
				setFilteredMembers(
					members.filter(
						(member) => member.profile.graduation_year === parseInt(year)
					)
				);
			}
		};
		filterMembers();
	}, [year, members]);

	const handlePageChange = (event, value) => {
		setCurrentPage(value);
	};

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
					{loading && !members.length ? (
						Array.from({ length: shimmerSize }).map((_, i) => (
							<MemberCard
								key={i}
								memberImage="loadingShimmer"
								memberName="loadingShimmer"
								memberUsername="loadingShimmer"
							/>
						))
					) : (
						currentCards.map((member, idx) => (
							<MemberCard
								key={idx}
								memberName={member.profile.name}
								memberImage={member.profile.avatar}
								memberUsername={member.profile.username}
							/>
						))
					)}
				</Stack>

				{filteredMembers.length > cardsPerPage && (
					<Pagination
						count={Math.ceil(filteredMembers.length / cardsPerPage)}
						page={currentPage}
						onChange={handlePageChange}
						color="primary"
					/>
				)}
			</Stack>
		</AnimatePage>
	);
}
