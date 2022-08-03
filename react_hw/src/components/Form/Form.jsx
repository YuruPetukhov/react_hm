import styles from './form.module.css'
import React from 'react';
import { useState } from 'react';


const Test = () => {
    const [form, setForm] = useState({})
    const [errorUserName, setErrorUserName] = useState('')
    const [errorPassword, setErrorPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault(e);

        if(form.user.length<3){
            setErrorUserName("Имя пользователя не может быть короче трех символов!")
        }
        if(form.password.length<10){
            setErrorPassword("Пароль не может быть короче десяти символов!")
        }

    }

    const handleChange = (e) => {
        console.log(e)
        const element = e.target.name
        const value = e.target.value
            setForm({
                ...form,
                [element] : value,
                errorUserName,
                errorPassword
            })
            console.log(form)
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <p>UserName :  <input name="user" type="text" onChange={(e)=> handleChange(e)} value={form.user}/></p>
            <p>{errorUserName}</p>
            <p>Password : <input name="password" type="password" onChange={(e)=> handleChange(e)} value={form.password}/></p>
            <p>{errorPassword}</p>
            <button className={styles.submitButton} type="submit">submit</button>
        </form>

    );
}

export default Test