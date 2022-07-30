import { useState } from "react"

export const Form = () => {
    const [form, setForm] = useState({ user:{err:''}}) //нужно для сбора формы
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => { //какой-то метод; пока непонятно зачем это; e - сокращение от event
        e.preventDefault() //останавливает дефолтовое событие -> в данном случае форма при отправе автоматом перезагружает страницу, а этот метод помогает избежать перезагрузки
        if (form.user.length < 3) {
            setForm({
                ...form,
                user: {
                    ...form.user,
                    err: 'Имя пользователя должно быть не короче 3 символов'
                },
                password: {
                    ...form.password,
                    err: 'Пароль не может быть короче 10 символов'
                }
            })
        }
    }

    const handleChange = (e) => { //динамический обработчик событий зачем-то
        const element = e.target.name
        const value = e.target.value
        setForm({
            ...form,
            [element]: {
                value,
                err: null
            }
        })
    }
    
    return (
        <div className="form">
            <form onSubmit={handleSubmit}> {/* в момент отправки данных вызывается функция handleSubmit */}
                <h1 className="formTitle">Регистрация</h1>
                <input className="formInput_name" type="text" name="user" value={user} placeholder="Введите имя" onChange={(e) => handleChange()}/> {/* onChange - событие инпута - на каждое нажатие вызывается функция */}
                <p className="formError"> {form.user.err} </p>
                <input className="formInput_password" type="password" name="password" value={password} placeholder="Введите пароль" onChange={(e) => handleChange()} />
                <p className="formError">{form.user.err}</p>
                <button className="formBtn" type="submit">Готово</button>
            </form>
        </div>
    )
}