import './style.scss'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useEffect } from 'react'
import { fetchProducts } from '../../redux/product'
import Modal from '../../components/Modal/Modal'


const Dashboard = () => {
  const products = useSelector((state) => state.product.products)
  const showModal = useSelector((state) => state.modal.type);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch]);

  return (
    <div className='dashboard'>
      {showModal && <Modal />}
      <Header />
      <hr />
      <div className="product-list">
        {
          products && products.length > 0 ? (
            products.map((product) => (
              <Fragment key={product.id}>
                <Card data={product} />
              </Fragment>
            ))
          ) : <h1>No Products</h1>
        }
      </div>
    </div>
  )
}

export default Dashboard
