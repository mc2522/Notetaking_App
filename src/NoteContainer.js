import React, {Component} from 'react'
import NoteComponent from './NoteComponent'

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
            date: new Date().toLocaleString(),
            title: this.props.title,
            text: this.props.text
        })
    }

    render() {
        return (
            <NoteComponent data={this.state} />
        )
    }
}

export default Note