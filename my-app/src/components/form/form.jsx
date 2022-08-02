import styles from './form.module.css'
import { useState } from "react"

const Form = () => {
    const [form, setForm] = useState({})
    const [errUser, setErrUser] = useState('')
    const [errPassword, setErrPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(form.user.length < 3){
            setErrUser('Логин должен содержать более двух символов')
        }

        if(form.password.length < 10){
            setErrPassword('Пароль должен содержать более девяти символов')
        }
    }

    const handleChange = (e) => {

        const el = e.target.name
        const value = e.target.value

        setForm({
            ...form,
            [el]: value,
            errUser, 
            errPassword
        })

    console.log(form)
    }

    return (

        <form onSubmit={handleSubmit} className = {styles.form}>
            <p><input className={styles.formInput} type='text' name = 'user' onChange={(e) => handleChange(e)} value = {form.user}/></p>
            <p className={styles.formError}>{errUser}</p>
            <p><input className={styles.formInput} type='password' name="password" onChange={(e) => handleChange(e)} value = {form.password}/></p>
            <p className={styles.formError}>{errPassword}</p>
            <button  className= {styles.formButton} type='submit'>Submit</button>
        </form>

    )

}


export default Form