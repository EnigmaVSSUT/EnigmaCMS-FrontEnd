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
import { HighlightOff } from "@mui/icons-material";

const datalist1 = [
	{
		date: "20 February, 2024",
		title: "Orientation Day",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos.",
	},
];

const datalist2 = [
	{
		date: "17 November, 2024",
		title: "Enigma Induction",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos.",
	},
	{
		date: "18 March, 2024",
		title: "Info Session",
		info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos.",
	},
];

const totalData = [...datalist1, ...datalist2];

export default function EventList() {
	const [result, setResult] = useState([]);
	const [value, setValue] = useState("");
	const pickedDate = useDatePicker((state) => state.pickedDate);

	useEffect(() => {
		console.log(pickedDate)
		if (pickedDate !== "") {
			const filteredByDate = totalData.filter(
				(data) => data.date === pickedDate
			);
			setResult(filteredByDate);
		} else {
			setResult(totalData);
		}
	}, [pickedDate]);

	const filterDataList = () => {
		if (value.trim() === "" && pickedDate === "") {
			setResult(totalData);
		} else if (pickedDate !== "" && value === "") {
			setResult([])
			const filtered = totalData.filter(
				(item) =>
					item.date === pickedDate
			);
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

	return (
		<Stack
			gap={3}
			justifyContent={"start"}
			alignItems={"start"}
			width={"650px"}
		>
			<Stack
				className="search-box"
				width={"70%"}
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
									}else {
										setResult(totalData);
									}
									setValue("");
								}}
								sx={{
									display: value.length > 0 ? "flex" : "none",
									justifyContent: "center",
									alignItems: "center"
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
