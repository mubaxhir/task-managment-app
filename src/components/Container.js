import React, { Component } from "react";
import Timer from './Timer';
import TimerForm from './TimerForm'


class Container extends Component {
  state = {
    isFormOpen: false
  }
  handleEditFormOpen = () =>{
    this.setState({isFormOpen: true});
  }
  handleEditFormClose = () =>{
    this.setState({isFormOpen: false});
  }
  onFormSubmit = ({id, title, project}) => {
    this.handleEditFormClose()
    this.props.onFormSubmit({id, title, project});
}
  render(){
    return(
      <div >
        {this.state.isFormOpen ? (
            <TimerForm 
            title = {this.props.title}
            project = {this.props.project}
            id = {this.props.id}
            onFormSubmit = {this.onFormSubmit}
            onCloseForm = {this.handleEditFormClose}
            />
        ) : (
            <Timer 
                title = {this.props.title}
                project = {this.props.project}
                id = {this.props.id}
                onEditFormOpen = {this.handleEditFormOpen}
                onDelete = {this.props.onDelete}
            />
        )}
      </div>
    )
  }
}

export default Container;