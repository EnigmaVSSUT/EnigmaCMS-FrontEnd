import { Stack, Typography } from "@mui/material";
import blogStyles from "./blogs.module.css";
import AnimatePage from "../../ui/AnimatePage";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const blogs = [
	{
		id: 1,
		title: "Blog 1",
		reference: "AI, Midjourney",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		date: "15 Mar 2023",
		img: "https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
		author: "Rohit Kumar",
	},
	{
		id: 2,
		title: "Blog 2",
		reference: "Devops, Midjourney",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		date: "7 Mar 2023",
		img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=578&q=80",
		author: "Donald Duck",
	},
	{
		id: 3,
		title: "Blog 3",
		reference: "UI/UX, designing",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		date: "21 Feb 2023",
		img: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
		author: "Soumya Sagar",
	},
	{
		id: 4,
		title: "Blog 4",
		reference: "AI, Midjourney",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		date: "2 Jan 2023",
		img: "https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
		author: "Anya ",
	},
	{
		id: 5,
		title: "Blog 5",
		reference: "Web Dev, Designing",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
		date: "1 Jan 2023",
		img: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1152&q=80",
		author: "Loid",
	},
];

export default function Blogs() {
	const openBlog = (id) => {
		// console.log("id",id);
		window.open(`/blogs/${id}`, "_blank");
	};

	return (
		<AnimatePage>
			<Stack
				orderColor="#f0f"
				justifyContent="flex-start"
				alignItems={"center"}
				position="relative"
				paddingBottom="10rem"
			>
				<Typography variant="h2" classNameName={blogStyles.blogs} paddingY="20px">
					Blogs
				</Typography>
				<Stack
					padding="20px"
					direction="row"
					gap="40px"
					justifyContent={"center"}
					alignItems={"center"}
					flexWrap="wrap"
				>
					{blogs.map((blog, index) => (
						<Stack
							id={blog.id}
							classNameName={blogStyles.main}
							key={index}
							minHeight="300px"
							minWidth="400px"
							borderRadius="20px"
							position="relative"
						>
							<img
								classNameName={blogStyles.blogimage}
								height="300px"
								width="400px"
								src={blog.img}
								alt={blog.title}
								style={{ objectFit: "cover", borderRadius: "20px" }}
							/>
							<Stack
								classNameName={blogStyles.title}
								position="absolute"
								bottom="20px"
								paddingX="20px"
								direction="column"
								alignItems="self-start"
								justifyContent="space-between"
							>
								<Typography variant="h5">{blog.title}</Typography>
								<Typography variant="caption">{blog.date}</Typography>
							</Stack>
							<Stack
								classNameName={blogStyles.newtab}
								onClick={() => openBlog(blog.id)}
								position="absolute"
								right="20px"
								bottom="30px"
							>
								<OpenInNewIcon style={{ color: "white", fontSize: "25px" }} />
							</Stack>
						</Stack>
					))}
				</Stack>

				<Stack classNameName={blogStyles.more} direction='row' sx={{ position: "absolute", right: "60px", bottom: "40px" }}>
					
					<IconButton
						sx={{
							border: "1px solid",
							borderColor: "divider",
							borderRadius: "100%",
						}}
					>
						<ArrowForwardIosIcon
							sx={{ borderRadius: "100%", height: "30px", width: "30px" }}
						/>
					</IconButton>
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
