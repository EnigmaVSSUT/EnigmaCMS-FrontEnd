import { Stack, TextField, Button, Typography, Icon, IconButton } from "@mui/material";
import EventCard from "./EventCard";
import useDatePicker from "../../../shared/store/useDatePicker";
import { useEffect, useState } from "react";
import { HighlightOff } from "@mui/icons-material";

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

	const filterDataList = () => {
		if (value.trim() === "") {
			// If input is empty, reset result to show all events
			setResult(totalData);
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
          onKeyDown={(e)=>{
            if(e.key ==='Enter'){
              filterDataList()
            }
          }}
					InputProps={{
						endAdornment: (
								<IconButton onClick={() => {
                  setResult(totalData)
                  setValue("")
                }} sx={{
                  display: value.length > 0 ? "block" : "none" 
                }}>
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
