import { Stack, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import AnimatePage from "../../ui/AnimatePage";
import projectStyles from "./projects.module.css";
import ProjectCard from "./components/ProjectCard";

export default function Projects() {
	const [value, setValue] = useState("one");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	console.log(value);
	return (
		<AnimatePage>
			<Stack
				justifyContent="flex-start"
				alignItems={"center"}
				position="relative"
				paddingBottom={"2rem"}
			>
				<Typography variant="h2" paddingY="20px">
					Projects
				</Typography>

				<Stack paddingY={2} borderRadius={3}>
					<Tabs
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
				</Stack>

				<Stack
					direction={"row"}
					justifyContent={"center"}
					alignItems={"center"}
					flexWrap={"wrap"}
					gap={6}
					padding={6}
				>
					{value === "one" && (
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
					)}
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
