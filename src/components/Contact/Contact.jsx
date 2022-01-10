import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./contact.module.css";
import TextField from "@material-ui/core/TextField";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Heading from "../Heading";
import Social from "../Social/SocialMedia";

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

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing(1),
  },
  multilineColor: {
    color: "#35ff1f",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <section className="my-3 py-3">
      <div className="container">
        <div className="text-center">
          <Heading main="Get in Touch with Us" sub="Reach out to us anytime! We are here to help and answer any query you have. We look forward to hearing from you." />
        </div>      
        <div className="row">
          <div className="col-md-7">
            <iframe
              title="map"
              className="loc"
              src="https://www.google.com/maps/d/u/0/embed?mid=1Ahr7kMSrtKu72UE4OL1YpDxCgyQx3wlb"
              style={{
                border: "0",
                width: "100%",
                height: "550px",
                frameborder: "0",
                marginTop: "50px",
              }}
              allowFullScreen
            />
          </div>

          <div className="col-md-5">
            <form
              style={{
                paddingRight: "10px",
                marginTop: "50px",
              }}
            >
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
                  label="e-mail"
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
                  label="Mobile No."
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
                  label="Message"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  type="text"
                  required
                  fullWidth
                  multiline
                  rows="4"
                  InputProps={{
                    className: classes.multilineColor,
                  }}
                />
              </div>

              <div style={{ paddingTop: "60px" }}>
                <center>
                  <button className={styles.button}>Send</button>
                </center>
              </div>
            </form>
          </div>
        </div>
        <div className={[styles.socialLinksContainer, "text-center"].join(" ")}>
          <Social />
        </div>
      </div>
    </section>
  );
}
