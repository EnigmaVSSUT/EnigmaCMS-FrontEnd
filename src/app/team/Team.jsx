import { Stack } from "@mui/material";
import SideTab from "./components/SideTab";
import AnimatePage from "../../ui/AnimatePage";

export default function Team() {
	return (
		<AnimatePage>
			<Stack direction={"row"} flexGrow={1} borderColor={"#fff"}>
				<SideTab />
			</Stack>
		</AnimatePage>
	);
}