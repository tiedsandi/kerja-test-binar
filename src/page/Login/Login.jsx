import './style.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { AuthLogin } from '../../redux/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(state => state.auth.error)
  const dispatch = useDispatch();
  const submitLogin = (e) => {
    e.preventDefault()
    const data = {
      email,
      password
    }
    dispatch(AuthLogin(data))
  }
  return (
    <div className='login-section'>
      <h1 >Login</h1>
      <section className='contact-form'>
        {error && <h3 className='sign'>{error}</h3>}
        <form onSubmit={submitLogin} >
          <ul>
            <li>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </li>
            <li>
              <input
                placeholder="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                required />
            </li>
            <li>
              <input type="submit" className="flat-button" value="Login" />
            </li>
          </ul>
        </form>
      </section>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  )
}

export default Login
