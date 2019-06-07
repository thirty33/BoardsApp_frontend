import React from 'react';
import {CustomDetailView} from './CustomDetailView';
import '../style/boardstyle.css';

function Message(props) {
	return (
		<div className="messageBox">
			<div className="messageBody">
				<h3>{props.message.message_title}</h3>
			</div>
			{props.userId === props.message.creatorId &&
				<div className="messageActions">
						<button onClick={() => props.deleteMessage(props.message.id)}>delete</button>
						<button onClick={() => props.viewMessageDetail(props.message.id)}>observe</button>
				</div>
			}
		</div>
	);
}


export function Board(props) {
	const messages = props.board.messages;
	const listMessages = messages.map((message) => 
		<Message 
			deleteMessage={(i) => props.deleteMessage({message_id: i, board_id: props.board.id})}
			message= {message}
			key={message.id}	
			userId={props.userId}
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
			{props.modalIsVisible &&
				<CustomDetailView 
					modal={{propertyOne: 'Joel Gustavo'}}
					boardId={props.currentBoardId}
					closeView={() => props.closeModal()}
					saveObject={(e, id) => props.saveObject(e, id)}
					handleInputChange={(e) => props.handleModalChanges(e)}
					messageModel={props.messageModel}
					messageToSend={props.messageToSend}
					isDetailView={props.isDetailView}/>
			}
		</div>
	);
}