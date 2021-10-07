import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import styles from "./events.module.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Grid, Switch, Typography } from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CancelIcon from "@material-ui/icons/Cancel";

const CssTextField = withStyles({
  root: {
    "& input": {
      color: "#35ff1f",
    },
    "& label": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "#35ff1f",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&:hover fieldset": {
        borderColor: "#35ff1f",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#35ff1f",
      },
    },
  },
})(TextField);
const CustomSlider = withStyles({
  root: {
    color: "#35ff1f",
    height: 3,
    padding: "13px 0",
  },
  track: {
    borderRadius: 2,
    width: "50%",
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: "#35ff1f",
    border: "1px solid currentColor",
    marginTop: -9,
    marginLeft: -11,
    color: "#fff",
  },
  label: {
    backgroundColor: "#35ff1f",
    color: "#35ff1f",
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  menu: {
    color: "white",
  },
}));

export default function FormModal({ open, handeClose }) {
  const classes = useStyles();
  const [selectedBranchIndex, setselectedBranchIndex] = useState(0);
  const [language, setLanguage] = useState("");
  const [skillLevel, setSkillLevel] = useState(0);
  const [participated, setparticipated] = useState({
    Yes: true,
    No: false,
  });

  const options = [
    "None",
    "Architecture",
    "Chemical engineering",
    "Civil Engineering",
    "Computer science and Engineering",
    "Electrical engineering",
    "Electrical and electronics Engineering",
    "Electronics and telecommunication Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Metallurgy engineering",
    "Production Engineering",
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setselectedBranchIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Branch = (
    <div
      style={{
        border: "1px solid white",
        borderRadius: "5px",
        marginTop: "10px",
      }}
      className={classes.menu}
    >
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          onClick={handleClickListItem}
        >
          <ListItemText
            secondary={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography style={{ color: "#fff" }}>
                  Branch : {options[selectedBranchIndex]}
                </Typography>
                <ArrowDropDownIcon style={{ color: "white" }} />
              </div>
            }
            className={classes.menu}
          />
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            disabled={index === 0}
            selected={index === selectedBranchIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const Language = (
    <div style={{ margin: "10px" }}>
      <FormControl style={{ color: "white" }} component="fieldset">
        <FormLabel style={{ color: "white" }}>Prefered Language :</FormLabel>
        <RadioGroup
          aria-label="language"
          name="language"
          value={language}
          onChange={handleLanguageChange}
          display="flex"
          row
        >
          <FormControlLabel
            value="C"
            control={<Radio />}
            label="C"
            labelPlacement="left"
          />
          <FormControlLabel
            value="C++"
            control={<Radio />}
            label="C++"
            labelPlacement="left"
          />
          <FormControlLabel
            value="other"
            control={<Radio />}
            label="Other"
            labelPlacement="left"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );

  const skillArray = [
    "beginner",
    "beginner++",
    "intermediate",
    "intermediate++",
    "expert",
    "master",
  ];

  const Skill = (
    <div style={{ padding: "10px" }}>
      <Typography style={{ color: "white" }} id="discrete-slider" gutterBottom>
        How Skilled are you in DSA ?{" "}
        <strong style={{ color: "#35ff1f", letterSpacing: "1px" }}>
          {skillArray[skillLevel]}
        </strong>
      </Typography>
      <CustomSlider
        defaultValue={0}
        aria-labelledby="discrete-slider"
        step={1}
        onChange={(e, v) => setSkillLevel(v)}
        marks
        min={0}
        max={5}
      />
    </div>
  );

  const handleSwitch = (event) => {
    setparticipated({
      ...participated,
      [event.target.name]: event.target.checked,
    });
  };

  const competitive = (
    <Grid component="label" container alignItems="center" spacing={1}>
      <Grid item>
        <Typography style={{ color: "white" }}>
          Have you ever participated in a competitive contest on any platform ?
          *
        </Typography>
      </Grid>

      <Grid item style={{ color: "white" }}>
        No
      </Grid>
      <Grid item>
        <Switch
          checked={participated.No}
          onChange={handleSwitch}
          name="No"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      </Grid>
      <Grid item style={{ color: "white" }}>
        Yes
      </Grid>
    </Grid>
  );

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.modal} style={{ height: "95%" }}>
            <CancelIcon onClick={handeClose} className={styles.icon} />
            <Typography
              style={{
                color: "#35ff1f",
                textAlign: "center",
                marginTop: "30px",
              }}
              variant="h3"
            >
              Level Up DSA
            </Typography>
            <form
              style={{
                paddingRight: "10px",
                marginTop: "50px",
              }}
            >
              <div style={{ paddingTop: "15px" }}>
                <CssTextField
                  className={classes.margin}
                  label="Email"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  type="email"
                  required
                  fullWidth
                />
              </div>
              <div style={{ paddingTop: "15px" }}>
                <CssTextField
                  className={classes.margin}
                  label="Name"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  type="text"
                  required
                  fullWidth
                />
              </div>

              <div style={{ paddingTop: "15px" }}>
                <CssTextField
                  className={classes.margin}
                  label="Registration Number"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  type="text"
                  required
                  fullWidth
                />
              </div>
              <div style={{ paddingTop: "15px" }}>
                <CssTextField
                  className={classes.margin}
                  label="Whatsapp Number"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  type="text"
                  required
                  fullWidth
                />
              </div>
              {Branch}
              {Language}
              {Skill}
              {competitive}
              <div style={{ paddingTop: "15px" }}>
                <CssTextField
                  className={classes.margin}
                  label="Mention your profie link(The competitive platform you are in)"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  type="text"
                  required
                  fullWidth
                  disabled={!participated.No}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <center>
                  <button className={styles.button}>SUBMIT</button>
                </center>
              </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
