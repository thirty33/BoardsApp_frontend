import React from 'react';
import '../style/boardstyle.css';

function Message(props) {
	return <div className="messageBox">
			<div className="messageBody">
				<h3>{props.message.message_title}</h3>
			</div>
			<div className="messageActions">
				<button onClick={() => props.deleteMessage(props.message.id)}>delete</button>
				<button onClick={() => props.viewMessageDetail(props.message.id)}>observe</button>
			</div>
		</div>;
}


export function Board(props) {
	const messages = props.board.messages;
	const listMessages = messages.map((message) => 
		<Message 
			key={message.id}
			message= {message}
			deleteMessage={(i) => props.deleteMessage({message_id: i, board_id: props.board.id})}
			viewMessageDetail={(i) => props.viewMessageDetail({message_id: i, board_id: props.board.id})}
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