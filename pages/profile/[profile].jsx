import AnimatePage from "@/layout/AnimatePage";
import React, { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";
import baseAPIMethods from "@/lib/axios/base";
import { useRouter } from "next/navigation";
import {
	Avatar,
	Box,
	Chip,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import useUserProfile from "@/lib/store/useUserProfile";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

export default function Profile() {
	const path = usePathname();

	const [user, setUser] = useUserProfile((state) => [
		state.user,
		state.setUser,
	]);

	useEffect(() => {
		if (path) {
			const username = path.split("/")[2];
			const getUserProfile = async () => {
				return baseAPIMethods.user.userProfile(username);
			};
			getUserProfile().then((res) => {
				const user = res.data;

				console.log(res.data);
				setUser({
					username: res.data.username,
					name: res.data.name,
					avatar: process.env.NEXT_PUBLIC_BASE_URL+"/media/"+ res.data.avatar,
					graduationYear: res.data.graduation_year,
					linkedin_handle: res.data.linkedin_url,
					twitter_handle: res.data.twitter_username,
				});

				// console.log(user);
			});
		}
	}, [path]);

	return (
		<AnimatePage>
			<Stack justifyContent={"center"} alignItems={"center"}>
				<Stack
					border={3}
					boxShadow={"0 0 10px 3px"}
					direction={"row"}
					minWidth={"900px"}
					padding={12}
					margin={8}
				>
					<Stack className="data-box" gap={2} flexGrow={1}>
						<Typography color={"#fff"} variant="h3">
							{user.name}
						</Typography>
						<Typography color={"#fff"} variant="h6">
							{user.username}
						</Typography>

						<Typography color={"#fff"}>{user.graduationYear}</Typography>

						<Stack direction={"column"} marginTop={5} gap={1}>
							<Typography color={"#fff"} variant="h6">
								Skills
							</Typography>
							<Grid container xs={8} gap={1}>
								<Grid item>
									<Chip sx={{ width: "fit-content" }} label="React" />
								</Grid>
								<Grid item>
									<Chip sx={{ width: "fit-content" }} label="Firebase" />
								</Grid>
								<Grid item>
									<Chip sx={{ width: "fit-content" }} label="NextJS" />
								</Grid>
								<Grid item>
									<Chip sx={{ width: "fit-content" }} label="wsl" />
								</Grid>
								<Grid item>
									<Chip sx={{ width: "fit-content" }} label="Android" />
								</Grid>
							</Grid>
						</Stack>

						<Stack
							direction={"row"}
							sx={{ color: "#fff" }}
							gap={3}
							marginTop={3}
						>
							<Link href={user.linkedin_handle} target="_blank" key="linkedin">
								<IconButton
									sx={{
										border: "1px solid",
										borderColor: "divider",
									}}
								>
									<LinkedInIcon />
								</IconButton>
							</Link>

							<Link href={user.twitter_handle} target="_blank" key="twitter">
								<IconButton
									sx={{
										border: "1px solid",
										borderColor: "divider",
									}}
								>
									<TwitterIcon />
								</IconButton>
							</Link>
						</Stack>
					</Stack>

					<Stack className="image-box" flexGrow={1} alignItems={"center"}>
						<Stack
							height="100%"
							width="100%"
							justifyContent="center"
							alignItems="center"
							sx={{
								"&:hover": {
									"& .MuiAvatar-root": {
										filter: "brightness(1.2)",
									},
								},
								height: "fit-content",
								width: "fit-content",
							}}
						>
							<Suspense fallback={<div>Loading..</div>}>
								<Avatar
									sx={{ width: 255, height: 255, border: 5, color: "#52527a" }}
									src={user.avatar}
								/>
							</Suspense>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
