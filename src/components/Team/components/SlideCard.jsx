import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import style from "./../style.module.css";

function Profile(props) {
  const {
    id,
    firstname,
    lastname,
    profile_pic_url,
    get_year_display,
    github,
    facebook,
    instagram,
    linkedin,
  } = props.profile;
  // console.log(id, firstname);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={style.profileImage}
          component="img"
          alt="Profile Picture"
          height="180"
          width="180"
          image={profile_pic_url}
          title={`${firstname} ${lastname}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6">
            {`${firstname} ${lastname}`}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {get_year_display}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button> */}
      </CardActions>
      <span className={style.hash}>#{id+1}</span>
    </Card>
  );
}

function SlideCard(props) {
  const { profile1, profile2 } = props;
  return (
    <SwiperSlide>
      <div className={style.slideCard}>
        <Profile className={style.card1} profile={profile1} />
        {profile2 != null && <Profile className={style.card2} profile={profile2} />}
      </div>
    </SwiperSlide>
  );
}

export default SlideCard;
