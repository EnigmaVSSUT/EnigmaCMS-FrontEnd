import { Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import projectStyles from "../projects.module.css";

export default function ProjectCard() {
	return (
		<Stack
			className={projectStyles.projectCard}
			maxWidth={"400px"}
			borderRadius={2}
			sx={{
				backgroundColor: "rgba(72, 75, 73, 0.5)",
			}}
		>
			<Stack className="image-wrapper">
				<img
					style={{
						objectFit: "cover",
						borderRadius: "6px 6px 0 0",
					}}
					src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</Stack>
			<Stack className={projectStyles.data} gap={2} padding={3}>
				<Typography variant="h4" className={projectStyles.projectTitle}>
					Enigma-CMS
				</Typography>

				<Typography variant="body1" color={"#ABABAB"}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					quae.
				</Typography>

				<Stack
					className="stats"
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"top"}
					gap={4}
					paddingTop={4}
					paddingInline={3}
				>
					<Stack
						className="commits"
						justifyContent={"start"}
						alignItems={"start"}
						gap={1}
					>
						<Typography>Commits</Typography>

						<Stack
							direction={"row"}
							gap={1}
							justifyContent={"center"}
							alignItems={"center"}
						>
							<img
								style={{
									width: "30px",
									height: "30px",
								}}
								src="/assets/commits.png"
								alt=""
							/>
							<Typography fontWeight={'550'}>124</Typography>
						</Stack>
					</Stack>

					<Stack
						className="Contributors"
						justifyContent={"start"}
						alignItems={"start"}
						gap={1}
					>
						<Typography>Contributors</Typography>

						<AvatarGroup max={4}>
							<Avatar
								alt="Remy Sharp"
								src="https://images.unsplash.com/photo-1609543563735-d7cfaf71addb?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
							<Avatar
								alt="Travis Howard"
								src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
							<Avatar
								alt="Cindy Baker"
								src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1964&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
							<Avatar
								alt="Agnes Walker"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
							<Avatar
								alt="Trevor Henderson"
								src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							/>
						</AvatarGroup>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}
