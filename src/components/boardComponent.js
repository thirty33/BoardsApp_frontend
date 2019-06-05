import React from 'react';
import '../style/boardstyle.css';

function Message(props) {
	return <h3 className="messageBox">Hola, {props.message}</h3>;
}


export function Board(props) {
	const messages = props.messages;
	const listMessages = messages.map((message) => 
		<Message 
			key={message.message_title}
			message= {message.message_title}
		/>
	);
	return (
		<div className="boardBox">
			<div className="boardTitle"> {props.title}</div>
			<div className="boardMessages">
				{listMessages}
			</div>
		</div>
	);
}