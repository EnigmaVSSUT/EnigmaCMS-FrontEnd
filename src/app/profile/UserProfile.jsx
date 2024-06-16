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
import AnimatePage from "../../ui/AnimatePage";
import baseAPIMethods from "../../lib/axios/base";
import useUserProfile from "./store/useUserProfile";

export default function UserProfile({ username }) {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({
		username: '',
		name: '',
		avatar: '',
		graduationYear: '',
		linkedin_handle: '',
		twitter_handle: '',
	});

	useEffect(() => {
		if (username) {
			setLoading(true);
			const getUserProfile = async () => {
				try {
					const res = await baseAPIMethods.user.userProfile(username);
					setUser({
						username: res.data.username,
						name: res.data.name,
						avatar: res.data.avatar,
						graduationYear: res.data.graduation_year,
						linkedin_handle: res.data.linkedin_url,
						twitter_handle: res.data.twitter_username,
					});
				} catch (error) {
					console.error("Failed to fetch user profile", error);
				} finally {
					setLoading(false);
				}
			};
			getUserProfile();
		}
	}, [username, setUser]);

	return (
		<AnimatePage>
			<Stack justifyContent="center" alignItems="center">
				<Stack
					border={3}
					boxShadow="0 0 5px 1px"
					sx={{
						flexDirection: { xs: "column-reverse", md: "row" },
						minWidth: { xs: "90%", md: "880px" },
						padding: { xs: 3, sm: 7, md: 12 },
						margin: 8,
					}}
				>
					<Stack className="data-box" gap={2} flexGrow={1}>
						{loading ? (
							<CircularProgress />
						) : (
							<>
								<Typography
									color="#fff"
									variant="h3"
									sx={{
										fontSize: {
											xs: "2.5rem",
											sm: "3rem",
										},
									}}
								>
									{user.name}
								</Typography>
								<Typography color="#fff" variant="h6">
									{user.username}
								</Typography>
								<Typography color="#fff">{user.graduationYear}</Typography>

								<Stack
									direction="column"
									sx={{ marginTop: { xs: 3, sm: 5 } }}
									gap={1}
								>
									<Typography color="#fff" variant="h6">
										Skills
									</Typography>
									<Grid container spacing={1}>
										<Grid item xs="auto">
											<Chip sx={{ width: "fit-content" }} label="React" />
										</Grid>
										<Grid item xs="auto">
											<Chip sx={{ width: "fit-content" }} label="Firebase" />
										</Grid>
										<Grid item xs="auto">
											<Chip sx={{ width: "fit-content" }} label="NextJS" />
										</Grid>
										<Grid item xs="auto">
											<Chip sx={{ width: "fit-content" }} label="wsl" />
										</Grid>
										<Grid item xs="auto">
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
									{user?.twitter_handle && user.twitter_handle !== "" && (
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
									)}
								</Stack>
							</>
						)}
					</Stack>

					<Stack
						className="image-box"
						flexGrow={1}
						alignItems="center"
						sx={{ marginBottom: { xs: 4, sm: 2, md: 0 } }}
					>
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
									width: { xs: 200, sm: 255 },
									height: { xs: 200, sm: 255 },
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
										width: { xs: 190, sm: 250 },
										height: { xs: 190, sm: 250 },
										display: loading ? "none" : "block",
									}}
									src={user.avatar}
									onLoad={() => setLoading(false)}
								/>
							</Avatar>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
