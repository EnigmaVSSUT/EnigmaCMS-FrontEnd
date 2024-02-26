import { Stack, Divider, Typography } from "@mui/material";
import eventStyles from "../events.module.css";

export default function EventCard({ key, date, title, info }) {
	return (
		<Stack
			className={eventStyles.eventcard}
			width={"650px"}
			key={key}
			padding={4}
			borderRadius={2}
		>
			<Stack className={eventStyles.upper} paddingY={2} gap={1}>
				<Typography variant="h6">{date}</Typography>
				<Stack>
					<Divider className={eventStyles.divider} />
					<Divider className={eventStyles.dividerGreen} />
				</Stack>
			</Stack>

			<Stack gap={2}>
				<Typography variant="h4" sx={{ color: "#35FF1F" }}>
					{title}
				</Typography>

				<Typography>{info}</Typography>
			</Stack>
		</Stack>
	);
}
