import './style.scss'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { setId, setModal } from '../../redux/modal';

const Card = ({ data }) => {
    const dispatch = useDispatch();
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
                        onClick={() => {
                            dispatch(setModal('edit'))
                            dispatch(setId(data.id))
                        }}
                    />
                    <FontAwesomeIcon
                        icon={faTrashCan}
                        className='icon-delete'
                        onClick={() => {
                            dispatch(setModal('delete'))
                            dispatch(setId(data.id))
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Card
