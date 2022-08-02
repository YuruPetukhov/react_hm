export const Info = ({users}) => {
    return (
        <div>
        {users.length > 1 && users.map(item=>(
            <div className="info">
            <p className="info_name">{'Имя: ' + item.name}</p>
            <p>{'Возраст: ' + item.age + ' лет'}</p>
            </div>
            ))}
        </div>
    )
    
}