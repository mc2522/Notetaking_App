import React, {Component} from 'react'

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
            date: new Date(),
            title: this.props.title,
            text: this.props.text
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.text}</p>
            </div>
        )
    }
}

export default Note