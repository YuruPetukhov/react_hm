import React from 'react'
import { useState } from "react"

export const Form = () => {
    const [form, setForm] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form,'form')
    }
    const handleChange =(e) => {
        const elem =e.target.name 
        const value =e.target.value
        setForm({
            ...form,
            [elem]: value
        })
    console.log(form)
}
return (
<form onSubmit={handleSubmit}>
    <p><input name="User" type="text"  onChange={(e)=> handleChange(e)} value={form.user}/></p>
    <p><input name="Password" type="password"  onChange={(e)=> handleChange(e)} value={form.password}/></p>
    <p><input name="telephone" type="phone"  onChange={(e)=> handleChange(e)} value={form.phone}/></p>
    <button type="submit">Submit</button>
    </form>
)
}