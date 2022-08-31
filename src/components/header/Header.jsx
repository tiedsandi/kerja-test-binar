import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../redux/modal';
import Modal from '../Modal/Modal';
import './style.scss'

const Header = () => {
    const showModal = useSelector((state) => state.modal.type);
    const dispatch = useDispatch();
    const logout = () => {
        localStorage.removeItem("access_token");
        window.location.reload();
    }
    return (
        <>
            {showModal === 'create' && <Modal />}
            <div className='header'>
                <div className='left'>
                    <h1 className='title'>Product List</h1>
                    <button className='btn-create' onClick={() => dispatch(setModal('create'))}>Create new</button>
                </div>
                <div>
                    <button onClick={logout} className='btn-logout'>Logout</button>
                </div>
            </div>
        </>
    )
}

export default Header
