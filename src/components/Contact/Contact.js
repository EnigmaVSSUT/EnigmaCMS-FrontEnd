import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";
import {ReactComponent as Logo} from './logofb.svg';
import {ReactComponent as Logo1} from './logoln.svg';
import {ReactComponent as Logo2} from './logogit.svg';
import {ReactComponent as Logo3} from './logoinstag.svg';
import TextField from "@material-ui/core/TextField";
import { withStyles,makeStyles, } from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
      "& input": {
        color: "#35ff1f"
      },
      "& label": {
        color: "white"
      },
      "& label.Mui-focused": {
        color: "#35ff1f"
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "white"
        },
        "&:hover fieldset": {
          borderColor: "#35ff1f"
        },
        "&.Mui-focused fieldset": {
          borderColor: "#35ff1f"
        }
      }
    }
  })(TextField);
  
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    margin: {
      margin: theme.spacing(1),
    },
    multilineColor:{
      color:'#35ff1f'
  }
  }));
  
 

export default function Contact() {
  const classes = useStyles();

  

return (
        
    <section className="my-5 py-5" >
    
        
        
        <div className="text-center">
            <h1>Get In Touch With Us</h1>
        </div>
        
        
        
        <div className="row">
            <div className="col-md-7">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Ahr7kMSrtKu72UE4OL1YpDxCgyQx3wlb"
                    style={{
                          border      : '0',
                          width       : '80%',
                          height      : '600px',
                          frameborder : '0',
                          marginLeft  : '200px',
                          marginTop   : '80px'
                          }}
                    allowfullscreen
                />
            </div>
       
       
       
       
       <div className="col-md-5">
            <form
                style={{
                      marginRight : '200px',
                      marginTop   : '80px'
                      }}>
                <div style={{paddingTop:'15px'}}>
                <CssTextField
                      className={classes.margin}
                      label="Name"
                      variant="outlined"
                      id="custom-css-outlined-input"
                      type="text"
                      required
                      fullWidth/>
                </div>
                
                
                <div style={{paddingTop:'15px'}}>
                <CssTextField
                      className={classes.margin}
                      label="e-mail"
                      variant="outlined"
                      id="custom-css-outlined-input"
                      type="email"
                      required
                      fullWidth/>
                </div>


                <div style={{paddingTop:'15px'}}>
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
                            className: classes.multilineColor}}/>
                </div>
                
                
                <div style={{paddingTop:'60px'}}><center><button className='button'>Send</button></center></div>
                <div style={{paddingTop:'60px'}}>
                    <button style={{border: 'none',paddingLeft:'60px',backgroundColor:'#100E17'}}><Logo className='logo' /></button>
                    <button style={{border: 'none',paddingLeft:'60px',backgroundColor:'#100E17'}}><Logo1 className='logo' /></button>
                    <button style={{border: 'none',paddingLeft:'60px',backgroundColor:'#100E17'}}><Logo2 className='logo' /></button>
                    <button style={{border: 'none',paddingLeft:'60px',backgroundColor:'#100E17'}}><Logo3 className='logo' /></button>
                </div>

                

            </form>
      </div>
      </div>
    </section> 
    
  );
}