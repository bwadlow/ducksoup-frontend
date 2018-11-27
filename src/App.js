import React, { Component } from 'react'
import Header from './components/Header'
import BoardPage from './components/BoardPage'

import './App.css';

class App extends Component {

  state={
    boards:[],
    lists:[],
    cards:[],
    users:[],
    currentCard:null,
    
    newBoardName: "",
    newListName: "",
    newCardName: "",
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
    }).then(resp =>resp.json())
    .then(newBoard => this.setState(prevState => ({boards:[...prevState.boards, newBoard]})))
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
    }).then(resp =>resp.json())
    .then(newList => this.setState(prevState => ({lists:[...prevState.lists, newList]})))
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
      cards:[...prevState.cards, newCard]
    })))
    event.target.reset()
  }

  handleNaming = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }


  render() {
    return (
      <div>
        <Header/><br></br>
        <BoardPage
          boards={this.state.boards}
          lists={this.state.lists}
          cards={this.state.cards}
          newBoardName = {this.state.newBoardName}
          handleNaming = {this.handleNaming}
          createNewBoard = {this.createNewBoard}
          createNewList = {this.createNewList}
          createNewCard = {this.createNewCard}
          listToggle = {this.state.listToggle}
          cardToggle = {this.state.cardToggle}/>
      </div>
    );
  }
}

export default App;
