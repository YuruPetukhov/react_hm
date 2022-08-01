import './form.css';

import React, { useState } from "react";

export const Form = () => {
        const [userName, setUserName] = useState('')
        const [password, setPassword] = useState('')
        const [userNameDirty, setUserNameDirty] = useState(false)
        const [passwordDirty, setPasswordDirty] = useState(false)
        const [userNameError, setUserNameError] = useState('! Username field shouldnt be empty')
        const [passwordError, setPasswordError] = useState('! Password field shouldnt be empty')

        const userNameHandler = (e) => {
                setUserName(e.target.value)
                const regEx = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/
                if (!regEx.test(String(e.target.value).toLowerCase())) {
                        setUserNameError('! Please, enter your full name using only latin letters and spaces.')
                } else {
                        setUserNameError('')
                }
        }

        const passwordHandler = (e) => {
                setPassword(e.target.value)
                if (e.target.value.length < 10 || e.target.value.length > 15) {
                        setPasswordError('! Password should contain more than 10 characters and less than 15')
                        if(!e.target.value) {
                                setPasswordError('! Password field shouldnt be empty')
                        }
                } else {
                        setPasswordError('')
                }
        }
       
       
       
       
       
       
        const blurHandler = (e) => {
              switch(e.target.name) {
                case 'userName' :
                        setUserNameDirty(true)
                        break;
                case 'password' :
                        setPasswordDirty(true)
                        break;
              }  
        }

        return (
                <form>
                        <div className='heading'>Sign Up</div>
                        <div>
                                <div className='text'>Full Name</div>
                                <input value={userName} onChange={e => userNameHandler(e)} onBlur={e => blurHandler(e)} name="userName" type='text' />
                                {(userNameDirty && userNameError) && <div className='error'>{userNameError}</div>}
                        </div>
                        <div>
                                <div className='text'>Password</div>
                                <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} name="password" type='password' />
                                {(passwordDirty && passwordError) && <div className='error'>{passwordError}</div>}
                        </div>
                        <button type="submit">Sign Up</button>
                </form>
        )

}