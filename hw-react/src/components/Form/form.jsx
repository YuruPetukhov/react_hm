import { useEffect } from "react"
import { useState } from "react"
import Info from "../Info"

export const Form = () => {
    const [user, setUser] = useState({
        name:"",
        password:"",
        age:""
    })
    const [errors, setErrors] = useState({
        name:"",
        password:"",
        age:""
    })
    const [info, setInfo] = useState([])
    useEffect(() => { //будет вызываться при каждом изменении
        if (errors.name === '' && errors.password === '' && errors.age === '') {
            setInfo([...info, user])
            setUser ({
                name:"",
                password:"",
                age:""
            })
        }
        
    }, [errors]) //если пустой массив, то будет вызываться только 1 раз после маунтинга (после build'a); если в массиве есть зависимость какая-то, то useEffect будет вызываться при изменнии зависимости

    const handleSubmit = (e) => { //какой-то метод; пока непонятно зачем это; e - сокращение от event
        e.preventDefault() //останавливает дефолтовое событие -> в данном случае форма при отправе автоматом перезагружает страницу, а этот метод помогает избежать перезагрузки
         setErrors(  {
            name: user.name.length < 3 ? "Имя должно быть не короче 3 букв" : '',
            password: user.password.length < 10 ? "Минимальная длина пароля: 10 символов": '',
            age: +user.age < 18  ? "Вам должно быть больше 18" : +user.age > 100 ? "Да не может быть!": '' // + нужен чтобы преобразовать стрингу в число
        })
    }

    const handleChange = ({target:{name, value}}) => { //динамический обработчик событий зачем-то
        setUser({
            ...user, [name]: value //...user копирует наш объект, чтобы потом изменить в нем только поле name
        })
    }
    
    return (
        <div className="wrapper">
            <form> {/* в момент отправки данных вызывается функция handleSubmit */}
                <h1 className="formTitle">Регистрация</h1>
                <div className="form">
                <p className="formInput_title">Имя пользователя <input className="formInput_name" id="user" type="text" name="name" value={user.name} placeholder="Введите имя" onChange={handleChange}/></p> {/* onChange - событие инпута - на каждое нажатие вызывается функция */}
                <p className="formError"> {errors.name} </p>
                <p className="formInput_title">Возраст <input className="formInput_age" id="age" type="text" name="age" value={user.age} placeholder="Введите возраст" onChange={handleChange}/></p>
                <p className="formError">{errors.age}</p>
                <p className="formInput_title">Пароль <input className="formInput_password" id="password" type="password" name="password" value={user.password} placeholder="Введите пароль" onChange={handleChange} /></p>
                <p className="formError">{errors.password}</p>
                </div>
                <button className="formBtn" onClick={handleSubmit}>Готово</button> 
            </form>
            <Info users = {info} /> {/*users - переменная-объект-пропс, а info Это стейт */}
        </div>
    )
}