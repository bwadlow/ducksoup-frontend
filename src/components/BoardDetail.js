import React from 'react'
import ListCollection from './ListCollection'

const BoardDetail = (props) => {


  return (
    <div className="ui four column grid">
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
      seeAllBoards={props.seeAllBoards}
      changeCardView={props.changeCardView}
      seeAllCards={props.seeAllCards}
      currentCard={props.currentCard}
      allCards={props.allCards}
      createNewCard={props.createNewCard}
      handleNaming={props.handleNaming}/>
  </div>


  )
}
export default BoardDetail
