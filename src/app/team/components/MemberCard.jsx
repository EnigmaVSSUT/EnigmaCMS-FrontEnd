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

export default function MemberCard({ memberImage, memberName }) {
	const profileRedirect = () => {
		const newPageUrl = "/profile/" + memberName;
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
					<Stack
						className="overlay-body"
						position={"relative"}
						gap={2}
						height={"100%"}
						marginTop={"1rem"}
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

						<Button
							sx={{ position: "absolute", bottom: "20px" }}
							variant="outlined"
							onClick={profileRedirect}
						>
							View Profile
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Card>
	);
}