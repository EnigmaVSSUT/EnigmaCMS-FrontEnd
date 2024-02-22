// import { Stack } from "@mui/material";
// import SideTab from "./components/SideTab";
// import AnimatePage from "../../ui/AnimatePage";

// export default function Team() {
// 	return (
// 		<AnimatePage>

// 			<Stack direction={"row"} flexGrow={1} borderColor={"#fff"}>
// 				<SideTab />
// 			</Stack>

// 		</AnimatePage>
// 	);
// }

















// Khitish's code


import TeamMembersSection from "./TeamMembersSection";

const teamMembersData = [
	//final-years
	{
		name: "ISHITA SATHPATHY",
		designation: "Developer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ADYASHA SAMAL",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "CHANDAN KUMAR HABODA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "HEMADRI TANAYA SATPATHY",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "DHAIRYA JOSHI",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "RAVINDRA NAG",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "RUCHIRA PRIYADARSHINI",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SWADESH PANDA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SWAPNIL KUMAR SAHU",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "AASHWASTI PANDIA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SMRUTI RANJAN ROUT",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "GYANA RANJAN PANDA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SMRUTI RANJAN BADATYA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "CHINMAYA CHINTAN MISHRA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SOMNATH SINGH",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SURAJ MOHAPATRA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "LALIT KUMAR",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SANDEEPAN MOHANTY",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SIBASUNDER BEHERA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "PRACHI SUMAN",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SWAYAM PRAKASH BARIK",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ADRASH KUMAR GOSWAMI",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "PALLAV KUMAR PATRA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "DEBABRATA MOHAPATRA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "SUBHRAJYOTI",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "RAJAT KUMAR NAYAK",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "TANUSRIYA MAHAWAR",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "PRATHAM MISHRA",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "OM PARMAR",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "BISWAJEET NAYAK",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "RAJSEKHER PRADHAN",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "KUMAR BISHWA KALYAN",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "RATAN KUMAR TRIPATHY",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "NIKHIL KUMAR SAHU",
		designation: "Designer",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

	//pre final-years
	{
		name: "PRERIT AGRAWAL",
		designation: "COORDINATOR",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ANANYA MOHAPATRA",
		designation: "COORDINATOR",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ABHIBANDITA RATH",
		designation: "Web Dev | Content Writting",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "AMAN GOSWAMI",
		designation: "Web Dev | CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "AMISHA SAMAL",
		designation: "App Dev | GD",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "AMIT KUMAR SATHPATHY",
		designation: "Web Dev | App Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ANKITA AGRAWAL",
		designation: "CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ANKITA PANDA",
		designation: "Web Dev | CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "MS. ANKITA SWAIN",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "MR. ANSHU AGRAWAL",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ARPITA TRIPATHY",
		designation: "Web Dev | UI/UX",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ARYAN AGRAWAL",
		designation: "AI/ML",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ASHISH KUMAR BEHERA",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ANKITA SWAIN",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ASHUTOSH BEHURIA",
		designation: "Web Dev | CP | VIDEO EDITING",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ASWATHI M",
		designation: "Web Dev | Content Writting",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

	{
		name: "AYUSHI KUMARI",
		designation: "App Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "BIBEK KUMAR MEHER",
		designation: "Web Dev | CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "CHIRAG AGRAWAL",
		designation: "AIML | CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "DEB KALYAN MOHANTY",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "DEBJANI AISWARYA",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "GIRIJA MEHER",
		designation: "Cyber Security | Content Writting",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "GOBINDA PANDA",
		designation: "CP | Game Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "JYOTI PRAKASH PANDA",
		designation: "Web Dev | CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "KISHORE BHAGAT",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "LEHER KUMAR KACHHYAP",
		designation: "Web Dev | Video Editing",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "MAAZ ALAM",
		designation: "AI/ML",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "MAHAK AGRAWAL",
		designation: "CP | Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "MOHIT KUMAR DORA ",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "OMM SUSEKHAR PANI",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "PAREEKSHIT SAHU",
		designation: "Video Editing",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

	{
		name: "PRERIT KUMAR JAIN",
		designation: "App Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "PRIYADARSHINI BAL",
		designation: "Web Dev |  UI/UX",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
	{
		name: "ROHIT KUMAR",
		designation: "Web Dev |  UI/UX",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

	{
		name: "SAMBIT KUMAR SAHU",
		designation: "Game Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},


  {
		name: "SAMRIT KRUSHAN",
		designation: "GD | UI/UX",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

  {
		name: "SATYAJEET PRADHAN",
		designation: "App Dev |  Cybersecurity",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SIBANI PANDA",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SHRADHA SUMAN",
		designation: "App Dev | CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SHRUTI SAMANTARAY",
		designation: "Web Dev | GD",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

  {
		name: "SOHAM SAMANATRAY",
		designation: "Web Dev | UI/UX",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},


  {
		name: "SOUMENDRA PRIYADARSAN",
		designation: "Web Dev | Content Writting",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SOUMYA SAGAR SAMAL",
		designation:  "App Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SOHAM SAMANTRAY",
		designation: "Web Dev | UI/UX",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

  {
		name: "SUBHRANSU SEKHAR PANDA",
		designation: "Web Dev | CP",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SUCHARITA SAHU",
		designation: "Web Dev | UI/UX | GD",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SUGYANI MANJARI DAS",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "SWASTIK GORAI",
		designation: "AI/ML | CP | App Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "TAUFIK KHAN",
		designation: "Game Dev | AI/ML | UI/UX",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},
  {
		name: "TIRTHABAS MISHRA",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},

  {
		name: "VISHAL LOHANI",
		designation: "Web Dev",
		avatar:
			"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
	},



];

const Team = () => {
  
  const finalYearStartIndex = teamMembersData.findIndex(
    (member) => member.name === "ISHITA SATHPATHY"
  );
  const finalYearEndIndex = teamMembersData.findIndex(
    (member) => member.name === "NIKHIL KUMAR SAHU"
  );

 
  const finalYearMembers = teamMembersData.slice(finalYearStartIndex, finalYearEndIndex + 1);
  const prefinalYearMembers = [
    ...teamMembersData.slice(0, finalYearStartIndex),
    ...teamMembersData.slice(finalYearEndIndex + 1),
  ];

  return (
    <div>
      <h2 style={{ color: "white", textAlign: "center", marginTop: "5px", fontSize: "35px" }}>Team Members</h2>

     
      <h3 style={{ color: "white", textAlign: "center", marginTop: "20px", fontSize: "24px" }}>Final Year Members</h3>
      <TeamMembersSection teamMembers={finalYearMembers} />

      
      <h3 style={{ color: "white", textAlign: "center", marginTop: "20px", fontSize: "24px" }}>Prefinal Year Members</h3>
      <TeamMembersSection teamMembers={prefinalYearMembers} />
    </div>
  );
};

export default Team;