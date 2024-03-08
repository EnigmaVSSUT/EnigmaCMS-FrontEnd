import { Stack, Typography } from "@mui/material";
import AnimatePage from "../../ui/AnimatePage";
import eventStyles from "./events.module.css";
import EventList from "./components/EventList";
import Calender from "./components/Calender";
import { useResponsive } from "../../hooks/useResponsive";

export default function Events() {
	const { isLaptop, isTablet } = useResponsive();
	return (
		<AnimatePage>
			<Stack
				justifyContent="flex-start"
				alignItems={"center"}
				position="relative"
				paddingBottom={"2rem"}
			>
				<Typography variant={isTablet ? "h4" : "h2"} paddingY="20px">
					Events
				</Typography>
				<Stack
					paddingY={3}
					direction={isLaptop ? "column-reverse" : "row"}
					gap={isTablet ? 10 : 20}
				>
					<Stack className={eventStyles.eventsList}>
						<EventList />
					</Stack>
					<Stack className={eventStyles.calender} padding={3}>
						<Calender />
					</Stack>
				</Stack>
			</Stack>
		</AnimatePage>
	);
}
