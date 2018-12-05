import React from 'react'



const Board = (props) => {


    return (
      <div className='ui raised blue card' onClick={()=>{props.toggleBoardView(props.board.id)}}>
        <div className='content' >
          <div id="boardtitle" className='header'>{props.board.name}
          <i aria-hidden='true' className='edit link small icon'></i>
          </div>
        </div>
      </div>

    )
}

export default Board
