import React from 'react';
import { Helmet } from 'react-helmet';
import  Header  from './components/Header';
import uuid from 'uuid';
import ToDoContainer from './components/ToDoContainer';
import './App.css';
import Sidebar from './components/Sidebar';

const TITLE = 'React ToDo App'

class App extends React.Component {

  state = {
    items : [],
    filter: ''
  }
  items = [
      {   
          id: uuid.v4(),
          content: "Clean the house",
          completed: false
      },
      {   
          id: uuid.v4(),
          content: "Study for finals",
          completed: false
      },
      {   
          id: uuid.v4(),
          content: "Take the dog out for a walk",
          completed: false
      },
      {   
          id: uuid.v4(),
          content: "Run for 1 hour",
          completed: false
      },
      {   
          id: uuid.v4(),
          content: "Call the bank to extend the credit card limit",
          completed: false
      },
      {   
          id: uuid.v4(),
          content: "Buy many bottles of Manaos de Uva",
          completed: false
      },
      {   
          id: uuid.v4(),
          content: "Eat doritos and mountain dew",
          completed: false
      }
  ];

  constructor(){
      super();
      this.state = {
        items:this.items,
        filter:''}; // Initial data state
  }

  onClickDelete = (id,event) => {
    this.setState({
      items: this.state.items.filter(todo => {
        return todo.id !== id;        
      }) 
    });
    event.target.blur();    
  }

  onCheckboxChange = (id,event) => {
    this.setState({
      items: this.state.items.map(todo => {
        if (todo.id === id) {
          todo.completed = event.target.checked;
        }
        return todo;
      })
    })
  }
  
  onClickAddItem = (event) => {
    event.preventDefault();
    let newContent = document.querySelector('#addItemTextArea').value;
    let newId = uuid.v4();
    this.setState({
      items: [...this.state.items].concat([{id: newId, content: newContent, completed: false}])
    }) 
    event.target.blur();
  }

  onClickClear = (event) => {
    event.preventDefault();
    document.querySelector('#addItemTextArea').value = '';
    event.target.blur();
  }

  onChangeSearch = (event) => {
    console.dir(event.target);
    this.setState({
      filter: event.target.value
    });
  }

  toggleRender = () => {
      if(this.state.filter === '' || this.state.filter === undefined) {
        return <ToDoContainer items={this.state.items} onClickDelete={this.onClickDelete}
        onCheckboxChange={this.onCheckboxChange}/>;
      } else {
        let filteredItems = this.state.items.filter(item => {
          return item.content.toLowerCase().includes(this.state.filter.toLowerCase());
        });
        return <ToDoContainer items={filteredItems} onClickDelete={this.onClickDelete}
        onCheckboxChange={this.onCheckboxChange}/>;
      }
  }

  render(){
    return (
      <>
      <Helmet><title>{ TITLE }</title></Helmet>
      <Header />
      <div id="mainArea">
        <Sidebar onClickAddItem={this.onClickAddItem} onClickClear={this.onClickClear} onChangeSearch={this.onChangeSearch}/>
        <div id="mainContainer">{this.toggleRender()}
        </div>
      </div>
      </>
    )
  }
}

export default App;
