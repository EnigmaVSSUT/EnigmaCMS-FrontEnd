import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import useDatePicker from "../../../shared/store/useDatePicker";
import dayjs from "dayjs";
import { useState } from "react";

export default function Calendar() {
	const [setPickedDate] = useDatePicker((state) => [state.setPickedDate]);
	const [value, setValue] = useState(dayjs());

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["DateCalendar", "DateCalendar"]}>
				<DemoItem>
					<DateCalendar
						value={value}
						onChange={(newValue) => {
							setPickedDate(newValue.format("DD MMMM, YYYY"));
							setValue(newValue);
						}}
					/>
				</DemoItem>
			</DemoContainer>
		</LocalizationProvider>
	);
}
