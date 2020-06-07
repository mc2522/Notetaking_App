import React from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
import './App.css'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			// array of objects with properties of title and text that represents notes
			notes: [],
			count: 0
		}
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	// this method handles submits from the createNote form
	handleSubmit(event, childTitle, childText) {
		event.preventDefault()
		const tempNotes = this.state.notes
		tempNotes.push({
			id: this.state.count,
			title: childTitle,
			text: childText
		})
		this.setState(prevState => {
			return {
				notes: tempNotes,
				count: prevState.count + 1
			}
		})
		console.log(this.state.notes)
	}

	render() {
		// maps the notes in state to another array with every element as a component
		const noteComponents = this.state.notes.map((note) => {
			return <Note key={note.id} title={note.title} text={note.text} />
		})

		return (
			<div className="App">
				{/* array of note components */}
				{noteComponents}
				<CreateNote handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

export default App
