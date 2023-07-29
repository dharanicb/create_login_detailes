import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  })
  const navigate = useNavigate()

  const handleChange = event => {
    const {name, value} = event.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault() // Store data in local storage
    localStorage.setItem('userData', JSON.stringify(formData)) // You can redirect to another page or display a success message here
    alert('Signup successful!')
    setFormData({
      name: '',
      password: '',
      email: '',
      phone: '',
      profession: '',
    })
    navigate('/')
  }

  return (
    <div className="container">
      <div>
         <h1>User Signup</h1>     
        <form onSubmit={handleSubmit} className="Auth-form">
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
          <label htmlFor="email">Email:</label> 
          <input
            type="email"
            className="input-container"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="phone">Phone number:</label>
          <input
            type="tel"
            className="input-container"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="profession">Profession:</label>
          <select
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select profession
            </option>
            <option value="student">Student</option>
            <option value="engineer">Engineer</option>
            <option value="doctor">Doctor</option>
            {/* Add more options as needed */}
          </select>
          <br />
                  <input type="submit" value="Sign Up" />
        </form>
      </div>
    </div>
  )
}

export default Signup
