import React, {Component} from 'react'
import Card from './Card'

class List extends Component {

  cardArray = (cardGroup) => {
    return cardGroup.map((card) =>{
     return <Card
      droppable
      key={card.id}
      card={card}
      changeCardView={this.props.changeCardView}
      onDragStart={this.props.onDragStart}
      onDragOver={this.props.onDragOver}
      onCardDrop={this.props.onCardDrop}/>
    }
  )}


render() {
  let cardGroup = this.props.cards.filter(card =>(
    card.list_id === this.props.list.id
  )).sort((a,b) => (a.position - b.position))



  return (

    <div id='list' className='ui raised card list'
        onDragOver={(event)=>{this.props.onDragOver(event)}}
        onDrop={(event)=>{this.props.onDrop(event, this.props.list.id)}}>
          <div className='content'>
            <div className='header' >{this.props.list.title}</div>
              {this.cardArray(cardGroup)}
            </div>

      <div className="ui card">
      <form className='ui form' autocomplete="off" onSubmit={(event)=>{this.props.createNewCard(event, this.props.list.id)}}>
        <input name='newCardName' placeholder='Enter New Card Title'onChange={this.props.handleNaming}/>
        <input type='submit' value="+ Card" className='ui blue mini button'/>
      </form>
      </div>
    </div>
  )}
}

export default List
