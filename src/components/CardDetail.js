import React from 'react'
import Card from './Card'

const CardDetail = (props) => {


  return (
    <div className='ui blue card' >
      <div className='content'>
        <div className='header'>{props.card.title}</div>
        <div className='content'>
          <div className='description'>
            {props.card.description}
          </div>
        </div>
      </div>
    </div>
  )


}
export default CardDetail
