// TeamMembersSection.js

import {
	Card,
	CardContent,
	Avatar,
	Typography,
	Grid,
	Box,
} from "@mui/material";

const TeamMembersSection = ({ teamMembers }) => {
	return (
		<Grid container spacing={3} style={{ marginTop: 20, marginBottom: 20 }}>
			{teamMembers.map((member, index) => (
				<Grid item xs={12} sm={6} md={4} key={index}>
					<Box display="flex" justifyContent="center">
						<Card  style={{ backgroundColor:"white",width:"70%"}}>
							<CardContent>
								<Grid container alignItems="center">
									<Grid item>
										<Avatar
											src={member.avatar}
											alt={member.name}
											style={{ width: 60, height: 60 }}
										/>
									</Grid>
									<Grid item xs={8} style={{ paddingLeft: 10 }}>
										<Typography
											variant="h5"
											
											style={{
												fontWeight: 900,
												fontSize: "18px",
												color: "black",
											}}
										>
											{member.name}
										</Typography>
										<Typography variant="body1" style={{color:"black",fontSize:"14px",fontWeight:500}}>
											{member.designation}
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Box>
				</Grid>
			))}
		</Grid>
	);
};

export default TeamMembersSection;
