import React from 'react';
import './Sidebar.css';
class Sidebar extends React.Component {
    render(){
      return (
        <nav>
            <div id="sidebarContainer">
                <form>
                    <h3>Search</h3>
                    <input type="text" className="form-control"></input>
                    <hr></hr>
                    <h3>Add item</h3>
                    <textarea className="form-control"></textarea>
                    <div>
                        <button id="addBtn" className="btn btn-outline-primary">Add</button>
                        <button id="clearBtn" className="btn btn-outline-secondary">Clear</button>
                    </div>
                </form>
            </div>
        </nav>
      )
    }
  }
  
  export default Sidebar;