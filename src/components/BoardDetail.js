import React, {Fragment} from 'react'
import ListCollection from './ListCollection'

const BoardDetail = (props) => {


  return (
    <Fragment>

    <div className="ui four column grid">
      <div className="column">
      <h2 class='ui icon header'>{props.selectedBoard.name}</h2>
      <i aria-hidden='true' className='close link icon' onClick={props.seeAllBoards} />
    <form className='ui mini form' autocomplete="off" onSubmit={(event)=>{props.createNewList(event, props.currentBoard)}}>
    <input className='ui mini input' name='newListName' placeholder='New List Name'onChange={props.handleNaming}/>
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
      onCardDrop={props.onCardDrop}
      commentDisplay={props.commentDisplay}
      ChangeCardDetailComment={props.ChangeCardDetailComment}
      createCardComment={props.createCardComment}/>
  </div>
  </Fragment>


  )
}
export default BoardDetail
