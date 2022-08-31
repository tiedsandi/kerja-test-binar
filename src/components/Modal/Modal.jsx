import Create from '../../feature/Create'
import Delete from '../../feature/Delete'
import Edit from '../../feature/Edit'
import './style.scss'

import { useSelector, useDispatch } from 'react-redux';
import { fetchProduct } from '../../redux/product';
import { useEffect } from 'react';

const Modal = () => {
    const type = useSelector((state) => state.modal.type);
    const id = useSelector((state) => state.modal.id);
    const loading = useSelector((state) => state.product.loading)
    const product = useSelector((state) => state.product.product)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [dispatch, id]);

    return (
        <div className='modal'>
            <div className="modal-container">
                {type === 'create' && <Create />}
                {
                    !loading && product && (
                        <>
                            {type === 'edit' && <Edit product={product} />}
                            {type === 'delete' && <Delete name={product.name} />}
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Modal
