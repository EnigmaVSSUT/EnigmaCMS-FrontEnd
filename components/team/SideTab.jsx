import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AllTeam from "./AllTeam";
import { Stack } from "@mui/material";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const domains = [
	"All",
	"Web Devs",
	"App Devs",
	"AI/Ml Devs",
	"CyberSecurity Devs",
	"UI/UX designers",
	"Content Writers",
];

export default function SideTab() {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				flexGrow: 1,
				bgcolor: "background.paper",
				display: "flex",
			}}
			width={"100vw"}
			position={"relative"}
		>
			<Stack
				sx={{
					border: 1,
					borderColor: "divider",
					minWidth: "16rem",
          display:'block',
					position: "fixed",
					top: "0",
					left: "0",
					bottom: "0",
					zIndex: "1",
          maxHeight: "100vh",
				}}
			>
				<Tabs
					orientation="vertical"
					variant="standard"
					value={value}
					onChange={handleChange}
					sx={{ marginTop: "2rem" }}
				>
					<Tab label="All" />
					<Tab label="Web Devs" />
					<Tab label="App Devs" />
					<Tab label="AI/Ml Devs" />
					<Tab label="CyberSecurity Devs" />
					<Tab label="UI/UX designers" />
					<Tab label="Content Writers" />
				</Tabs>
			</Stack>

			<Stack minWidth={"16rem"}></Stack>

			<TabPanel value={value} index={0}>
				<AllTeam />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Web devs
			</TabPanel>
			<TabPanel value={value} index={2}>
				App Devs
			</TabPanel>
			<TabPanel value={value} index={3}>
				Ai/ML Devs
			</TabPanel>
			<TabPanel value={value} index={4}>
				cybersecurity Devs
			</TabPanel>
			<TabPanel value={value} index={5}>
				UI/UX designers
			</TabPanel>
			<TabPanel value={value} index={6}>
				Content Writers
			</TabPanel>
		</Box>
	);
}
