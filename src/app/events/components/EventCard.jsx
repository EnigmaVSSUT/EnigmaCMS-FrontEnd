import { Stack, Divider, Typography } from "@mui/material";
import eventStyles from "../events.module.css";
import { useResponsive } from "../../../hooks/useResponsive";

export default function EventCard({ key, date, title, info }) {
	const { isTablet } = useResponsive();
	return (
		<Stack className={eventStyles.eventcard} sx={{width:{xs:"100%",md:"650px"}}} key={key} padding={4} borderRadius={2}>
			<Stack className={eventStyles.upper} paddingY={2} gap={1}>
				<Typography variant="h6">{date}</Typography>
				<Stack>
					<Divider className={eventStyles.divider} />
					<Divider className={eventStyles.dividerGreen} />
				</Stack>
			</Stack>

			<Stack gap={2}>
				<Typography variant="h4" sx={{ color: "#35FF1F" ,fontSize:{xs:"14px",md:"25px",lg:"40px"},}}>
					{title}
				</Typography>

				<Typography>{info}</Typography>
			</Stack>
		</Stack>
	);
}
