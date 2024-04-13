import { Stack, Typography } from "@mui/material";
import AnimatePage from "../../ui/AnimatePage";
import eventStyles from './events.module.css';
import EventList from "./components/EventList";
import Calender from "./components/Calender";

export default function Events() {
  return (
    <AnimatePage>
    <Stack
        justifyContent="flex-start"
        alignItems={"center"}
        position="relative"
        paddingBottom={"2rem"}
        
    >
        <Typography variant="h2" paddingY="20px" sx={{fontSize:{xs:"30px",md:"45px",lg:"60px"},}}>

            Events
        </Typography>
    <Stack paddingY={3}    sx={{flexDirection:{xs:"column-reverse",md:"row"} ,width:"90vw",paddingX:{lg:"40px",md:"10px"} }}>

        <Stack className={eventStyles.eventsList}  sx={{width:{md:"100vw"},marginTop:{md:"30px",sm:"30px",xs:"30px"}}}>
        <EventList />
        </Stack>
        <Stack className={eventStyles.calender}   sx={{width:{md:"100vw",lg:"auto"},justifyContent:"center",alignItems:"center",position:{lg:"sticky",md:"unset"},top:"120px"}}>
        <Calender />
        </Stack>

    
        </Stack>

        </Stack>
        </AnimatePage>
  )
}
