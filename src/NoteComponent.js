import React from 'react'
import './Note.css'

function NoteComponent(props) {
    return (
        <div className="card">
            <h5 className="date">{props.data.date}</h5>
            <h2 className="title">{props.data.title}</h2>
            <p className="text">{props.data.text}</p>
        </div>
    )
}

export default NoteComponent