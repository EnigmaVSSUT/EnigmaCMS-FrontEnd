import React from 'react'
import IconRocketLaunch from "/components/loc/IconRocketLaunch";
import styles from "../styles/thanks.module.css";

const Thanks = () => {
    return (
        <>
            <div className={styles.formDiv}>
                <div className={styles.heading}>Lift-Off C  <IconRocketLaunch /></div>
                <div className={styles.messageBox}>
                    <h1 className={styles.thanksmessage}>Thanks for registering!</h1>
                </div>
                <div className={styles.copyThanks}>
                    <p>Enigma VSSUT &copy; 2023 </p>
                </div>
            </div>
        </>
    )
}

export default Thanks