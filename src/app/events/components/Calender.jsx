import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import useDatePicker from "../../../shared/store/useDatePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useResponsive } from "../../../hooks/useResponsive";

export default function Calendar() {
	const [setPickedDate] = useDatePicker((state) => [state.setPickedDate]);
	const [value, setValue] = useState();
	const pickedDate = useDatePicker((state) => state.pickedDate);
	const { isLaptop, isTablet } = useResponsive();

	return (
		<Stack
			direction={isTablet ? "column" : "row"}
			gap={isTablet ? 2 : 10}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={["DateCalendar", "DateCalendar"]}>
					<DemoItem>
						<DateCalendar
							value={value}
							onChange={(newValue) => {
								setPickedDate(newValue.format("dddd, MMMM DD"));
								setValue(newValue);
							}}
						/>
					</DemoItem>
				</DemoContainer>
			</LocalizationProvider>
			{isLaptop && (
				<Stack>
					<Typography variant={isTablet ? "h6" : "h4"}>{pickedDate}</Typography>
				</Stack>
			)}
		</Stack>
	);
}
