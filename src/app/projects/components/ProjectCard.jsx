import { Stack, Typography } from "@mui/material";
// import Avatar from "@mui/material/Avatar";
// import AvatarGroup from "@mui/material/AvatarGroup";
import projectStyles from "../projects.module.css";
import Box from '@mui/material/Box';
export default function ProjectCard({imgUrl,title,content,status}) {
	return (
		<Stack
			className={projectStyles.projectCard}
			maxWidth={"400px"}
			borderRadius={2}
			sx={{
				backgroundColor: "rgba(72, 75, 73, 0.5)",
			
			}}
		>
			<Stack className="image-wrapper" sx={{ height:"300px"}}>
				<img
					style={{
						objectFit: "cover",
						borderRadius: "6px 6px 0 0",
					}}
					src={imgUrl}
					alt=""
					width="100%"
					height="100%"
				/>
			</Stack>
			<Stack className={projectStyles.data} gap={2} padding={3}>
			<Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
			<Typography variant="h4" className={projectStyles.projectTitle}>
					{title}
				</Typography>
				<Typography variant="h4" className={projectStyles.projectTitle}>
					{status}
				</Typography>
			</Box>
				

				<Typography variant="body1" color={"#ABABAB"}>
					{content}
				</Typography>

				{/* <Stack
					className="stats"
					direction={"row"}
					justifyContent={"space-between"}
					alignItems={"top"}
					gap={4}
					paddingTop={4}
					paddingInline={3}
					sx={{border:"1px solid red"}}
				>
					<Stack
						className="commits"
						justifyContent={"start"}
						alignItems={"start"}
						gap={1}
						sx={{border:"1px solid red"}}
					>
						<Typography>Commits</Typography>

						<Stack
							direction={"row"}
							gap={1}
							justifyContent={"center"}
							alignItems={"center"}
							sx={{border:"1px solid red"}}
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
						sx={{border:"1px solid red"}}
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
				</Stack> */}
			</Stack>
		</Stack>
	);
}
