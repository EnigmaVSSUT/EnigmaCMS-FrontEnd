import { Stack, Typography } from "@mui/material";
// import { useState } from "react";
import AnimatePage from "../../ui/AnimatePage";

import ProjectCard from "./components/ProjectCard";
import img1 from "/assets/image1.png?url"
import img4 from "/assets/image4.jpg?url"
import img5 from "/assets/image5.png?url"
import img6 from "/assets/image6.jpg?url"
import img7 from "/assets/image7.png?url"
import img8 from "/assets/image8.jpg?url"
import img2 from "/assets/image2.jpg?url"


export default function Projects() {
	// const [value, setValue] = useState("one");

	// const handleChange = (event, newValue) => {
	// 	setValue(newValue);
	// };

	// console.log(value);
	return (
		<AnimatePage>
			<Stack
				justifyContent="flex-start"
				alignItems={"center"}
				position="relative"
				paddingBottom={"2rem"}
			>
				<Typography variant="h2" paddingY="20px" sx={{fontSize:{xs:"30px",md:"45px",lg:"60px"},}}>
					Projects
				</Typography>

				{/* <Stack paddingY={2} borderRadius={3}> */}
					{/* <Tabs
						value={value}
						onChange={handleChange}
						textColor="green"
						aria-label="secondary tabs example"
						sx={{
							background: "rgba(38, 28, 78, 0.2)",
							borderRadius: "5px",
						}}
					>
						<Tab
							sx={{
								"&.Mui-selected": {
									color: "#000",
									backgroundColor: "#35FF1F",
									borderRadius: "5px",
								},
							}}
							className={projectStyles.tab}
							value="one"
							label="Upcoming"
						/>
						<Tab
							sx={{
								"&.Mui-selected": {
									color: "#000",
									backgroundColor: "#35FF1F",
									borderRadius: "5px",
								},
							}}
							className={projectStyles.tab}
							value="two"
							label="Ongoing"
						/>
						<Tab
							sx={{
								"&.Mui-selected": {
									color: "#000",
									backgroundColor: "#35FF1F",
									borderRadius: "5px",
								},
							}}
							className={projectStyles.tab}
							value="three"
							label="Archieved"
						/>
					</Tabs>
				</Stack> */}

				<Stack
					direction={"row"}
					justifyContent={"center"}
					alignItems={"center"}
					flexWrap={"wrap"}
					gap={6}
					sx={{margin:{xs:"20px",md:"48px"}}}
				>
					{/* {value === "one" && (
						<>
							<ProjectCard />
							<ProjectCard />
						</>
					)}

					{value === "two" && (
						<>
							<ProjectCard />
							<ProjectCard />
							<ProjectCard />
						</>
					)}

					{value === "three" && (
						<>
							<ProjectCard />
						</>
					)} */}
					<ProjectCard  title="WMS" status="ongoing" content="Innovative waste system with real-time dustbin tracker website promotes efficient disposal for a cleaner university environment." imgUrl={img7} />
					<ProjectCard  title="Ritrovo" status="ongoing" content="Ritrovo unifies clubs, updates students, revolutionizes attendance for enjoyable university life." imgUrl={img1} />
					<ProjectCard  title="VSIEGE" status="ongoing" content="Multiplayer game where we need to choose loadout, spawn with team, hunt enemies, use cover, win match, check stats." imgUrl={img5} />
					<ProjectCard  title="Enigma-Ui-Kit" status="ongoing" content="CSS framework like MUI it offers a streamlined approach to creating user interfaces. It provides a familiar yet nimble toolkit for developers." imgUrl={img6} />
					<ProjectCard  title="SMS" status="ongoing" content="VSSUT's Student Management System app enhances connectivity, streamlining student information." imgUrl={img8} />

					<ProjectCard  title="Schedule" status="upcoming" content="Efficiently manage tasks with our user-friendly schedule app for streamlined organization, productivity, and stress-free planning." imgUrl={img4} />
				</Stack>
			</Stack>
		</AnimatePage>
	);
}