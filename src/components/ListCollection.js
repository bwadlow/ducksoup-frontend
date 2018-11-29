import React, { Component } from 'react'
import List from './List'
import CardDetail from './CardDetail'


class ListCollection extends Component {

    listCardArray = (listArray) => {
      return listArray.map(list => {
        return <List
          key = {list.id}
          list={list}
          cards={this.props.cards}
          changeCardView={this.props.changeCardView}
          createNewCard={this.props.createNewCard}
          handleNaming={this.props.handleNaming}/>
      })
    }

    render() {
      let listArray = this.props.lists.filter(list=>(
        list.board_id === this.props.selectedBoard.id
      ))

      let displayedView;
      let selectedCard = this.props.currentCard ? this.props.cards.find(card => card.id === this.props.currentCard) : null;

      if (this.props.allCards) {
        displayedView = this.listCardArray(listArray)
      } else {
        displayedView = <CardDetail
          card={selectedCard}
          seeAllCards={this.props.seeAllCards}/>
      }


    return(
      <>
        <h3 className='ui center aligned dividing header'>{this.props.selectedBoard.name}</h3>
          <i aria-hidden='true' className='large close link icon' onClick={this.props.seeAllBoards}/>
        <div className='row'>
          {displayedView}
        </div>

        </>
    )
  }
}
export default ListCollection
