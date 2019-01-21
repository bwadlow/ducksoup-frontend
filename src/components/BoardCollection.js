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
    <div className="ui four column grid" id="board-container">
      <div className="ui container">
      <h1>Your Board Collection</h1>
        {BoardArray}
        </div>
      </div>



  )
}
}
export default BoardCollection
