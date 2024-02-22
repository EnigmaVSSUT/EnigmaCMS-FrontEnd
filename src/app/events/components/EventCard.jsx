import { Stack, Divider, Typography } from "@mui/material";
import eventStyles from "../events.module.css";

export default function EventCard({ key,date, title, info }) {
	return (
		<Stack classNameName={eventStyles.eventcard} width={"650px"} key={key} padding={4} borderRadius={2}>
			<Stack classNameName={eventStyles.upper} paddingY={2} gap={1}>
				<Typography variant="h6">{date}</Typography>
                <Stack>
				<Divider
                 classNameName={eventStyles.divider}
                 />
                 <Divider
                 classNameName={eventStyles.dividerGreen}
                 />
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
