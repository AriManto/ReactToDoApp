import React from 'react';
import './Sidebar.css';
class Sidebar extends React.Component {
    render(){
      return (
        <nav>
            <div id="sidebarContainer">
                <form>
                    <h3>Search</h3>
                    <input type="text" className="form-control" onKeyUp={this.props.onChangeSearch.bind(this)}></input>
                    <hr></hr>
                    <h3>Add item</h3>
                    <textarea id="addItemTextArea" className="form-control"></textarea>
                    <div>
                        <button id="addBtn" className="btn btn-outline-primary" onClick={this.props.onClickAddItem.bind(this)}>Add</button>
                        <button id="clearBtn" className="btn btn-outline-secondary" onClick={this.props.onClickClear.bind(this)}>Clear</button>
                    </div>
                </form>
            </div>
        </nav>
      )
    }
  }
  
  export default Sidebar;