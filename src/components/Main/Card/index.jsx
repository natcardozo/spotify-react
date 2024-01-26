import React from 'react'

import "./Card.css"

export default function Card({playlist, image, cardClass}) {
  return (
    <div className={`card ${cardClass}`}>
        <span>{playlist}</span>
        <img src={image} alt={playlist} />
    </div>
  )
}
