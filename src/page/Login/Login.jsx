import './style.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const submitLogin = (e) => { }
  return (
    <div className='login-section'>
      <h1 >Login</h1>
      <section className='contact-form'>
        <form onSubmit={submitLogin} >
          <ul>
            <li>
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <input placeholder="Password" type="password" name="password" required />
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
