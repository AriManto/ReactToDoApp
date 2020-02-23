import React from 'react';
import './ToDoItem.css';
class ToDoItem extends React.Component {

    render(){
      const { id,content } = this.props.item; // Destructuring

      return (
        <div className="todoCard">
          <div className="todoCheckboxWrapper">
            <input className="todoCheckbox" type="checkbox"></input>
          </div>
          <div className="todoTextWrapper">
            <p className="todoText">{content}</p>
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