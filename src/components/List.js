import React from 'react'
import Card from './Card'



const List =(props) => {

  const cardGroup = props.cards.filter(card =>(
    card.list_id ===props.list.id
  ))

  const cardArray = cardGroup.map((card, index) =>(
    <Card
      key={card.id}
      card={card}
      index={index}
      changeCardView={props.changeCardView}
      onDragStart={props.onDragStart}
      onDragOver={props.onDragOver}/>
  ))



  return (


    <div id='list'
        className='ui raised card list'
        onDragOver={(event)=>{props.onDragOver(event)}}
        onDrop={(event)=>{props.onDrop(event, props.list.id)}}>
          <div className='content'>
            <div className='header' >{props.list.title}</div>
              {cardArray}
            </div>

      <div className="ui card">
      <form className='ui form' onSubmit={(event)=>{props.createNewCard(event, props.list.id)}}>
        <input name='newCardName' placeholder='Enter New Card Title'onChange={props.handleNaming}/>
        <input type='submit' value="+ Card" className='ui blue mini button'/>
      </form>
      </div>
    </div>

  

  )
}

export default List
