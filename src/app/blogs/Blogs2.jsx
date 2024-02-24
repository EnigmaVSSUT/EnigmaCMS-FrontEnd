// import { Divider, Stack, Typography } from "@mui/material";
// import blogStyles from "./blogs.module.css";
// import AnimatePage from "../../ui/AnimatePage";
// // import useLoading from "../../shared/store/useLoading";

// const blogs = [
// 	{
// 		title: "Blog 1",
// 		reference: "AI, Midjourney",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "15 Mar 2023",
// 		img: "https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
// 		author: "Rohit Kumar",
// 	},
// 	{
// 		title: "Blog 2",
// 		reference: "Devops, Midjourney",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "7 Mar 2023",
// 		img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=578&q=80",
// 		author: "Donald Duck",
// 	},
// 	{
// 		title: "Blog 3",
// 		reference: "UI/UX, designing",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "21 Feb 2023",
// 		img: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
// 		author: "Soumya Sagar",
// 	},
// 	{
// 		title: "Blog 4",
// 		reference: "AI, Midjourney",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "2 Jan 2023",
// 		img: "https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
// 		author: "Anya ",
// 	},
// ];

// export default function Blogs2() {
// 	return (
// 		<AnimatePage>
// 			<Stack justifyContent="center" alignItems="center">
// 				{blogs.map((blog, index) => (
// 					<Stack
// 						key={index}
// 						width={"100%"}
// 						direction={index % 2 === 0 ? "row" : "row-reverse"}
// 						justifyContent="center"
// 						alignItems="center"
// 						padding="30px"
// 						paddingX="50px"
// 						backgroundColor={index % 2 === 0 ? "#1a1a1a;" : "#0f0e0e"}
// 						className={blogStyles.main}
// 					>
// 						<Stack className="image container">
// 							<img
// 								src={blog.img}
// 								alt="image"
// 								width="600rem"
// 								height="600rem"
// 								style={{ objectFit: "cover" }}
// 							/>
// 						</Stack>

// 						{/* <Divider orientation="vertical" flexItem sx={{marginLeft:'50px'}}/> */}

// 						<Stack
// 							className="content container"
// 							height={"100%"}
// 							padding="20px"
// 							{...(index % 2 === 0
// 								? { marginLeft: "50px" }
// 								: { marginRight: "50px" })}
// 							flexGrow={1}
// 						>
// 							<Stack direction="column" minHeight={"35rem"} flexGrow={1}>
// 								<Stack direction="row" gap="20px">
// 									<Typography>{blog.reference}</Typography>

// 									<Divider orientation="vertical" flexItem />

// 									<Typography>{blog.date}</Typography>
// 								</Stack>

// 								<Stack direction="column" flexGrow={1}></Stack>

// 								<Typography className={blogStyles.title} variant="h1">
// 									{blog.title}
// 								</Typography>
// 							</Stack>
// 						</Stack>
// 					</Stack>
// 				))}
// 			</Stack>
// 		</AnimatePage>
// 	);
// }
