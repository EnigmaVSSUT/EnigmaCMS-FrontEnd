import {
	Stack,
	TextField,
	Button,
	Typography,
	IconButton,
} from "@mui/material";
import EventCard from "./EventCard";
import useDatePicker from "../../../shared/store/useDatePicker";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { HighlightOff } from "@mui/icons-material";
import { useDebounce } from "../../../hooks/useDebounce";
import { useResponsive } from "../../../hooks/useResponsive";

const datalist1 = [
	{
		date: "Wednesday, November 29",
		title: "Orientation Day",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos.",
	},
];

const datalist2 = [
	{
		date: "Sunday, November 21",
		title: "Enigma Induction",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos.",
	},
	{
		date: "Sunday, November 21",
		title: "Info Session",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos.",
	},
];

const totalData = [...datalist1, ...datalist2];

export default function EventList() {
	const [result, setResult] = useState([]);
	const [value, setValue] = useState("");
	const pickedDate = useDatePicker((state) => state.pickedDate);
	const { isLaptop, isTablet, isMobile } = useResponsive();
	const debouncedQuery = useDebounce(value, 100);

	useEffect(() => {
		if (pickedDate !== "") {
			const filteredByDate = totalData.filter(
				(data) => data.date === pickedDate
			);
			setResult(filteredByDate);
		} else {
			setResult(totalData);
		}
	}, [pickedDate]);

	const filterDataList = (debouncedQuery) => {
		if (debouncedQuery === "" && pickedDate === "") {
			setResult(totalData);
		} else if (pickedDate !== "" && debouncedQuery === "") {
			setResult([]);
			const filtered = totalData.filter((item) => item.date === pickedDate);
			setResult(filtered);
		} else {
			const filtered = totalData.filter(
				(item) =>
					item.title.toLowerCase().includes(value.toLowerCase()) ||
					item.info.toLowerCase().includes(value.toLowerCase())
			);
			setResult(filtered);
		}
	};

	useEffect(() => {
		filterDataList(debouncedQuery);
	}, [debouncedQuery]);

	return (
		<Stack
			gap={3}
			justifyContent={"start"}
			alignItems={"start"}
			width={isMobile ? "300px" : isTablet ? "400px" : "650px"}
		>
			<Stack
				className="search-box"
				width={isLaptop ? "100%" : "70%"}
				position={"relative"}
				left={30}
				direction={"row"}
				gap={3}
			>
				<TextField
					fullWidth
					id="outlined-basic"
					variant="outlined"
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							filterDataList();
						}
					}}
					InputProps={{
						endAdornment: (
							<IconButton
								onClick={() => {
									if (pickedDate !== "") {
										const filteredByDate = totalData.filter(
											(data) => data.date === pickedDate
										);
										setResult(filteredByDate);
									} else {
										setResult(totalData);
									}
									setValue("");
								}}
								sx={{
									display: value.length > 0 ? "flex" : "none",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<HighlightOff />
							</IconButton>
						),
					}}
				/>
				<Button variant="contained" onClick={filterDataList}>
					Filter
				</Button>
			</Stack>

			{result.length === 0 ? (
				<Stack
					paddingY={8}
					width={"100%"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					<Typography variant="h6">No events found</Typography>
				</Stack>
			) : (
				<Stack>
					{result.map((data, idx) => (
						<EventCard
							key={idx}
							date={data.date}
							title={data.title}
							info={data.info}
						/>
					))}
				</Stack>
			)}
		</Stack>
	);
}
