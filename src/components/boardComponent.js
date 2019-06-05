import React from 'react';
import '../style/boardstyle.css';

function Message(props) {
	return <h3 className="messageBox">Hola, {props.message}</h3>;
}


export function Board(props) {
	const messages = props.board.messages;
	const listMessages = messages.map((message) => 
		<Message 
			key={message.id}
			message= {message.message_title}
		/>
	);
	const showButton = !props.board.isPrivate || (props.board.ownerId === props.userId);
	return (
		<div className="boardBox">
			<div className="boardTitle"> {props.board.title}</div>
			<div className="boardMessages">
				{listMessages}
			</div>
			<div className="boardActions">
				<div className="buttonContainer">
					{showButton &&
						<button
							onClick={() => props.onClick(props.board.id)} 
							className="saveMessageButton">+
						</button>
					}
				</div>
			</div>
		</div>
	);
}