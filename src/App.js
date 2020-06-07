import React from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
import './App.css'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			// array of objects with properties of title and text that represents notes
			notes: []
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// this method handles submits from the createNote form
	handleSubmit() {
		this.setState( (prevState) => {
			return (
				prevState.notes.append()
			)
		})
	}

	render() {
		// maps the notes in state to another array with every element as a component
		const noteComponents = this.state.notes.map((note) => {
			return <Note title={note.title} text={note.text} />
		})
		noteComponents.push(<Note title="example note" text="sample text" />)

		return (
			<div className="App">
				{/* array of note components */}
				{noteComponents}
				<CreateNote onChange={this.handleSubmit} />
			</div>
		)
	}
}

export default App
