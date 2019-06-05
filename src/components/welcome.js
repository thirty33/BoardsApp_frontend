
import React from 'react';
import {Board} from './boardComponent.js';
import '../style/mainstyle.css';

export class BoardsWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boards: [
				{id: 1,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one'}], isPrivate: false, ownerId: 2},
				{id: 2,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one'}], isPrivate: true, ownerId: 1},
				{id: 3,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one'}], isPrivate: true, ownerId: 2},
			],
			userId: 1	
		}
	}
	boardsList() {
		const list = this.state.boards.map((board) =>
			<Board 
				key={board.id}
				board={board}
				userId={this.state.userId}
				onClick={(i) => this.addNewMessageToBoard(i)} />
		);
		return (
			<div className="boardsWrapper">
				{list}
				<button 
					className="addBoardButton"
					onClick={() => this.addBoard()}
					>Add Board
				</button>
			</div>
		);
	}
	render() {
		return this.boardsList();
	}
	addNewMessageToBoard(i) {
		// console.log('Is handle function',i);
		const boards = this.state.boards.slice();
		const currentBoard = boards[i-1]; 
		const newMessageId = currentBoard.messages.length + 1;
		var newMessage = {id:newMessageId, message_title: 'newMessageTitle'};
		currentBoard.messages.push(newMessage);
		// console.log('show concat messages', currentBoard);
		this.setState({
			boards : boards
		});
	}
	addBoard() {
		const boards = this.state.boards.slice();
		const newBoardId = boards.length + 1;
		const newBoard = {id: newBoardId,title:'board_title_new', messages: []};
		boards.push(newBoard);
		this.setState({
			boards: boards
		});
	}
}