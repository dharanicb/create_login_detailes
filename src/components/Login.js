import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })
  const navigate = useNavigate()
  const handleChange = event => {
    const {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleLogin = event => {
    event.preventDefault()
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (
      userData &&
      formData.name === userData.name &&
      formData.password === userData.password
    ) {
      // Move to the next screen (you can redirect to another page here)
      alert('Login successful!')
      setFormData({
        name: '',
        password: '',
      })
      navigate('/dashboard')
    } else {
      // Show "Invalid Credentials" message to the user
      alert('Invalid Credentials')
    }
  }

  const handelSignUp = () => {
    navigate('/signup')
  }

  return (
    <div className="container">
      <div>
        <h1>User Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="input-container"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="input-container"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
           <input type="submit" value="Login" />
        </form>
        <div>
          <button className="cm-btn" onClick={() => handelSignUp()}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
