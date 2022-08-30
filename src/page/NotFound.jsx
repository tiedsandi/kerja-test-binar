import React from 'react'

const NotFound = () => {
  return (
    <div>
      <button onClick={() => (window.location.href = "/")} >
        Back to Home
      </button>
    </div>
  )
}

export default NotFound
