import { Stack, Typography } from "@mui/material"
import useCursorStore from "lib/store/useCursorPositionStore"
import styles from "../styles/admission.module.css";
import React, { Component } from "react";
import IconRocketLaunch from "/components/loc/IconRocketLaunch";
import Loader from "/components/loc/Loader";
// import useCursorStore from "@/lib/store/useCursorPositionStore"

class AdmissionForm extends Component {
    
    constructor(props) {
      super(props);
      this.state = {
        fullname: "",
        email: "",
        regdNo: "",
        year: "select",
        phone: "",
        confirmphone: "",
        branch: "select",
        codingProfile: "",
        formErrors: {},
        message: "",
        msgcolor: "",
        response: false
      };
  
      this.initialState = this.state;
    }
  
    handleFormValidation() {
      const { fullname, email, regdNo, year, phone, confirmphone, branch, codingProfile } =
        this.state;
      let formErrors = {};
      let formIsValid = true;
  
      //Student fullname
      if (!fullname) {
        formIsValid = false;
        formErrors["fullnameErr"] = "fullname is required.";
      }
  
      //Email
      if (!email) {
        formIsValid = false;
        formErrors["emailErr"] = "Email id is required.";
      } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        formIsValid = false;
        formErrors["emailErr"] = "Invalid email id.";
      }
  
      //regdNo
      if (!regdNo) {
        formIsValid = false;
        formErrors["regdNoErr"] = "regdNo is required.";
      } else {
        var pattern = /^[0-9]$/;
      }
  
      //year
      if (year === "" || year === "select") {
        formIsValid = false;
        formErrors["yearErr"] = "Select year.";
      }
  
      //Phone number
      if (!phone) {
        formIsValid = false;
        formErrors["phoneErr"] = "Phone number is required.";
      } else {
        var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
        if (!mobPattern.test(phone)) {
          formIsValid = false;
          formErrors["phoneErr"] = "Invalid phone number.";
        }
      }
      //Phone number
      if (!confirmphone) {
        formIsValid = false;
        formErrors["confirmphoneErr"] = "Confirm your phone number.";
      } else {
        var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
        if (!mobPattern.test(confirmphone)) {
          formIsValid = false;
          formErrors["confirmphoneErr"] = "Invalid phone number.";
        }
      }
  
      //branch
      if (branch === "" || branch === "select") {
        formIsValid = false;
        formErrors["branchErr"] = "Select branch.";
      }
  
      //Student codingProfile
      if (!codingProfile) {
        formIsValid = false;
        formErrors["codingProfileErr"] = "codingProfile is required.";
        // return <Link to="ThankYou.js" />;
      }
  
