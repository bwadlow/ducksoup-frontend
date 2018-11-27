import React from 'react'
import Board from './Board'


const BoardPage = (props) => {
  const boardArray = props.boards.map(board =>(
    <Board
      key={board.id}
      board={board}
      lists={props.lists}
      cards={props.cards}
      handleNaming={props.handleNaming}
      createNewList = {props.createNewList}
      createNewCard = {props.createNewCard}/>
  ))

  return (
    <div className='ui container'>
      <div className="ui grid">
      <form className='ui form' onSubmit={(event)=>{props.createNewBoard(event)}}>
      <input name='newBoardName' placeholder='New Board Name'onChange={props.handleNaming}/>
      <input type="submit" value="+ Board" className='ui blue mini button' />
      </form>
      </div>
    {boardArray}
    </div>




  )
}
export default BoardPage
