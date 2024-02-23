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






import { Stack, Typography } from "@mui/material";
import TeamMembersSection from "./TeamMembersSection";

const teamMembersData = [
	//final-years
	{
		name: "ISHITA SATHPATHY",
		// domain: "Developer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "ADYASHA SAMAL",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "CHANDAN KUMAR HABODA",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "HEMADRI TANAYA SATPATHY",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "DHAIRYA JOSHI",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "RAVINDRA NAG",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "RUCHIRA PRIYADARSHINI",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "SWADESH PANDA",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "SWAPNIL KUMAR SAHU",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "AASHWASTI PANDIA",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "SMRUTI RANJAN ROUT",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "GYANA RANJAN PANDA",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "SMRUTI RANJAN BADATYA",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "CHINMAYA CHINTAN MISHRA",
		// domain: "Designer",
		branch:"Mechanical Engineering",
		avatar:
			"",
	},
	{
		name: "SOMNATH SINGH",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "SURAJ MOHAPATRA",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "LALIT KUMAR",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "SANDEEPAN MOHANTY",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "SIBASUNDER BEHERA",
		// domain: "Designer",
		branch:"Computer science and Engineering",
		avatar:
			"",
	},
	{
		name: "PRACHI SUMAN",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:
			"",
	},
	{
		name: "SWAYAM PRAKASH BARIK",
		// domain: "Designer",
		avatar:
			"",
	},
	{
		name: "ADRASH KUMAR GOSWAMI",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:"",
		
	},
	{
		name: "PALLAV KUMAR PATRA",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:
			" ",
	},
	{
		name: "DEBABRATA MOHAPATRA",
		// domain: "Designer",
		branch:"Electronics and  Telecommunication Engineering",
		avatar:
			" ",
	},
	{
		name: "SUBHRAJYOTI",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:
			"",
	},
	{
		name: "RAJAT KUMAR NAYAK",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:
			"",
	},
	{
		name: "TANUSRIYA MAHAWAR",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:
			"",
	},
	{
		name: "PRATHAM MISHRA",
		// domain: "Designer",
		branch:"Electronics and  Telecommunication Engineering",
		avatar:
			"",
	},
	{
		name: "OM PARMAR",
		// domain: "Designer",
		branch:"Civil Engineering",
		avatar:
			"",
	},
	{
		name: "BISWAJEET NAYAK",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:
			"",
	},
	{
		name: "RAJSEKHER PRADHAN",
		// domain: "Designer",
		branch:"Electronics and Telecommunication Enginerring",
		avatar:
			"",
	},
	{
		name: "KUMAR BISHWA KALYAN",
		// domain: "Designer",
		branch:'Metallurgical and Materials Engineering',
		avatar:
			"",
	},
	{
		name: "RATAN KUMAR TRIPATHY",
		// domain: "Designer",
		branch:"Electrical Engineering",
		avatar:
			"",
	},
	{
		name: "NIKHIL KUMAR SAHU",
		// domain: "Designer",
		branch:"Information Technology",
		avatar:
			"",
	},

	//pre final-years
	{
		name: "PRERIT AGRAWAL",
		domain: "COORDINATOR",
		avatar:
			"",
	},
	{
		name: "ANANYA MOHAPATRA",
		domain: "COORDINATOR",
		avatar:
			"",
	},
	{
		name: "ABHIBANDITA RATH",
		domain: "Web Dev | Content Writting",
		avatar:
			"",
	},
	{
		name: "AMAN GOSWAMI",
		domain: "Web Dev | CP",
		avatar:
			"",
	},
	{
		name: "AMISHA SAMAL",
		domain: "App Dev | GD",
		avatar:
			"",
	},
	{
		name: "AMIT KUMAR SATHPATHY",
		domain: "Web Dev | App Dev",
		avatar:
			"",
	},
	{
		name: "ANKITA AGRAWAL",
		domain: "CP",
		avatar:
			"",
	},
	{
		name: "ANKITA PANDA",
		domain: "Web Dev | CP",
		avatar:
			"",
	},
	{
		name: "MS. ANKITA SWAIN",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "MR. ANSHU AGRAWAL",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "ARPITA TRIPATHY",
		domain: "Web Dev | UI/UX",
		avatar:
			"",
	},
	{
		name: "ARYAN AGRAWAL",
		domain: "AI/ML",
		avatar:
			"",
	},
	{
		name: "ASHISH KUMAR BEHERA",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "ANKITA SWAIN",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "ASHUTOSH BEHURIA",
		domain: "Web Dev | CP | VIDEO EDITING",
		avatar:
			"",
	},
	{
		name: "ASWATHI M",
		domain: "Web Dev | Content Writting",
		avatar:
			"",
	},

	{
		name: "AYUSHI KUMARI",
		domain: "App Dev",
		avatar:
			"",
	},
	{
		name: "BIBEK KUMAR MEHER",
		domain: "Web Dev | CP",
		avatar:
			"",
	},
	{
		name: "CHIRAG AGRAWAL",
		domain: "AIML | CP",
		avatar:
			"",
	},
	{
		name: "DEB KALYAN MOHANTY",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "DEBJANI AISWARYA",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "GIRIJA MEHER",
		domain: "Cyber Security | Content Writting",
		avatar:
			"",
	},
	{
		name: "GOBINDA PANDA",
		domain: "CP | Game Dev",
		avatar:
			"",
	},
	{
		name: "JYOTI PRAKASH PANDA",
		domain: "Web Dev | CP",
		avatar:
			"",
	},
	{
		name: "KISHORE BHAGAT",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "LEHER KUMAR KACHHYAP",
		domain: "Web Dev | Video Editing",
		avatar:
			"",
	},
	{
		name: "MAAZ ALAM",
		domain: "AI/ML",
		avatar:
			"",
	},
	{
		name: "MAHAK AGRAWAL",
		domain: "CP | Web Dev",
		avatar:
			"",
	},
	{
		name: "MOHIT KUMAR DORA ",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "OMM SUSEKHAR PANI",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "PAREEKSHIT SAHU",
		domain: "Video Editing",
		avatar:
			"",
	},

	{
		name: "PRERIT KUMAR JAIN",
		domain: "App Dev",
		avatar:
			"",
	},
	{
		name: "PRIYADARSHINI BAL",
		domain: "Web Dev |  UI/UX",
		avatar:
			"",
	},
	{
		name: "ROHIT KUMAR",
		domain: "Web Dev |  UI/UX",
		avatar:
			"",
	},

	{
		name: "SAMBIT KUMAR SAHU",
		domain: "Game Dev",
		avatar:
			"",
	},

	{
		name: "SAMRIT KRUSHAN",
		domain: "GD | UI/UX",
		avatar:
			"",
	},

	{
		name: "SATYAJEET PRADHAN",
		domain: "App Dev |  Cybersecurity",
		avatar:
			"",
	},
	{
		name: "SIBANI PANDA",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "SHRADHA SUMAN",
		domain: "App Dev | CP",
		avatar:
			"",
	},
	{
		name: "SHRUTI SAMANTARAY",
		domain: "Web Dev | GD",
		avatar:
			"",
	},

	{
		name: "SOHAM SAMANATRAY",
		domain: "Web Dev | UI/UX",
		avatar:
			"",
	},

	{
		name: "SOUMENDRA PRIYADARSAN",
		domain: "Web Dev | Content Writting",
		avatar:
			"",
	},
	{
		name: "SOUMYA SAGAR SAMAL",
		domain: "App Dev",
		avatar:
			"",
	},
	{
		name: "SOHAM SAMANTRAY",
		domain: "Web Dev | UI/UX",
		avatar:
			"",
	},

	{
		name: "SUBHRANSU SEKHAR PANDA",
		domain: "Web Dev | CP",
		avatar:
			"",
	},
	{
		name: "SUCHARITA SAHU",
		domain: "Web Dev | UI/UX | GD",
		avatar:
			"",
	},
	{
		name: "SUGYANI MANJARI DAS",
		domain: "Web Dev",
		avatar:
			"",
	},
	{
		name: "SWASTIK GORAI",
		domain: "AI/ML | CP | App Dev",
		avatar:
			"",
	},
	{
		name: "TAUFIK KHAN",
		domain: "Game Dev | AI/ML | UI/UX",
		avatar:
			"",
	},
	{
		name: "TIRTHABAS MISHRA",
		domain: "Web Dev",
		avatar:
			"",
	},

	{
		name: "VISHAL LOHANI",
		domain: "Web Dev",
		avatar:
			"",
	},



//second years


{
	name: "HARDEEP MOHANTY",
	domain: "Assistant Cordinator",
	avatar:
		"",
},
{
	name: "ANANYA PATI",
	domain: "Assistant Cordinator",
	avatar:
		"",
},
{
	name: "A HAREKRUSHNA NAYAK",
	domain: "Web Dev | AI/ML",
	avatar:
		"",
},
{
	name: "ANANDITA DHAL",
	domain: "AI/ML",
	avatar:
		"",
},
{
	name: "ANIMESH PATTNAIK",
	domain: "AI/ML | Web Dev",
	avatar:
		"",
},
{
	name: "ANKUSH BEHERA",
	domain: "App Dev | Game Dev",
	avatar:
		"",
},
{
	name: "ANSHUMAN MISHRA",
	domain: "AI/ML",
	avatar:
		"",
},
{
	name: "ARCHAN SWAIN",
	domain: "App Dev | AI/ML",
	avatar:
		"",
},
{
	name: "ARPITA PANDA",
	domain: "Web Dev | GD",
	avatar:
		"",
},
{
	name: "ASHUTOSH PANIGRAHI",
	domain: "Web Dev | UI/UX",
	avatar:
		"",
},
{
	name: "AUMSHUMAN MOHAPATRA",
	domain: "Web Dev | CW",
	avatar:
		"",
},
{
	name: "BHARAT PANIGRAHI",
	domain: "Web Dev",
	avatar:
		"",
},
{
	name: "CHINMAY KUMAR BEHERA",
	domain: "Web Dev",
	avatar:
		"",
},
{
	name: "DEBASISH DEY",
	domain: "App Dev",
	avatar:
		"",
},
{
	name: "DEEPAK KUMAR DASH",
	domain: "AI/ML",
	avatar:
		"",
},
{
	name: "DEVANSH BANSAL",
	domain: "Game Dev",
	avatar:
		"",
},
{
	name: "GANTYADA TEJESH KUMAR",
	domain: "App Dev",
	avatar:
		"",
},
{
	name: "HARISH SAHOO",
	domain: "Web Dev",
	avatar:
		"",
},
{
	name: "KAUSHIK KUMAR DASH",
	domain: "Web Dev | AI/ML | VE",
	avatar:
		"",
},
{
	name: "KHITISH KUMAR PRADHAN",
	domain: "Web Dev",
	avatar:
		"",
},

{
	name: "KOMAL GOEL",
	domain: "Web Dev",
	avatar:
		"",
},

{
	name: "KRITIKA SUREKA",
	domain: "Web Dev | UI/UX",
	avatar:
		"",
},
{
	name: "KUMAR PIYUSH",
	domain: "Web Dev",
	avatar:
		"",
},

{
	name: "LIPIKA MUNDA",
	domain: "Web Dev | UI/UX",
	avatar:
		"",
},
{
	name: "MANASA MOHAPATRA",
	domain: "Web Dev | App Dev",
	avatar:
		"",
},
{
	name: "NITESH KUMAR YADAV",
	domain: "Web Dev | CW",
	avatar:
		"",
},
{
	name: "NITESH KUMAR YADAV",
	domain: "Web Dev | CW",
	avatar:
		"",
},
{
	name: "PRATYUSH PANDA",
	domain: "Web Dev | CW",
	avatar:
		"",
},
{
	name: "PRIYADARSHINI MUDULI",
	domain: "Web Dev",
	avatar:
		"",
},
{
	name: "RITESH KUMAR PANDA",
	domain: "AI/ML",
	avatar:
		"",
},
{
	name: "SAGAR SATHPATHY",
	domain: "Web Dev | GD",
	avatar:
		"",
},
{
	name: "SRUTI SMARANIKA KAR",
	domain: "Web Dev | UI/UX",
	avatar:
		"",
},
{
	name: "NITESH KUMAR YADAV",
	domain: "Web Dev | CW",
	avatar:
		"",
},
{
	name: "SUBHALAXMI NAYAK",
	domain: "Web Dev",
	avatar:
		"",
},
{
	name: "SUBHAM MISHRA",
	domain: "Web Dev | AI/ML | VE",
	avatar:
		"",
},
{
	name: "NITESH KUMAR YADAV",
	domain: "Web Dev | CW",
	avatar:
		"",
},
{
	name: "SUBHAM SWORUP MALLICK",
	domain: "App DeV",
	avatar:
		"",
},
{
	name: "SURAJ PANDA",
	domain: "App Dev | Cybersecurity",
	avatar:
		"",
},
{
	name: "NITESH KUMAR YADAV",
	domain: "Web Dev | CW",
	avatar:
		"",
},
{
	name: "SWAPNIL ROY",
	domain: "Game Dev| UI/UX",
	avatar:
		"",
},
{
	name: "SWASTIDEEPA DASH",
	domain: "Web Dev",
	avatar:
		"",
},
{
	name: "SWAYAMJEET PADHI",
	domain: "Game Dev | Cybersecurity",
	avatar:
		"",
},


{
	name: "TASHU AGRAWAL",
	domain: "App Dev | AI/ML",
	avatar:
		"",
},
{
	name: "VISHAL EKKA",
	domain: "Web Dev",
	avatar:
		"",
},
{
	name: "YASHIKA SHARMA",
	domain: "Web Dev",
	avatar:
		"",
},








];

