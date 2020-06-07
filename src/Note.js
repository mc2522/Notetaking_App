import React, {Component} from 'react'
import './Note.css'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.key,
            date: "",
            title: this.props.title,
            text: this.props.text
        }
    }

    /**  
     * whenever the component first mounts, state's date will be assigned a new Date just once, 
     * which will represent the time the note was generated
     */
    componentDidMount() {
        this.setState({
            // at the moment of mounting component, assign the date a new Date which will represent the time of edit
            date: new Date().toLocaleString()
        })
    }

    render() {
        return (
            // note card displays all necessary information with date, title, and text of note 
            <div className="card">
                <h5 className="date">{this.state.date}</h5>
                <h2 className="title">{this.state.title}</h2>
                <p className="text">{this.state.text}</p>
            </div>   
        )
    }
}

export default Note