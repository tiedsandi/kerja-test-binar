import './style.scss'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useEffect, useState } from 'react'
import { fetchProduct } from '../../redux/product'


const Dashboard = () => {
  const products = useSelector((state) => state.product.products)
  const [modalEdit, setModalEdit] = useState('false')
  const [modalDelete, setModalDelete] = useState('false')

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct())
  }, [dispatch]);

  return (
    <div className='dashboard'>
      {/* {modalEdit && <Modaledit />}
      {modalDelete && <Modaldelete />} */}
      <Header />
      <hr />
      <div className="product-list">
        {
          products && products.map((product) => (
            <Fragment key={product.id}>
              <Card data={product} setEdit={setModalEdit} setDelete={setModalDelete} />
            </Fragment>
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
