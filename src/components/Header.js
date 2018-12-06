import React from 'react'
import logo from '../images/ducksoup_logo.png'


const Header = (props) => {

  return(

    <div className='ui relaxed three column grid'>
      <div className='column'>
        <img className='header-logo' src={logo} alt="ducksoup logo" />
        </div>
        <div className='center aligned column'>
          <form className='ui mini form' autoComplete="off" onSubmit={(event)=>{props.createNewBoard(event)}}>
            <div className='ui mini input'>
            <input className='ui mini input' type='text'  name='newBoardName' placeholder='Create a new Board' onChange={props.handleNaming}/>
            <input type="submit" value="+ Board" className='ui blue button'/>
            </div>
            </form>
        </div>
        <div className='right aligned column'>
          <i aria-hidden='true' className='log out link huge white icon' onClick={props.changeLoggedIn}/>

        </div>

    </div>



















  //   <div className='ui horizontal segments'>
  //     <div className='ui compact segment'>
  //       <form className='ui mini form' autoComplete="off" onSubmit={(event)=>{props.createNewBoard(event)}}>
  //       <div className='ui mini input'>
  //         <input className='ui mini input' type='text'  name='newBoardName' placeholder='Create a new Board' onChange={props.handleNaming}/>
  //         <input type="submit" value="+ Board" className='ui black button'/>
  //       </div>
  //       </form>
  //
  //     </div>
  //     <div className='ui compact segment'>
  //       <img className='header-logo' src={logo} alt="ducksoup logo" />
  //   </div>
  //   <div className='ui compact segment'>
  //     <i aria-hidden='true' className='log out big link icon' onClick={props.seeAllBoards}/>
  //     <p>Log Out</p>
  // </div>
  //   </div>

  )
}
export default Header
