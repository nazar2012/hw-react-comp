import { CardItem } from "./CardItem"

export const CardList = ({ data }) => {
    return (
        <ul>{data.map(({ id, name, age, city, email, isStudent, createdAt }) => {
            return (
                <CardItem key={id} name={name} age={age} city={city} email={email} isStudent={isStudent} createdAt={createdAt} />
            )
        })}</ul>
    )
}