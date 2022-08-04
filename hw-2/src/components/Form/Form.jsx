import React from 'react'
import { useState } from 'react'
import '../Form/Form.css'
import { useEffect } from "react"

export const Form = () => {
    const [user, setUser] = useState({ name: '', password: '', age: '' })
    const [error, setError] = useState({ name: '', password: '', age: '' })
    const [info, setInfo] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        setError({
            name: user.name.length < 3 ? "Your name must be at least 3 characters!" : '',
            password: user.password.length < 10 ? "Your password must be at least 10 characters!" : '',
            age: user.age < 18  ? "You must be over 18 years old!":user.age>100?"WOW!It's impossible!" : ''
        })
    }

    useEffect(() => {
        if (error.name === '' && error.password === '' && error.age === '') {
            setInfo([...info, user])
            setUser({ name: '', password: '', age: '' })
        }
    }, [error])

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user, [name]: value
        })
        console.log(user)
    }
    return (
        <div className='wrapper'>
            <form className='form' >
                <div className='header' >Registration</div>
                <p className='header-name'>User Name<input onChange={handleChange}  value={user.name} name='name' type="text" placeholder='Enter your name ....' /></p>
                <div className='header-error'>{error.name}</div>
                <p className='header-age'>Age<input className='form_age' onChange={handleChange} value={user.age} name='age' type="number" min={1} max={100} placeholder='Age...'  /></p>
                <div className='header-error'>{error.age}</div>
                <p className='header_password'> Password<input onChange={handleChange}  value={user.password} name='password' type="password" placeholder='Enter your password ....' /></p>
                <div className='header-error'>{error.password}</div>
                <button className='header_btn' type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}