      this.setState({ formErrors: formErrors });
      return formIsValid;
    }
  
    handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
  
    handleSubmit = async (e) => {
  
      e.preventDefault();
      this.setState({ response: true });
  
      let target = e.target;
      let formData = {};
      for (let i = 0; i < target.length; i++) {
        formData[target.elements[i].getAttribute("name")] =
          target.elements[i].value;
      }
      try {
        const response = await fetch(
          "https://loc-2023-api.onrender.com/api/loc/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
    
        const data = await response.json();
        if (response.ok) {
          this.setState({ response: false });
          // this.setState({ message: "Thanks For Registering" });
          this.setState({ msgcolor: "#1bec1b" });
          window.location.replace('/thanks');
  
  
        } else {
          let msg = data.error.message;
          this.setState({ response: false });
          this.setState({ message: msg });
          this.setState({ msgcolor: "red" });
        }
    
        setTimeout(() => {
          this.setState(this.initialState);
        }, 5000);
      } catch (error) {
        console.log(error);
      }
      
    };
  
    render() {
       
      const {
        fullnameErr,
        emailErr,
        regdNoErr,
        yearErr,
        phoneErr,
        confirmphoneErr,
        branchErr,
        codingProfileErr,
      } = this.state.formErrors;
  
      // IoIosRocket
    //   const toggleHoverState = useCursorStore(state => state.toggleHoverState)
      return (
        <>
          <div className={styles.formDiv}>
            <div className={styles.heading}>Lift-Off C  <IconRocketLaunch /></div>
            <div className={styles.form_wrap}>
              <div className={styles.form_comp}>
                <form onSubmit={this.handleSubmit}>
                  <div className={styles.loc}>
                    <label htmlFor="fullname">Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      value={this.state.fullname}
                      onChange={this.handleChange}
                      placeholder="Your full name.."
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Full Name is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    />
                    {fullnameErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {fullnameErr}
                      </div>
                    )}
                  </div>
                  <div className={styles.loc}>
                    <label htmlFor="regdno">Registration No</label>
                    <input
                      type="number"
                      name="regdNo"
                      value={this.state.regdNo}
                      onChange={this.handleChange}
                      placeholder="Your registration number.."
                      className={regdNoErr ? " showError" : ""}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Registration No is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    />
                    {regdNoErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {regdNoErr}
                      </div>
                    )}
                  </div>
                  <div className={styles.loc}> 
                    <label htmlFor="year">Year</label>
                    <select
                      name="year"
                      onChange={this.handleChange}
                      className={yearErr ? " showError" : ""}
                      value={this.state.year}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Year is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    >
                      <option value="" disable selected hidden>--Select--</option>
                      <option value={1}>1st</option>
                      <option value={2}>2nd</option>
                      <option value={3}>3rd</option>
                      <option value={4}>4th</option>
                    </select>
                    {yearErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {yearErr}
                      </div>
                    )}
                  </div>
                  <div className={styles.loc}>
                    <label htmlFor="branch">Branch</label>
                    <select
                      name="branch"
                      value={this.state.branch}
                      onChange={this.handleChange}
                      className={branchErr ? " showError" : ""}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Branch is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    >
                      <option value="" disable selected hidden>--Select--</option>
                      <option value="CHE">Chemical Engineering</option>
                      <option value="CE">Civil Engineering</option>
                      <option value="CSE">Computer Science & Engineering</option>
                      <option value="EE">Electrical Engineering</option>
                      <option value="EEE">Electrical & Electronics Engineering</option>
                      <option value="ETC">Electronics & Telecomm. Engineering</option>
                      <option value="IT">Information Technology</option>
                      <option value="ME">Mechanical Engineering</option>
                      <option value="MME">Metallurgical & Materials Engineering</option>
                      <option value="PE">Production Engineering</option>
                      <option value="B.Arch">B.Arch</option>
                      <option value="MCA">MCA</option>
                      <option value="MSC">MSC</option>
                    </select>
                    {branchErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {branchErr}
                      </div>
                    )}
                  </div>
                  <div className={styles.loc}>
                    <label htmlFor="email">Email Id</label>
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Your email id.."
                      className={emailErr ? " showError" : ""}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Email Id is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    />
                    {emailErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {emailErr}
                      </div>
                    )}
                  </div>
                  <div className={styles.loc}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      onChange={this.handleChange}
                      value={this.state.phone}
                      placeholder="Your phone number.."
                      className={phoneErr ? " showError" : ""}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Phone Number is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    />
                    {phoneErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {phoneErr}
                      </div>
                    )}
                  </div>
                  <div className={styles.loc}>
                    <label htmlFor="confirmphone">Confirm Phone Number</label>
                    <input
                      type="number"
                      name="confirmphone"
                      onChange={this.handleChange}
                      value={this.state.confirmphone}
                      placeholder="Confirm your phone number.."
                      className={confirmphoneErr ? " showError" : ""}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Confirm phone Number is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    />
                    {/* <Typography sx={{color:"#fff"}}>Please Enter 10 digit number.</Typography> */}
                    {phoneErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {phoneErr}
                      </div>
                    )}
                  </div>
                  <div className={styles.loc}>
                    <label htmlFor="codingProfile">Coding Profile</label>
                    <input
                      type="text"
                      name="codingProfile"
                      value={this.state.codingProfile}
                      onChange={this.handleChange}
                      placeholder="HackerRank/HackerEarth profile link.."
                      className={codingProfileErr ? " showError" : ""}
                      onInvalid={(e) =>
                        e.target.setCustomValidity("Coding Profile Link is required")
                      }
                      onInput={(e) => e.target.setCustomValidity("")}
                      required
                    />
                    {codingProfileErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {codingProfileErr}
                      </div>
                    )}
                  </div>
                  
                    <p
                      className={styles.message}
                      style={{ color: `${this.state.msgcolor}`, textAlign: "center" }}
                    >
                      {this.state.message}
                    </p>
  
                  {!this.state.response && <button className={styles.submit}>Submit</button>}
                  {this.state.response && <button className={styles.submit} disabled>{(this.state.response) && <div className={styles.loader}><Loader /></div>}</button>}
                </form>
  
              </div>
            </div>
            <p className={styles.copy}>Enigma VSSUT &copy; 2023 </p>
          </div>
        </>
      );
    }
  }
  
  export default AdmissionForm;