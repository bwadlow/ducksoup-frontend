import React from 'react'
import List from './List'

const Board = (props) => {

  const listGroup = props.lists.filter(list =>(
    list.board_id === props.board.id
  ))


  const listArray = listGroup.map(list => (
    <List
    key={list.id}
    list={list}
    cards = {props.cards}
    handleNaming={props.handleNaming}
    createNewCard = {props.createNewCard}/>
  ))


  return (
    <div className="ui grid">
      <div className="row">
      <h1>{props.board.name}</h1>
      </div>
      <div className="row">
      {listArray}
      <form className='ui form' onSubmit={(event)=>{props.createNewList(event, props.board.id)}}>
      <input name='newListName' placeholder='New List Name'onChange={props.handleNaming}/>
      <input type='submit' value='+ List' className='ui blue mini button' />
      </form>
    </div>
    </div>
  )
}

export default Board
