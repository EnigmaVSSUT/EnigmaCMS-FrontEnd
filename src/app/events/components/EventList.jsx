import { Stack , TextField,Button , Typography} from "@mui/material";
import EventCard from "./EventCard";
import useDatePicker from '../../../shared/store/useDatePicker';
import { useEffect,useState } from "react";

const datalist1 = [
    {
        date: "Wednesday, November 29",
        title: "Orientation Day",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos." 
    }
]

const datalist2 = [
    {
        date: "Tuesday, November 21",
        title: "Enigma Induction",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos." 
    },
    {
        date: "Tuesday, November 21",
        title: "Info Session",
        info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia quae ipsum numquam error, sequi hic, facere perferendis nostrum nulla, quis modi culpa corrupti officiis fuga quaerat ex odit sed dignissimos." 
    }
]

const totalData = [...datalist1, ...datalist2];

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
      
      <Stack classNameName="search-box" width={'70%'} position={'relative'} left={30} direction={'row'} gap={3}>
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
