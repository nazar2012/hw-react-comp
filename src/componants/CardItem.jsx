export const CardItem = ({id, name, age, city, email, isStudent, createdAt}) => {
    return (
        <li key={id}>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{city}</p>
            <a href={email}>{email}</a>
            <p>{isStudent ? "студент" : "не студент"}</p>
            <time>{createdAt}</time>
        </li>
    )
}