import React, {Component} from 'react'
import './CreateNote.css'

class CreateNote extends Component {
    constructor() {
        super()
        this.state = {
            // title of note
            title: "",
            // text of note
            text: "",
            // count for comparing old and new state
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    /**
     * Event handler that updates input fields and state whenever user types in them   
     * @param event     return value of onChange in form
     */
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    /**
     * This lifecycle method will reset the state and the input fields once it detects that a note has been created
     * by comparing new and old count
     */
    componentDidUpdate(prevProps, prevState) {
        // if the old and new count is different, that means a new note has been generated and we need to reset the state to default
        // and match the count for future comparisons
        if (prevState.count !== this.props.count) {
            this.setState({
                title: "",
                text: "",
                count: this.props.count
            })
        }
    }

    render() {
        return (
            // whenever button is pressed (form is submitted), will call handleSubmit from App.js
            <form onSubmit={(event) => this.props.handleSubmit(event, this.state.title, this.state.text)}>
                <h2 className="createHeader">Create a New Note Here:</h2>
                {/* input and textarea are for title and text of the user's choice */}
                <input type="text" value={this.state.title} name="title" placeholder="Title" className="createTitle" onChange={this.handleChange} autoComplete="off" required />
                <textarea type="text" value={this.state.text} name="text" placeholder="Note" className="createText" onChange={this.handleChange} />
                <button className="createButton">Generate Note</button>
            </form>
        )
    }
}

export default CreateNote