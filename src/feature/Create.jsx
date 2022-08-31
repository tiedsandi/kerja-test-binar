import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setModal } from '../redux/modal';
import { createProduct } from '../redux/product';

const Create = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const dispatch = useDispatch();

    const submitCreate = (e) => {
        e.preventDefault()
        if (name === "" || price === "" || imgUrl === "") {
            setError('fill in all forms')
        } else {
            const data = {
                name,
                price,
                imageurl: imgUrl
            }
            dispatch(createProduct(data)).then(
                setTimeout(() => {
                    window.location.reload();
                }, 1000)
            )
            setSuccess('successfully added product')
        }
    }

    return (
        <div className='create'>
            <h1 className='title-modal'>Create New</h1>
            {error && error}
            {success && success}
            <section className='form-modal'>
                <ul>
                    <li>
                        <input
                            placeholder="Product Name"
                            type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </li>
                    <li>
                        <input
                            placeholder="Price (Dollar USD)"
                            type="text"
                            name="price"
                            onChange={(e) => setPrice(e.target.value)}
                            required />
                    </li>
                    <li>
                        <input
                            placeholder="Image url"
                            type="text"
                            name="url"
                            onChange={(e) => setImgUrl(e.target.value)}
                            required />
                    </li>
                </ul>
            </section>
            <hr />
            <div className="footer-modal">
                <div className="btn-back" onClick={() => dispatch(setModal(''))}>Back</div>
                <button className='btn-submit' onClick={submitCreate}>Create</button>
            </div>
        </div>
    )
}

export default Create
