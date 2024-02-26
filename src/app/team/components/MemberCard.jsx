import {
	Avatar,
	Button,
	Card,
	IconButton,
	Stack,
	Typography,
} from "@mui/material";
import cardStyles from "../team.module.css";
import LanguageIcon from "@mui/icons-material/Language";
import AndroidIcon from "@mui/icons-material/Android";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function MemberCard({ memberImage, memberName, memberUsername }) {
	const profileRedirect = () => {
		const newPageUrl = "/profile/" + memberUsername;
		window.open(newPageUrl, "_blank");
	};

	return (
		<Card
			className={cardStyles.memberCard}
			sx={{
				borderRadius: "15px",
				padding: "3rem",
				direction: "column",
				gap: "5px",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				minWidth: "300px",
				minHeight: "350px",
			}}
		>
			<Stack
				position={"absolute"}
				height={"fit-content"}
				width={"fit-content"}
				left={20}
				top={20}
			>
				<Typography variant="h6">🎯</Typography>
			</Stack>
			<Stack
				direction={"column"}
				gap={3}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Avatar
					alt={memberName}
					sx={{ width: 100, height: 100 }}
					src={memberImage}
				/>

				<Stack
					className={cardStyles.overlay}
					position={"absolute"}
					bottom={0}
					left={0}
					right={0}
					top={"55%"}
					minHeight={"260px"}
					direction={"column"}
				>
					<IconButton
							className={cardStyles.newtab}	
							sx={{ position: "absolute", top: "0px", right: "10px" }}
							variant="outlined"
							onClick={profileRedirect}
						>
							<OpenInNewIcon style={{ color: "white", fontSize: "20px" }} />
						</IconButton>
					<Stack
						className="overlay-body"
						position={"relative"}
						gap={2}
						marginTop={"1.5rem"}
						alignItems={"center"}
					>
							
						<Typography className={cardStyles.memberName} textAlign={"center"} variant="body1">{memberName}</Typography>
						<Typography variant="caption">Code and coffee is life!</Typography>
						<Stack direction={"row"} gap={2}>
							<IconButton
							className={cardStyles.domainIcon}
								sx={{
									border: "1px solid",
									borderColor: "divider",
									borderRadius: "50%",
								}}
							>
								<LanguageIcon />
							</IconButton>

							<IconButton
								sx={{
									border: "1px solid",
									borderColor: "divider",
									borderRadius: "50%",
								}}
							>
								<AndroidIcon />
							</IconButton>

							<IconButton
								sx={{
									border: "1px solid",
									borderColor: "divider",
									borderRadius: "50%",
								}}
							>
								<SmartToyIcon />
							</IconButton>
						</Stack>

					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
}
