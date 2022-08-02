export const Info = ({users}) => {
    return (
        <div className="info">
        {users.length > 1 && users.map(item=>(
            <div>
            <p>{'Имя: ' + item.name}</p>
            <p>{'Возраст: ' + item.age}</p>
            </div>
            ))}
        </div>
    )
    
}