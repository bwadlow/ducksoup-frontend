import React from 'react'


const Card = (props) => {



  return (

  <div className='ui blue card' onClick={()=>{props.changeView(props.card.id)}}>
    <div className='content' >
      <div className='header' >{props.card.title}</div>
      <div className='content'>
    <div className='description'>
      {props.card.description}
    </div>
  </div>


    </div>
  </div>

  )
}

export default Card
