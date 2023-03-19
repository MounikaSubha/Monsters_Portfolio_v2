import './card-container.style.css'

const CardContainer = (props) => {
    const { id, email, name } = props.monster;
    const className = props.className;
    return (
        <div className={className} key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    )
}

export default CardContainer;