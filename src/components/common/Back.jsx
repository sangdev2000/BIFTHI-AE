import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className='back'>
        <div className='container'>
          <h1>{title}</h1>
          <span>{name}</span>
        </div>
        <img src={cover} alt='' />
      </div>
    </>
  )
}

export default Back
