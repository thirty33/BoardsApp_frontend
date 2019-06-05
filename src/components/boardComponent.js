import React from 'react';
import '../style/boardstyle.css';

function Message(props) {
	return <h3 className="messageBox">Hola, {props.message}</h3>;
}


export function Board(props) {
	return (
		<div className="boardBox">
			<div className="boardTitle"> {props.title}</div>
			<div className="boardMessages">
				<Message message="this is a message" />
				<Message message="this is a message" />
				<Message message="this is a message" />
				<Message message="this is a message" />
				<Message message="this is a message" />
				<Message message="this is a message" />
			</div>
		</div>
	);
}