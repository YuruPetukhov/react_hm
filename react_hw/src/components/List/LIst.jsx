import styles from './list.module.css'
import React from 'react';
import { useState } from 'react';
import Input from '../Input/Input';

  
  const List = () => {
    const [form, setForm] = useState({
      userName: "",
      age: "",
      err: null
    });
  
    const [users, setUsers] = useState([]);
  
    const handleChange = ({ target: { value, name } }) => {
      setForm({
        ...form,
        [name]: value
      });
  
      console.log(form);
    };
  
    const handleClick = () => {
      if (form.userName.length || form.age.length || form.password.length) {
        setUsers([...users, form]);
      }
      setForm({
        userName: "",
        age: "",
        password: ""
      });
      console.log(users);
    };
  
    return (
      <div className={styles.formList}>
        <p> UserName :
        <Input
          id="userName"
          onChange={handleChange}
          value={form.userName}
        />
        </p>
        <p> Age :      
         <Input id="age" onChange={handleChange} value={form.age} />
        </p>

        <button className={styles.submitButton} onClick={() => handleClick()}>Submit </button>
        {users &&
          users.map(({ userName, age, password }) => (
            <div>
              <p>UserName : {userName}</p>
              <p>Age : {age}</p>
            </div>
          ))}
      </div>
    );
  };
  
export default List