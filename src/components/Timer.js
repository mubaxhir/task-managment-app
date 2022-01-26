import React, {Component} from 'react';

class Timer extends Component {
    constructor() {
        super(); // exception thrown here when not called
        
        var today = new Date();

    this.state = {

      currentDateTime: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()

    }

  }
    render(){
        return(
            <div className="timer--box">
                <div className="timer--content">
                    <div className="timer--header">
                        <h2>{this.props.title} </h2>
                    </div>
                    <div className="timer--meta">
                        <p>{this.props.project} </p>
                    </div>
                    <div className="timer--h2">
                        <h2>{ this.state.currentDateTime }</h2>
                    </div>
                    <div className="actions">
                        <span onClick={() => {this.props.onDelete(this.props.id)}} className="trash">Delete</span>
                        <span onClick={this.props.onEditFormOpen} className="edit">Modify</span>
                    </div>

                </div>
            </div>
        )
    }
}

export default Timer;