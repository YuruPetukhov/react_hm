
import styles from './list.module.css'
import { useState } from "react"

const List = () => {
   const [users, setUsers] = useState([])
   const [user, setUser] = useState({})

   const handle = (e) => {

         const el = e.target.name
         const value = e.target.value

         setUser({
            ...user,
            [el]: value
         })
   }

   const addUser = () => {
      setUsers([...users, user])
      let inputFirst = document.getElementById('1')
      inputFirst.value = ''
      
      let inputSecond = document.getElementById('2')
      inputSecond.value = ''

   }

   return (

      <>
         <ul className={styles.list}>
            {
               users.map((item) => {
                  return <li className={styles.listItem}> User: {item.name}, age: {item.age}</li>
               })
            }

         </ul>
         <p><input id = '1' name='name' placeholder='Name' className={styles.listInput} onChange={(e) => handle(e)} /></p>
         <p><input id = '2' name='age'  placeholder='Age' className={styles.listInput} onChange={(e) => handle(e)} /></p>
         <button className={styles.listButton} onClick={() => {
            addUser()
            console.log(users)
         }}>Add User</button>
      </>
   )

}


export default List