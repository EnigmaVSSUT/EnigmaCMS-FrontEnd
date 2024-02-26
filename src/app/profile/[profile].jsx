import { useEffect, useState } from "react";
import {
	Avatar,
	Chip,
	CircularProgress,
	Grid,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useParams } from "react-router-dom";
import AnimatePage from "../../ui/AnimatePage";
import baseAPIMethods from "../../lib/axios/base";
import useUserProfile from "./store/useUserProfile";
// import useLoading from "../../shared/store/useLoading";

export default function UserProfile() {
	const { username } = useParams();

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useUserProfile((state) => [
		state.user,
		state.setUser,
	]);

	useEffect(() => {
		if (username) {
			setLoading(true);
			const getUserProfile = async () => {
				return baseAPIMethods.user.userProfile(username);
			};
			getUserProfile().then((res) => {
				setUser({
					username: res.data.username,
					name: res.data.name,
					avatar: res.data.avatar,
					graduationYear: res.data.graduation_year,
					linkedin_handle: res.data.linkedin_url,
					twitter_handle: res.data.twitter_username,
				});
				// console.log(user);
			});
		}
	}, [setUser, username]);

	return (
		<AnimatePage>
			<Stack justifyContent="center" alignItems="center">
				<Stack
					border={3}
					boxShadow="0 0 5px 1px"
					direction="row"
					minWidth="900px"
					padding={12}
					margin={8}
				>
					<Stack className="data-box" gap={2} flexGrow={1}>
						<Typography color="#fff" variant="h3">
							{user.name}
						</Typography>
						<Typography color="#fff" variant="h6">
							{user.username}
						</Typography>

						<Typography color="#fff">{user.graduationYear}</Typography>

						<Stack direction="column" marginTop={5} gap={1}>
							<Typography color="#fff" variant="h6">
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

						<Stack direction="row" sx={{ color: "#fff" }} gap={3} marginTop={3}>
							<a
								href={user.linkedin_handle}
								target="_blank"
								key="linkedin"
								rel="noreferrer"
							>
								<IconButton
									sx={{
										border: "1px solid",
										borderColor: "divider",
									}}
								>
									<LinkedInIcon />
								</IconButton>
							</a>

							<a
								href={user.twitter_handle}
								target="_blank"
								key="twitter"
								rel="noreferrer"
							>
								<IconButton
									sx={{
										border: "1px solid",
										borderColor: "divider",
									}}
								>
									<TwitterIcon />
								</IconButton>
							</a>
						</Stack>
					</Stack>

					<Stack className="image-box" flexGrow={1} alignItems="center">
						<Stack
							height="100%"
							width="100%"
							justifyContent="center"
							alignItems="center"
							sx={{
								"&:hover": {
									"& .MuiAvatar-root": {
										filter: "brightness(1.05)",
									},
								},
								height: "fit-content",
								width: "fit-content",
							}}
						>
							<Avatar
								justifyContent={"center"}
								alignItems={"center"}
								sx={{
									width: 255,
									height: 255,
									border: 5,
									color: "#52527a",
									backgroundColor: "transparent",
									position: "relative",
								}}
							>
								{loading && (
									<CircularProgress
										sx={{
											color: "white",
											position: "relative",
											transform: "translate(-50%, -50%)",
										}}
										size={40}
									/>
								)}
								<Avatar
									sx={{
										width: 250,
										height: 250,
										display: loading ? "none" : "block",
									}}
									src={user.avatar}
									onLoad={() => setLoading((loading) => !loading)}
								/>
							</Avatar>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
