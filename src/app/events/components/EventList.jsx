import { Stack , TextField,Button , Typography} from "@mui/material";
import EventCard from "./EventCard";
import useDatePicker from '../../../shared/store/useDatePicker';
import { useEffect,useState } from "react";

const datalist1 = [
  {
      date: "Monday, October 09",
      title: "ICPC Info Session      ",
      info: "The ICPC info session was conducted to appraise everyone about the international programming contest where they can participate in groups of three. The team which qualified for the regional round of last year's ICPC was invited as the guest." 
  }
]


const datalist2 = [
  {
      date: "Sunday, January 14",
      title: "AWS Cloud Workshop",
      info: "- The AWS cloud workshop was conducted to  elevate the students' knowledge on AI and AWS cloud. The workshop was conducted by the founder of Linux World - Vimal Daga." 
  }
]
const datalist3 = [
    {
        date: "Wednesday, February 21",
        title: "Explorigma- the freshmen orientation program",
        info: " The initial stride towards knowing a community is the adventurous pursuit of exploration. The program provided the freshers a chance to delve into the offerings of Enigma." 
    }
]
const datalist4 = [
  {
      date: "Monday, March 11",
      title: "Lift Off C++",
      info: " - The Lift off C++ was a one-month program conducted for the university students. It provided fundamental C++ concepts through structured lessons, hands-on tasks, and group mentorship, fostering collaboration and proficiency in programming." 
  }
]
const datalist5 = [
  {
      date: "Saturday, March 23",
      title: "VSIEGE",
      info: " During  Samavesh X Vassaunt 2024, the VSiege gaming tournament concluded, featuring the VSSUT Map in TDM mode. Participants displayed intense battles and skillful strategies, captivating every game enthusiast with the game developed by ENIGMA members." 
  },
  {
    date: "Saturday, March 23",
    title: "SERVER ATTACK",
    info: " The Server Attack virtual event was conducted in the SAMAVESHXVASSAUNT 2024.  It blended strategic prowess with tech skills in simulated cyber battles. Participants clashed servers to outsmart, infiltrate, and secure data. In this thrilling game of wits and code, minds were sharpened, skills honed, and the digital frontier conquered" 
}

]
const datalist6 = [
  {
      date: "Sunday, March 24",
      title: "BLIND CODE",
      info: " On March 24th, from 2pm to 4pm, Blind Code, a pioneering programming competition, unfolded. Participants wrote code without visual feedback, showcasing their conceptualization and execution skills. Developed by ENIGMA Club members, it emphasized the significance of vision in coding." 
  }
]


const datalist7 = [
    {
        date: "Thursday, March 14",
        title: "Enigma Induction",
        info: " Enigma conducted its Induction program, welcoming freshers into the club's fold. This event was crucial as it not only introduces newcomers to the club's activities but also fosters a sense of community and collaboration among members." 
    }
]
const datalist8 = [
  {
      date: "To be announced",
      title: "Web Dev Workshop",
      info: "Web Dev Workshop Join our summer program for university students, focusing on web development. Structured lessons, hands-on tasks, and group mentorship deepen understanding. Unlock the world of web development with us!" 
  }
]

const datalist9 = [
  {
      date: "To be announced",
      title: "Level Up DSA",
      info: " Level Up DSA is going to offer a one-month summer program for all university students, focusing on Data Structures and Algorithms. Structured lessons, hands-on tasks, and group mentorship deepen understanding. Join to unlock DSA mysteries and excel in computer science." 
  }
]

const datalist10 = [
  {
      date: "Upcoming",
      title: "Hackathon",
      info: "Gear up for ENIGMA's upcoming hackathon! Dive into coding challenges with your team. Prepare for multiple rounds of intense competition and exciting tech challenges. Don't miss out!" 
  }
]




const totalData = [...datalist1, ...datalist2, ...datalist3, ...datalist4, ...datalist5, ...datalist6, ...datalist7 , ...datalist8 , ...datalist9, ...datalist10];

export default function EventList() {

    const [result, setResult] = useState([]);
    const [pickedDate] = useDatePicker((state) => [state.pickedDate]);
    // console.log('Picked Date:', pickedDate);

    useEffect(() => {
        console.log('useEffect')
        totalData.map((data) => {
            if(data.date == pickedDate){
                setResult(
                    [...result, data]
                );
            }
        })

    }, [pickedDate]);


  return (
    <Stack gap={3} justifyContent={'start'} alignItems={'start'} width={"650px"}>
      
      <Stack className="search-box" width={'70%'} position={'relative'} left={30} direction={'row'} gap={3}>
      <TextField fullWidth id="outlined-basic"  variant="outlined" />
      <Button variant="contained">
        Filter
      </Button>
      </Stack>

        {
            pickedDate == '' && (
                <Stack>
                {totalData.map((data,idx) => (
                  <EventCard 
                  key={idx}
                  date={data.date}
                   title={data.title}
                    info={data.info} />
                ))}
              </Stack>)
        }

        {!(pickedDate != '' && result.length > 0) ? (
            <Stack paddingY={8} width={'100%'}
            justifyContent={'center'}
              alignItems={'center'}
            >
              <Typography variant="h6">
          No events on this day
              </Typography>
        </Stack>)
        :
        (
            <Stack>
            {result.map((data,idx) => (
              <EventCard 
              key={idx}
              date={data.date}
               title={data.title}
                info={data.info} />
            ))
            }
          </Stack>
        )
        }


    </Stack>
  )
}
