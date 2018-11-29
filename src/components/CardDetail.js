import React from 'react'



const CardDetail = (props) => {


  return (
    <div className="ui container" >
      <div className="ui center aligned grid">
    <div className='ui blue raised card'>
      <div className='content'>
        <div className='header'></div>
        <div className='content'>
          <form className='ui form'>
            <label>Description</label>
            <textarea placeholder='Provide a detailed description' rows='3' />
            <button className='ui blue compact button'>SAVE</button>
          </form>
          <div align='right'>
          <i aria-hidden='true' className='close link large icon' onClick={props.seeAllCards}/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  )


}
export default CardDetail
