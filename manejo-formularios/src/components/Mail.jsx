import React from 'react'

const Mail = ({ datos }) => {
    const {nombre = '', asunto = '', email = '', observaciones = ''} = datos
  return (
    <div>
      <div>
        <h2>{asunto}</h2>
        <p>
            De:{' '}
            <span>{nombre} - ({email})</span>
        </p>
      </div>
      <div>
        <p>{observaciones}</p>
      </div>
    </div>
  )
}

export default Mail
