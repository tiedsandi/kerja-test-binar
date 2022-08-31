import './style.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthRegister } from '../../redux/auth';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.auth.error)
  const success = useSelector(state => state.auth.success)
  const dispatch = useDispatch();
  const submitRegis = (e) => {
    e.preventDefault()
    const data = {
      name,
      email,
      password
    }
    dispatch(AuthRegister(data))
  }
  return (
    <div className='register-section'>
      <h1 >Register</h1>
      <section className='contact-form'>
        {error && <h3 className='sign'>email {error}</h3>}
        {success && <h3 className='sign-success'>{success}</h3>}
        <form onSubmit={submitRegis} >
          <ul>
            <li>
              <input
                placeholder="Name"
                type="text"
                name="name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <input
                placeholder="Password"
                type="password"
                name="password"
                required onChange={(e) => setPassword(e.target.value)}
              />
            </li>
            <li>
              <input type="submit" className="flat-button" value="Register" />
            </li>
          </ul>
        </form>
      </section>
      <p>Already have account? <Link to="/">Login</Link></p>
    </div>
  )
}

export default Register
