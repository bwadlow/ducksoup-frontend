import React, {Fragment} from 'react'
import ListCollection from './ListCollection'

const BoardDetail = (props) => {


  return (
    <Fragment>

    <div className="ui four column grid">
      <h2 className='ui left aligned header'>{props.selectedBoard.name}</h2>
      <i aria-hidden='true' className='large close link icon' onClick={props.seeAllBoards}/><br/><br/>
    <div className="ui grid column">
    <form className='ui form' onSubmit={(event)=>{props.createNewList(event, props.currentBoard)}}>
    <input name='newListName' placeholder='New List Name'onChange={props.handleNaming}/>
    <input type='submit' value='+ List' className='ui blue mini button' />

    </form>
    </div>
    <ListCollection
      lists = {props.lists}
      selectedBoard={props.selectedBoard}
      cards={props.cards}
      changeCardView={props.changeCardView}
      seeAllCards={props.seeAllCards}
      currentCard={props.currentCard}
      allCards={props.allCards}
      createNewCard={props.createNewCard}
      handleNaming={props.handleNaming}
      onDragOver={props.onDragOver}
      onDragStart={props.onDragStart}
      onDrop={props.onDrop}
      onCardDrop={props.onCardDrop}/>
  </div>
  </Fragment>


  )
}
export default BoardDetail
