import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'


const Card = ({ data, SetEdit, setDelete }) => {
    return (
        <>

            <div className='Card'>
                <div className="img">
                    <img src={data.imageurl} alt={data.id} />

                </div>
                <div className='footer'>
                    <h5 className="title">{data.name}</h5>
                    <p className="price">${data.price}</p>
                </div>

                <div className="icon">
                    <FontAwesomeIcon
                        icon={faPenToSquare}
                        className='icon-edit'
                        onClick={() => SetEdit('true')}
                    />
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        className='icon-delete'
                        onClick={() => setDelete('true')}
                    />
                </div>
            </div>
        </>
    )
}

export default Card
