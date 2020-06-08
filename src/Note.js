import React, {Component} from 'react'
import './Note.css'

class Note extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.id,
            date: "",
            title: this.props.title,
            text: this.props.text,
            deleteImg: "./x-black.png"
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
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

    /**
     * event handler that changes the x button's color when the mouse enters the button (hovering over)
     */
    handleMouseEnter() {
        this.setState({deleteImg: "./x-red.jpg"})
    }

    handleMouseLeave() {
        this.setState({deleteImg: "./x-black.png"})
    }

    render() {
        return (
            // note card displays all necessary information with date, title, and text of note 
            <div className="card">
                <div className="top-bar">
                    <h5 className="date">{this.state.date}</h5>
                    <input 
                        type="image" 
                        src={this.state.deleteImg} 
                        className="delete" 
                        alt="delete"
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        onClick={(event) => this.props.handleDelete(event, this.state.id)}
                        height="17" 
                        width="17" 
                    />
                </div>
                <h2 className="title">{this.state.title}</h2>
                <p className="text">{this.state.text}</p>
            </div>   
        )
    }
}

export default Note