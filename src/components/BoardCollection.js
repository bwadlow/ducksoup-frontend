import React, { Component } from 'react';
import Board from './Board';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions'

class BoardCollection extends Component{

componentDidMount() {
  this.props.fetchBoards()
}

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
export default connect (null, {fetchBoards})(BoardCollection)
