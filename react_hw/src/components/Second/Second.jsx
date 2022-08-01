import React from "react";
import styles from './second.module.css'

const Second = ({test}) =>{
        return(
            <div className={styles.second}>
            My last name {test}.
            </div>  
        );

}

export default Second