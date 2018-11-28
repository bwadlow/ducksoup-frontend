import React from 'react'
import Card from './Card'


const List =(props) => {

  const cardGroup = props.cards.filter(card =>(
    card.list_id ===props.list.id
  ))

  const cardArray = cardGroup.map(card =>(
    <Card
      key={card.id}
      card={card}
      changeView={props.changeView}/>
  ))



  return (
    <div>
    <h3>{props.list.title}</h3>
      <div>
        {cardArray}
      </div>
      <br/>

      <form className='ui form' onSubmit={(event)=>{props.createNewCard(event, props.list.id)}}>
        <input name='newCardName' placeholder='Enter New Card Title'onChange={props.handleNaming}/>
        <input type='submit' value="+ Card" className='ui blue mini button'/>
      </form>


    </div>
  )
}

export default List
