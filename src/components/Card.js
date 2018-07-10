import React from 'react'

import '../styles/Card.css'

const Card = ({  alt, id, handleClick, src }) => {
  return (
    <div className={`col-sm-3`}>
      <div className="card">
        <img
          alt={alt}
          className="card-img-top image"
          id={id}
          onClick={handleClick}
          src={src}
        />
      </div>
    </div>
  )
}

export default Card