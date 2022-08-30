import React from 'react'

const NotFound = () => {
  return (
    <div>
      <h1>Page Not Found</h1>
      <button className='flat-button' onClick={() => (window.location.href = "/")} >
        Back to Home
      </button>
    </div>
  )
}

export default NotFound
