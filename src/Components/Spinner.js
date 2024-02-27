import React from 'react'

const Spinner = () => {
  return (
    <div>
          <div style={{ textAlign: "center" }}>
      <div
        className={`spinner-border text-${props.Color}`}
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    </div>
  )
}

export default Spinner
