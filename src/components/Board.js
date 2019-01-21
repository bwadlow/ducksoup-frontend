import React from 'react'





const Board = (props) => {


    return (
      <div className='ui raised blue card' onClick={()=>{props.toggleBoardView(props.board.id)}}>
        <div className='content' >
          <div id="boardtitle" className='header'>{props.board.name}
      
          </div>
        </div>
      </div>

    )
}

export default Board
