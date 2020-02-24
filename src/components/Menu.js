import React from 'react';
import './Menu.css';
class Menu extends React.Component {
  completedItemsCount = () => {
    let completedCount = 0;
    for (let i = 0; i < this.props.items.length; i++) {
      if (this.props.items[i].completed) {
        completedCount += 1;
      }
    }
    return completedCount;
  }
  barWidth = () => {
    let width = (this.completedItemsCount() / this.props.items.length) * 100;
    return `${width}%`;
  }
    render(){
      return (
        <>
          <div id="menuBar">
            <div><p>{this.completedItemsCount()} / {this.props.items.length}</p></div>
            <div className="progress">
              <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{'width': this.barWidth()}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </>
      )
    }
  }
  
  export default Menu;