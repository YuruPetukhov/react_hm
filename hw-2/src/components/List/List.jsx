import { useState } from "react"
import styles from './list.module.css'

const List = () => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState({})

    const handleChange = ({ target: { name, value } }) => {
        setUser({
            ...user, [name]: value
        })
    }
    const addUser = () => {
        setUsers([...users, user])
   
    }

    return (
        <><div className={styles.listForm}>
            <p><input  value={users.name} name='name' type='text' placeholder='Enter your name ...' className={styles.listInput} onChange={(e) => handleChange(e)} /></p>
            <p><input  value={users.age} name='age' type='number' placeholder='Enter your age ...' className={styles.listInput} onChange={(e) => handleChange(e)} /></p>
            <button className={styles.listBtn} onClick={() => { addUser() }}>Add User</button>
            </div>
            <ul className={styles.table}>
                {
                    users.map((item) => {
                        return <li className={styles.list}> User:<strong>{item.name}</strong> , Age: <strong>{item.age}</strong></li>
                    })
                }
            </ul>
        </>
    )
}

export default List