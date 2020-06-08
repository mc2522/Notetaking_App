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
			// counter for generating keys to be used for mapping and id'ing
			count: 0
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleDelete = this.handleDelete.bind(this)
	}

	/**
	 * This method handles submits from the createNote form
	 * @param event			return value from onSubmit in form
	 * @param childTitle	title from the createNote component's state
	 * @param childText		text from the createNote component's state
	 */ 
	handleSubmit(event, childTitle, childText) {
		event.preventDefault()
		const tempNotes = this.state.notes
		// add to array whenever new note is generated or added
		tempNotes.push({
			// id of note (key)
			id: this.state.count,
			// title from createForm state
			title: childTitle,
			// text from createForm state
			text: childText
		})
		// set new array to state and update count
		this.setState(prevState => {
			return {
				notes: tempNotes,
				count: prevState.count + 1
			}
		})
	}

	/**
	 * This method handles deleting notes by onClick in Note 
	 * @event		return value from onClick
	 * @param id	id of note to delete from notes in the state
	 */
	handleDelete(event, id) {
		event.preventDefault()
		let tempNotes = this.state.notes
		// loops through the state's notes array and finds the note with the provided id and deletes it
		for (let index = 0; index < tempNotes.length; index++) {
			if (tempNotes[index].id === id) 
				tempNotes.splice(index, 1)
		}
		this.setState({notes: tempNotes})
	}

	render() {
		// maps the notes in state to another array with every element as a component
		const noteComponents = this.state.notes.map((note) => {
			return <Note key={note.id.toString()} id={note.id} title={note.title} text={note.text} handleDelete={this.handleDelete} />
		})

		return (
			<div className="App">
				{/* array of note components */}
				{noteComponents}
				{/* component for rendering a form and allowing user to generate new note */}
				<CreateNote handleSubmit={this.handleSubmit} count={this.state.count} />
			</div>
		)
	}
}

export default App