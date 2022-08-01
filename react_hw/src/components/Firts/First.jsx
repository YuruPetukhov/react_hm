import React from "react";
import styles from './first.module.css'

const First = ({test}) =>{
        return(
            <div className={styles.test} >
            My name is {test}.
            </div>  
        );

}

export default First