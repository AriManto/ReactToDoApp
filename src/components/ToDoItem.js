import React from 'react';
import './ToDoItem.css';
class ToDoItem extends React.Component {
    getStyle = () => {
      return {
        textDecoration: this.props.item.completed ? 'line-through' : 'none'
      }
    }
    render(){
      const { id,content } = this.props.item; // Destructuring

      return (
        <div className="todoCard">
          <div className="todoCheckboxWrapper">
            <input className="todoCheckbox" type="checkbox" 
            onChange={this.props.onCheckboxChange.bind(this, id)}
            value={this.props.item.completed}></input>
          </div>
          <div className="todoTextWrapper">
            <p className="todoText" style={this.getStyle()}>{content}</p>
          </div>
          <div className="todoDeleteWrapper">
            <button className="btn btn-outline-danger deleteBtn" 
            onClick={this.props.onClickDelete.bind(this, id)}>X</button>
          </div>
        </div>
      )
    }
  }
  
  export default ToDoItem;