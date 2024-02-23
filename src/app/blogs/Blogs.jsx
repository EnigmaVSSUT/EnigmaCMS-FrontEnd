import { Stack, Typography } from "@mui/material";
import blogStyles from "./blogs.module.css";
import AnimatePage from "../../ui/AnimatePage";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import img1 from "/assets/blog-1.jpg?url"
// import img2 from "/assets/blog-2.jpg?url"
// import img3 from "/assets/blog-3.jpg?url"
// import img4 from "/assets/blog-4.jpg?url"
// import img5 from "/assets/blog-5.jpg?url"
import blogs from "../blogs/blogsdata.js";
// import { useEffect } from "react";


// const blogs = [
// 	{
// 		id: 1,
// 		title: "Explore the exhilarating voyage into the future with the Language Model Showdown Let's delve into the clash of titans: Google's Gemini and OpenAI's ChatGPT.",
// 		reference: "AI, Midjourney",
// 		description:
// 			"Explore the exhilarating voyage into the future with the Language Model Showdown Let's delve into the clash of titans: Google's Gemini and OpenAI's ChatGPT. Discover the core differences, from Gemini's native multimodality to ChatGPT's versatile adaptations. Embark on Gemini's trio of options and the unparalleled data advantage it gains from Google's vast empire. Uncover the benchmarks where Gemini Ultra shines and anticipate the game-changing GPT-5 from OpenAI. The future is bright as both models evolve, promising groundbreaking innovations. Join the conversation and share your insights on this epic face-off!",
// 		date: "15 Mar 2023",
// 		img: img1,
// 		author: "Rohit Kumar",
// 	},
// 	{
// 		id: 2,
// 		title: "Encapsule the future of security with Quantum Cryptography! This technology harnesses the principles of quantum mechanics to create codes that can safeguard sensitive information",
// 		reference: "Devops, Midjourney",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "7 Mar 2023",
// 		img: img2,
// 		author: "Donald Duck",
// 	},
// 	{
// 		id: 3,
// 		title: "App development with Project IDX! This cloud-based IDE harnesses AI for code completion, chatbot assistance, and effortless local-to-cloud transitions.",
// 		reference: "UI/UX, designing",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "21 Feb 2023",
// 		img: img3,
// 		author: "Soumya Sagar",
// 	},
// 	{
// 		id: 4,
// 		title: "Bun.sh is a modern javascript runtime developed to improve the speed, compatibility and overall user experience.",
// 		reference: "AI, Midjourney",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "2 Jan 2023",
// 		img: img4,
// 		author: "Anya ",
// 	},
// 	{
// 		id: 5,
// 		title: "Empower your AI and data projects with Paperspace's cloud solutions - where innovation meets accessibility!",
// 		reference: "Web Dev, Designing",
// 		description:
// 			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// 		date: "1 Jan 2023",
// 		img: img5,
// 		author: "Loid",
// 	},
// ];


// useEffect(() => {
// 	console.log("ok "+blogs)
// }, [])

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
				<Typography variant="h2" className={blogStyles.blogs} paddingY="20px">
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
							className={blogStyles.main}
							key={index}
							minHeight="300px"
							minWidth="400px"
							borderRadius="20px"
							position="relative"
						>
							<img
								className={blogStyles.blogimage}
								height="300px"
								width="400px"
								src={blog.img}
								alt={blog.title}
								style={{ objectFit: "cover", borderRadius: "20px" }}
							/>
							<Stack
								className={blogStyles.title}
								position="absolute"
								bottom="20px"
								paddingX="20px"
								direction="column"
								alignItems="self-start"
								justifyContent="space-between"
							>
								<Typography variant="h6">{blog.title}</Typography>
								<Typography variant="caption">{blog.date}</Typography>
							</Stack>
							<Stack
								className={blogStyles.newtab}
								onClick={() => openBlog(blog.id)}
								position="absolute"
								right="20px"
								bottom="30px"
							>
								<OpenInNewIcon style={{ color: "white", fontSize: "20px" }} />
							</Stack>
						</Stack>
					))}
				</Stack>

				<Stack className={blogStyles.more} direction='row' sx={{ position: "absolute", right: "60px", bottom: "40px" }}>
					
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