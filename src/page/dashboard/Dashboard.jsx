import './style.scss'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useEffect } from 'react'
import { fetchProduct } from '../../redux/product'

const Dashboard = () => {
  const products = useSelector((state) => state.product.products)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch]);

  return (
    <div className='dashboard'>
      <Header />
      <hr />
      <div className="product-list">
        {
          products && products.map((product) => (
            <Fragment key={product.id}>
              <Card data={product} />
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
