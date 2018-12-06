import React from 'react'

const CardDetail = (props) => {

  const messageBox =
  <div className="ui container" >
  <label>Description</label>
  <div className='ui segment'>
    <p>{props.card.description}</p>
  </div>
  <i aria-hidden='true' className='left aligned edit link small icon' onClick={props.ChangeCardDetailComment}/>
  </div>

  const textArea =
  <div className="ui container">
  <label>Description</label>
  <form className='ui form' onSubmit={(event)=>{props.createCardComment(event, props.card.id)}}>
    <textarea name="commentText" onChange={props.handleNaming} placeholder='Provide a detailed description' defaultValue={props.card.description} rows='5'/>
    <input type='submit' value='+ Comment' className='ui blue mini button' />
  </form>
  </div>



  const commentBox = props.commentDisplay ? messageBox : textArea


  return (
              <div id="cardDetail">
                <div  className='ui blue raised card detail'>
                  <div className='content'>
                    <div className='header'>{props.card.title}</div>
                      <div className='content'>
                        {commentBox}
                        <div align='right'>
                          <i aria-hidden='true' className='close link small icon' onClick={props.seeAllCards}/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

          )


}
export default CardDetail
