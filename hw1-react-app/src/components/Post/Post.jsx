import React from 'react'
import styles from '../Post/post.module.css'

export const Post = (props) => {
    console.log(props.message)
    return (
        <div>
            <div className={styles.post} > Best friends</div>
            <div>{props.message}</div>
            </div>
    )
}