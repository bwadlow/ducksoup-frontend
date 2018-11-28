import React from 'react'



const CardDetail = (props) => {


  return (
    <div className="ui container" >
      <div className="ui center aligned grid">
    <div className='ui blue raised card' >
      <div className='content'>
        <div className='header'>{props.card.title}</div>
        <div className='content'>
          <form className='ui form'>
            <label>Description</label>
            <textarea placeholder='Provide a detailed description' rows='3' />
            <button className='ui blue compact button' onClick={props.seeAll}>SAVE</button>
          </form>
          <div align='right'>
          <i aria-hidden='true' class='close link large icon' align='right' onClick={props.seeAll}/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  )


}
export default CardDetail
