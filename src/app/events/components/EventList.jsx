import { Stack , TextField,Button , Typography} from "@mui/material";
import EventCard from "./EventCard";
import useDatePicker from '../../../shared/store/useDatePicker';
import { useEffect,useState } from "react";

const datalist1 = [
    {
        date: "Wednesday, February 21",
        title: "Explorigma- the freshmen orientation program",
        info: " The initial stride towards knowing a community is the adventurous pursuit of exploration. The program provided the freshers a chance to delve into the offerings of Enigma." 
    }
]

const datalist2 = [
    {
        date: "Thursday, March 14",
        title: "Enigma Induction",
        info: " Enigma conducted its Induction program, welcoming freshers into the club's fold. This event was crucial as it not only introduces newcomers to the club's activities but also fosters a sense of community and collaboration among members." 
    }
]

const datalist3 = [
  {
      date: "Monday, October 09",
      title: "ICPC Info Session      ",
      info: "The ICPC info session was conducted to appraise everyone about the international programming contest where they can participate in groups of three. The team which qualified for the regional round of last year's ICPC was invited as the guest." 
  }
]
const datalist4 = [
  {
      date: "Sunday, January 14",
      title: "AWS Cloud Workshop",
      info: "- The AWS cloud workshop was conducted to  elevate the students' knowledge on AI and AWS cloud. The workshop was conducted by the founder of Linux World - Vimal Daga." 
  }
]

const totalData = [...datalist1, ...datalist2, ...datalist3, ...datalist4];

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
