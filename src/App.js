import React from 'react'
import Note from './Note'
import CreateNote from './CreateNote'
import './App.css'

function App() {
  	return (
    	<div className="App">
			<Note title="Sample" text="sample" />
			<Note title="Sample2" text="sample2" />
			<CreateNote />
    	</div>
  	)
}

export default App
