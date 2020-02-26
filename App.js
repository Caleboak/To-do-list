import React, {Component} from 'react';
import './App.css'
import note from './component/note.js'


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      noteText: '',
    }
  } 
  

  addNote(){
    if(this.state.noteText==='') {return}

    let notesArr= this.state.noteText
    notesArr.push(this.state.noteText);
    this.setState({
      noteText:'',
      note: [],
    });

  }

  updateNoteText(noteText){
    this.setState({noteText: noteText.target.value})
  }
  render(){
    
       
    
    
    
    return(
      <div className="container">
        <div className="header">
          To do List
        </div>
        {note}
        <div className="btn" onClick={this.addNote.bind(this)}>
          +
        </div>

        <input text="type"
        ref={((input)=>{this.textInput=input})}
        value={this.state.noteText}
        onChange={noteText=>this.updateNoteText(noteText)}
        
        />
      </div>
    )
  }
}

export default App