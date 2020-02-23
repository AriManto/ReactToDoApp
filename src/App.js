import React from 'react';
import { Helmet } from 'react-helmet';
import  Header  from './components/Header';
import ToDoContainer from './components/ToDoContainer';
import './App.css';
import Sidebar from './components/Sidebar';

const TITLE = 'React ToDo App'

class App extends React.Component {

  state = {
    items : []
  }
  items = [
      {   
          id: 0,
          content: "Clean the house",
          completed: false
      },
      {   
          id: 1,
          content: "Study for finals",
          completed: false
      },
      {   
          id: 2,
          content: "Take the dog out for a walk",
          completed: false
      },
      {   
          id: 3,
          content: "Run for 1 hour",
          completed: false
      },
      {   
          id: 4,
          content: "Call the bank to extend the credit card limit",
          completed: false
      },
      {   
          id: 5,
          content: "Buy many bottles of Manaos de Uva",
          completed: false
      },
      {   
          id: 6,
          content: "Eat doritos and mountain dew",
          completed: false
      }
  ];

  constructor(){
      super();
      this.state = {items:this.items}; // Initial data state
  }

  onClickDelete = (id) => {
    console.group('Delete '+id);
    this.setState({
      items: this.state.items.filter(todo => {
        console.log('todo.id:'+todo.id+'  |  id:'+id);
        return todo.id !== id;        
      }) 
    });
    console.groupEnd();
    console.log(this.state.items);
  }

  render(){
    return (
      <>
      <Helmet><title>{ TITLE }</title></Helmet>
      <Header />
      <div id="mainArea">
        <Sidebar />
        <ToDoContainer items={this.state.items} onClickDelete={this.onClickDelete}/>
      </div>
      </>
    )
  }
}

export default App;
