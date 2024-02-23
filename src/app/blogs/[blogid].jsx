import { Divider, Stack, Typography } from "@mui/material";
import AnimatePage from "../../ui/AnimatePage";
import blogs from "../blogs/blogsdata.js";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleBlog() {
	const {blogid} = useParams()
	return (
		<AnimatePage>
			<Stack justifyContent="center" alignItems="center" paddingY="40px" >
				<Stack
					width={"100%"}
					// direction="row-reverse"
					justifyContent="center"
					alignItems="center"
					padding="50px"
					paddingX="50px"
					
					sx={{flexDirection : {sm:"column", md: "column", lg : "row-reverse"}}} 
				>
					<Stack className="image container" style={{
						paddingRight: "5rem"
						
					}}
					>
						<img
							src=  {blogs[blogid-1].img} 
							alt="image"
							width="400rem"
							height="400rem" 
							sx={{ paddingRight: 3}}
							style={{ objectFit: "cover"}}
						/>
					</Stack>

					{/* <Divider orientation="vertical" flexItem sx={{marginLeft:'50px'}}/> */}

					<Stack
						className="content container"
						height={"100%"}
						padding="20px"
						marginRight={"50px"}
						flexGrow={1}
					>
						<Stack direction="column" minHeight={"35rem"} flexGrow={1} sx={{justifyContent:"center",alignItems:"center"}}>
							<Stack direction="row" gap="20px" sx={{justifyContent:"center"}}>
								<Typography variant="h6">AI, Midjourney</Typography>

								<Divider orientation="vertical" flexItem />

								<Typography variant="h6">2 Jan 2023</Typography>
								
							</Stack>
							<Stack direction="column" flexGrow={0} ></Stack>
							<Typography variant="h2" marginTop="50px">{blogs[blogid-1].head}</Typography>
							<Typography variant="body1" maxWidth="45vw" marginTop="30px">
				                {blogs[blogid-1].description}
				            </Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</AnimatePage>
	);
}