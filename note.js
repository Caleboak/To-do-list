 import React, {Component} from 'react'

class note extends Component{
    render(){
        return(
            <div className="note" >
                {this.props.text}

            </div>
        )
    }
}

export default note;