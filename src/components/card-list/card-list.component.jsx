import CardContainer from './card-container.component';
import './card-list.style.css'
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <CardContainer monster={monster}
                    className='card-container'
                />
            )
        })}
    </div>
)


export default CardList;