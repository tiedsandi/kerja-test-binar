import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/modal';
import { editProduct } from '../redux/product';

const Edit = ({ product }) => {
    const [name, setName] = useState(product?.name);
    const [price, setPrice] = useState(product?.price);
    const [imgUrl, setImgUrl] = useState(product?.imageurl);
    const [error, setError] = useState('');
    const id = product.id
    // const [success, setSuccess] = useState('');

    const dispatch = useDispatch();

    const submitEdit = (e) => {
        e.preventDefault()
        if (name === "" || price === "" || imgUrl === "") {
            setError('fill in all forms')
        } else {
            const data = {
                name,
                price,
                imageurl: imgUrl
            }
            dispatch(editProduct({ id, data })).then(
                alert('edited successfully')
            )
        }
    }

    return (
        <div className='create'>
            <div className="modal-body">
                <section className='form-modal'>
                    <h1 className='title-modal'>Edit Product</h1>
                    {error && error}
                    {/* {success && success} */}
                    <ul>
                        <li>
                            <input
                                placeholder="Product Name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </li>
                        <li>
                            <input
                                placeholder="Price (Dollar USD)"
                                type="text"
                                name="price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required />
                        </li>
                        <li>
                            <input
                                placeholder="Image url"
                                type="text"
                                name="url"
                                value={imgUrl}
                                onChange={(e) => setImgUrl(e.target.value)}
                                required />
                        </li>
                    </ul>
                </section>
            </div>
            <div className="footer-modal">
                <div className="btn-back" onClick={() => dispatch(setModal(''))}>Back</div>
                <button className='btn-submit' onClick={submitEdit}>Update</button>
            </div>
        </div>
    )
}

export default Edit
