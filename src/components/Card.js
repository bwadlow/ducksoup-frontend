import React from 'react'



const Card = (props) => {



  return (

  <div className='ui raised blue card'
        draggable
        onDragStart={(event)=>{props.onDragStart(event, props.card.id)}}
        onClick={()=>{props.changeCardView(props.card.id)}}>
    <div className='content' >
      <div className='header' >{props.card.title}
      </div>
    </div>
  </div>

  )
}

export default Card
