import { Stack, Typography } from "@mui/material";
import AnimatePage from "../../ui/AnimatePage";
import eventStyles from './events.module.css';
import EventList from "./components/EventList";
import Calender from "./components/Calender";

export default function Events() {
  return (
    <AnimatePage>
    <Stack
        justifyContent={"center"}
        alignItems={"center"}
        position="relative"
        paddingBottom={"2rem"}
    >
        <Typography variant="h2" paddingY="20px">
            Events
        </Typography>
    <Stack paddingY={3} direction={{xs: "column-reverse", md: "row"}} gap={{md: 20, xs: 10}}>

        <Stack className={eventStyles.eventsList}>
        <EventList />
        </Stack>

        <Stack className={eventStyles.calender}>
        <Calender />
        </Stack>

    
        </Stack>

        </Stack>
        </AnimatePage>
  )
}
