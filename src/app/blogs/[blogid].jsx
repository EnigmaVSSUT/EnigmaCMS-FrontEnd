import { Divider, Stack, Typography } from "@mui/material";
import AnimatePage from "../../ui/AnimatePage";

export default function SingleBlog() {
	return (
		<AnimatePage>
			<Stack justifyContent="center" alignItems="center" paddingY="40px">
				<Stack
					width={"100%"}
					direction="row-reverse"
					justifyContent="center"
					alignItems="center"
					padding="30px"
					paddingX="50px"
				>
					<Stack classNameName="image container">
						<img
							src={
								"https://images.unsplash.com/photo-1680459575585-390ed5cfcae0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
							}
							alt="image"
							width="600rem"
							height="600rem"
							style={{ objectFit: "cover" }}
						/>
					</Stack>

					{/* <Divider orientation="vertical" flexItem sx={{marginLeft:'50px'}}/> */}

					<Stack
						classNameName="content container"
						height={"100%"}
						padding="20px"
						marginRight={"50px"}
						flexGrow={1}
					>
						<Stack direction="column" minHeight={"35rem"} flexGrow={1}>
							<Stack direction="row" gap="20px">
								<Typography variant="h6">AI, Midjourney</Typography>

								<Divider orientation="vertical" flexItem />

								<Typography variant="h6">2 Jan 2023</Typography>
							</Stack>

							<Stack direction="column" flexGrow={1}></Stack>

							<Typography variant="h1">An Article about Mid Journey</Typography>
						</Stack>
					</Stack>
				</Stack>
				<Typography variant="body1" maxWidth="90vw" marginTop="20px">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam
					praesentium porro quae cupiditate officia explicabo esse maxime
					tempora culpa facere, error nihil dolore, odit adipisci expedita
					voluptates exercitationem placeat? Lorem, ipsum dolor sit amet
					consectetur adipisicing elit. Dolor nesciunt, consectetur voluptatibus
					tenetur possimus repellat laudantium repudiandae earum saepe, non
					laboriosam ipsa? Quia officia voluptatum dolorem debitis voluptates
					maxime vel? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Fugiat quisquam, non quidem quod veritatis ea natus accusantium
					blanditiis praesentium rem iure omnis quomm commodi dolorum nobis
					provident reiciendis unde nihil!
				</Typography>
			</Stack>
		</AnimatePage>
	);
}
