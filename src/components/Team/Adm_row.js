import React from "react";
import AdministrationCard from "./AdministrationCard";
import classes from "./style.module.css";
const AdmRow = () => {
  const profs = [
    {
      name: "Prof. Sanjaya Kumar Patro",
      designation: "Dean Student Welfare",
      img: "/vssut_administration/dsw.jpg",
    },
    {
      name: "Dr. Saroj Kumar Sarangi",
      designation: "Vice President Technical Society",
      img: "/vssut_administration/vptech.jpeg",
    },
    {
      name: "Dr. Santosh Kumar Majhi",
      designation: "Faculty Advisor (Enigma)",
      img: "/vssut_administration/advisior.jpg",
    },
    {
      name: "Priyanshu Kumar Singh",
      designation: "Secretary (Enigma)",
      img: "/vssut_administration/Secretary.png",
    },
  ];
  return (
    <>
      <h3 className={classes.heading}>Administration</h3>
      <div className={classes.admRow}>
        {profs.map((prof) => (
          <AdministrationCard
            name={prof.name}
            designation={prof.designation}
            image={prof.img}
          />
        ))}
      </div>
    </>
  );
};

export default AdmRow;

// Faculty Advisor - Santosh Kumar Majhi
// Dean Student Welfare - Sanjaya Kumar Patro
// VP Technical Society - Saroj Kumar Sarangi
