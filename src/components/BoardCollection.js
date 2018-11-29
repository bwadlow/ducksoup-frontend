import React, { Component } from 'react'
import Board from './Board'

class BoardCollection extends Component{



  render() {
    const BoardArray = this.props.boards.map(board =>(
      <Board
        key={board.id}
        board={board}
        toggleBoardView={this.props.toggleBoardView}
        />
    ))

  return (
    <div className="ui four column grid">
      <div className="ui grid column">
        <form className='ui form' onSubmit={(event)=>{this.props.createNewBoard(event)}}>
        <input name='newBoardName' placeholder='New Board Name'onChange={this.props.handleNaming}/>
        <input type="submit" value="+ Board" className='ui blue mini button' />
        </form>
        </div>
        {BoardArray}
        </div>



  )
}
}
export default BoardCollection
