import React, { Component } from "react";
import { v1 as uuidv1 } from 'uuid';
import ListContainer from './ListContainer';
import ActionContainer from './ActionContainer';

class Box extends Component {
    state = {
        timers: [
            {
                title: "Learn React",
                project:"Web development",
                id:"0a4acb-b06d-4cb1-883d-549a1e3b66d7"
            },
            {
                title: "Learn Angular",
                project:"Web development",
                id:"0a4acb-b06d-4cb1-883d-549a1e3b66d4"
            }
        ]
    }
    handleCreateTimer =({title, project}) =>{
        const timer = {
            title,
            project,
           id: uuidv1()
        }
        this.setState({
            timers: [...this.state.timers, timer]
        })
    }
    handleEditTimer =(id, title, project) =>{
        this.setState ({
            timers: this.state.timers.map(timer =>{
                if(timer.id === id) {
                    return {
                        ...timer,
                        title,
                        project
                    }
                }
                return {...timer }
            })
        })
    }
    handleDelete = id => {
        this.setState({
            timers: this.state.timers.filter(timer => timer.id !==id)
        });
    }
  render(){
    return(
      <div className='boxed--view'>
        <div className='boxed--view__box'>
            <ListContainer 
                onFormSubmit={this.handleEditTimer} 
                onDelete={this.handleDelete}
                timers = {
                    this.state.timers
                }>
                
            </ListContainer>
            <ActionContainer onFormSubmit={this.handleCreateTimer}/>
        </div>       
        
      </div>
    )
  }
}

export default Box;