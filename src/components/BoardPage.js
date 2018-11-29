import React, { Component } from 'react'
import BoardCollection from './BoardCollection'
import BoardDetail from './BoardDetail'

import Header from './Header'


class BoardPage extends Component {

  state={
    boards:[],
    lists:[],
    cards:[],
    listOrder:[],
    users:[],
    allCards:true,
    currentCard:null,
    newBoardName: "",
    newListName: "",
    newCardName: "",
    allBoards:true,
    currentBoard:null
  }

  componentDidMount(){
    fetch('http://localhost:4000/boards').then(resp =>resp.json()).then(boardsData => this.setState({boards:boardsData}))
    fetch('http://localhost:4000/lists').then(resp =>resp.json()).then(listsData => this.setState({lists:listsData}))
    fetch('http://localhost:4000/cards').then(resp =>resp.json()).then(cardsData => this.setState({cards:cardsData}))
  }

  createNewBoard = (event) => {
    event.preventDefault()
    fetch('http://localhost:4000/boards',{
      method:'POST',
      headers: {
        'Accept':'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name:this.state.newBoardName,
        background:''
      })
    })
    .then(resp =>resp.json())
    .then(newBoard => this.setState(prevState => ({
      boards:[...prevState.boards, newBoard],
      newBoardName:""
    })))
    event.target.reset()
  }

  createNewList = (event, boardId) => {
    event.preventDefault()
    fetch('http://localhost:4000/lists',{
      method:'POST',
      headers: {
        'Accept':'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title:this.state.newListName,
        position:null,
        board_id:boardId
      })
    })
    .then(resp =>resp.json())
    .then(newList => this.setState(prevState => ({
      lists:[...prevState.lists, newList],
      newListName:""
    })))
    event.target.reset()
  }

  createNewCard = (event, listId) => {
    event.preventDefault()
    fetch('http://localhost:4000/cards',{
      method:'POST',
      headers: {
        'Accept':'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title:this.state.newCardName,
        description: "",
        comment: "",
        list_id:listId
      })
    })
    .then(resp =>resp.json())
    .then(newCard => this.setState(prevState => ({
      cards:[...prevState.cards, newCard],
      newCardName:""
    })))
    event.target.reset()
  }

  handleNaming = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  changeCardView = (cardId) => {
    this.setState({
      allCards:false,
      currentCard:cardId
    })
  }

  seeAllCards = () => {
    this.setState({
      currentCard: null,
      allCards: true
    })
  };

  toggleBoardView = (boardId) => {
    this.setState({
      currentBoard:boardId,
      allBoards:false,

    })
  }

  seeAllBoards = () => {
    this.setState({
      currentBoard:null,
      allBoards:true
    })
  }

render() {
  let displayedView;
  let selectedBoard = this.state.currentBoard ? this.state.boards.find(board => board.id === this.state.currentBoard) : null;


      if (this.state.allBoards) {
        displayedView = <BoardCollection
          boards={this.state.boards}
          createNewBoard = {this.createNewBoard}
          handleNaming = {this.handleNaming}
          toggleBoardView={this.toggleBoardView}/>
      } else {
        displayedView = <BoardDetail
          lists={this.state.lists}
          cards={this.state.cards}
          selectedBoard={selectedBoard}
          createNewList={this.createNewList}
          toggleBoardView={this.toggleBoardView}
          seeAllBoards={this.seeAllBoards}
          changeCardView={this.changeCardView}
          seeAllCards={this.seeAllCards}
          currentCard={this.state.currentCard}
          currentBoard={this.state.currentBoard}
          allCards={this.state.allCards}
          createNewCard={this.createNewCard}
          handleNaming={this.handleNaming}/>
      }



  return (
    <div className='ui container'>
        <Header/>
        <div className='ui grid'>
          {displayedView}
        </div>
        </div>
    )
  }
}
export default BoardPage