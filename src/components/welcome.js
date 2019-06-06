import React from 'react';
import {Board} from './boardComponent.js';
import '../style/mainstyle.css';

export class BoardsWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boards: [
				{id: 1,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one', creatorId:1}], isPrivate: false, ownerId: 2},
				{id: 2,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one', creatorId:1}], isPrivate: true, ownerId: 1},
				{id: 3,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one', creatorId:2}], isPrivate: true, ownerId: 2},
			],
			currentBoardId: 1,
			userId: 1,
			modalIsVisible: false,
			messageModel: {title: 'title', subject: 'subject'},
			title: '',
			subject: '',
			messageToSend: {}
		}
	}
	boardsList() {
		const list = this.state.boards.map((board) =>
			<Board 
				key={board.id}
				board={board}
				userId={this.state.userId}
				modalIsVisible={this.state.modalIsVisible}
				onClick={(i) => this.openModal(i)}
				deleteMessage={(i) => this.deleteMessage(i)}
				viewMessageDetail={(i) => this.viewMessageDetail(i)}
				closeModal={() => this.closeModal()}
				saveObject={(e, id) => this.saveObject(e, id)}
				handleModalChanges={(e) => this.handleModalChanges(e)}
				messageModel={this.state.messageModel} 
				messageToSend={this.state.messageToSend}
				currentBoardId={this.state.currentBoardId}/>
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
	closeModal() { this.setState({modalIsVisible : !this.state.modalIsVisible})}
	openModal(i) { 
		const boards = this.state.boards.slice();
		const currentBoard = boards[i-1]; 
		this.setState({
			currentBoardId : currentBoard.id,
			modalIsVisible : true
		})
	}
	addNewMessageToBoard(i) {
		
		const boards = this.state.boards.slice();
		const currentBoard = boards[i-1]; 
		const newMessageId = currentBoard.messages[currentBoard.messages.length - 1].id + 1;
		var newMessage = {id:newMessageId, message_title: this.state.title ,creatorId:1};
		currentBoard.messages.push(newMessage);

		this.setState({
			modalIsVisible : !this.state.modalIsVisible
		});
	}
	handleModalChanges(e) {
		const value = e.target.value;
		const name = e.target.name;
		this.setState({
			[name] : value
		});
	} 
	saveObject(e, id) {
		console.log('this is board id', id);
		this.addNewMessageToBoard(id);
		e.preventDefault();
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
	deleteMessage(i) {
		console.log('Deleting message', i.message_id, i.board_id);
		const boards = this.state.boards.slice();
		const currentBoard = boards[i.board_id - 1];
		
		for(var y = 0; y < currentBoard.messages.length; y++) { 
			if (currentBoard.messages[y].id === i.message_id) {
				currentBoard.messages.splice(y, 1); 
				y--;
			}
		}
		this.setState({
			boards : boards,
		});
	}
	viewMessageDetail(i) {
		console.log('view Message detail', i.message_id, i.board_id);
	}
}