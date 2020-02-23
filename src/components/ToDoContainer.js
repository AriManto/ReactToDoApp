import React from 'react';
import ToDoItem from './ToDoItem';
import './ToDoContainer.css';

class ToDoContainer extends React.Component {

    onClickDelete = (e) => {
        console.log(this.props);
    }
    render(){
        let result = [];
        for (let i = 0; i < this.props.items.length; i++){
            result.push(<ToDoItem item={this.props.items[i]} key={i}
                onClickDelete={this.props.onClickDelete}
                onCheckboxChange={this.props.onCheckboxChange}/>)
        }
      return (
        <div id="mainContainer">
            {result}
        </div>
      )
    }
  }
  
  export default ToDoContainer;