const Team = () => {
    const finalYearStartIndex = teamMembersData.findIndex(
        (member) => member.name === "ISHITA SATHPATHY"
    );
    const finalYearEndIndex = teamMembersData.findIndex(
        (member) => member.name === "NIKHIL KUMAR SAHU"
    );

    const finalYearMembers = teamMembersData.slice(
        finalYearStartIndex,
        finalYearEndIndex + 1
    );

    const prefinalYearStartIndex = teamMembersData.findIndex(
        (member) => member.name === "PRERIT AGRAWAL"
    );
    const prefinalYearEndIndex = teamMembersData.findIndex(
        (member) => member.name === "VISHAL LOHANI"
    );

    const prefinalYearMembers = teamMembersData.slice(
        prefinalYearStartIndex,
        prefinalYearEndIndex + 1
    );

	const secondYearStartIndex = teamMembersData.findIndex(
		(member) => member.name === "HARDEEP MOHANTY"
	);
	
	const secondYearEndIndex = teamMembersData.findIndex(
		(member) => member.name === "YASHIKA SHARMA"
	);
	
	const secondYearMembers = teamMembersData.slice(
		secondYearStartIndex,
		secondYearEndIndex + 1
	);
	

    return (
        <Stack>
            

            <Typography
                sx={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "50px",
                    fontSize: "30px",
                    fontWeight: 900,
                }}
            >
                Final Year Members
            </Typography>
            <TeamMembersSection teamMembers={finalYearMembers} />

            <Typography
                sx={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "50px",
                    fontSize: "30px",
                    fontWeight: 900,
                }}
            >
                Prefinal Year Members
            </Typography>
            <TeamMembersSection teamMembers={prefinalYearMembers} />

            <Typography
                sx={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "50px",
                    fontSize: "30px",
                    fontWeight: 900,
                }}
            >
                Second Year Members
            </Typography>
            <TeamMembersSection teamMembers={secondYearMembers} />
        </Stack>
    );
};

export default Team;




