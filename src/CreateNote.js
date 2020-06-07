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
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.props.handleSubmit(event, this.state.title, this.state.text)}>
                <h2 className="createHeader">Create a New Note Here:</h2>
                <input type="text" value={this.state.title} name="title" placeholder="Title" className="createTitle" onChange={this.handleChange} />
                <textarea type="text" value={this.state.text} name="text" placeholder="Note" className="createText" onChange={this.handleChange} />
                <button className="createButton">Generate Note</button>
            </form>
        )
    }
}

export default CreateNote