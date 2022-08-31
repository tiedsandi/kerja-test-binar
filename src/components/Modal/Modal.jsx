import Create from '../../feature/Create'
import Delete from '../../feature/Delete'
import Edit from '../../feature/Edit'
import './style.scss'

import { useSelector } from 'react-redux';

const Modal = () => {
    const type = useSelector((state) => state.modal.type);
    return (
        <div className='modal'>
            <div className="modal-container">
                {type === 'create' && <Create />}
                {type === 'edit' && <Edit />}
                {type === 'delete' && <Delete />}
            </div>
        </div>
    )
}

export default Modal
