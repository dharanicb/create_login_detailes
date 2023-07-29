import React from 'react'

const Header = () => {
  const showOffice = () => {
    alert(
      'Company: Geeksynergy Technologies Pvt Ltd Address: Sanjayanagar, Bengaluru-56 Phone: XXXXXXXXX09 Email: XXXXXX@gmail.co',
    )
  }
  return (
    <div className="header">
       {' '}
      <button className="company" onClick={() => showOffice()}>
        Company
      </button>
    </div>
  )
}

export default Header
