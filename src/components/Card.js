import React from 'react'



const Card = (props) => {



  return (

  <div className='ui raised blue card' id={props.card.position}
        draggable
        onDrop={(event)=>{props.onCardDrop(event, props.card.id)}}
        onDragStart={(event)=>{props.onDragStart(event, props.card.id)}}
        onDragOver={(event)=>{props.onDragOver(event)}}
        onClick={()=>{props.changeCardView(props.card.id)}}>
    <div className='content' id={props.card.position}>
      <div className='header' id={props.card.position}>{props.card.title}
      </div>
    </div>
  </div>

  )
}

export default Card
