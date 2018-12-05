import React from 'react'

const Card = (props) => {

  const descriptionIcon =
      <div>
      <i aria-hidden='true' className='file text outline small icon'/>
      </div>

      const displayIcon = props.card.description ? descriptionIcon : null

      const dueDate = () => {
        let x=new Date();
        x.setFullYear(2018,1,1);
        let today = new Date();

        if (x>today)
          {
          return "Overdue";
          }
        else if (x<today)
          {
          return "x days left";
          }
        else {
          return "Due Today";
          }
        }



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
      <div>
      {displayIcon}
      </div>
    </div>
  </div>

  )
}

export default Card
