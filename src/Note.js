import React, {Component} from 'react'
import './Note.css'

class Note extends Component {
    constructor() {
        super()
        this.state = {
            date: "",
            title: "",
            text: ""
        }
    }

    componentDidMount() {
        this.setState({
            // at the moment of mounting component, assign the date a new Date which will represent the time of edit
            date: new Date().toLocaleString(),
            // title of note
            title: this.props.title,
            // contents of note
            text: this.props.text
        })
    }

    render() {
        return (
            <div className="card">
                <h5 className="date">{this.state.date}</h5>
                <h2 className="title">{this.state.title}</h2>
                <p className="text">{this.state.text}</p>
            </div>   
        )
    }
}

export default Note