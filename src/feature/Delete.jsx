import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../redux/modal';
import { deleteProduct } from '../redux/product';

const Delete = ({ name }) => {
    const id = useSelector((state) => state.modal.id);
    const dispatch = useDispatch()

    const submitDelete = () => {
        dispatch(deleteProduct(id)).then(
            alert('successfully deleted')
        )
    }

    return (
        <>
            <div className='title-delete' >
                <p >Are you sure watn to delete <br />{name}?</p>
            </div>
            <div className="footer-modal-delete">
                <button className='btn' onClick={() => dispatch(setModal(''))}>No</button>
                <button className='btn' onClick={submitDelete}>Yes, Delete it</button>
            </div>
        </>
    )
}

export default Delete
