import React from 'react';
import {Board} from './boardComponent.js';
import '../style/mainstyle.css';

export class BoardsWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boards: [
				{id: 1,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one', message_subject:'', creatorId:1}], isPrivate: false, ownerId: 2},
				{id: 2,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one', message_subject:'', creatorId:1}], isPrivate: true, ownerId: 1},
				{id: 3,title:'board_title_one', messages: [{id: 1,message_title: 'mTitle_one', message_subject:'', creatorId:2}], isPrivate: true, ownerId: 2},
			],
			currentBoardId: 1,
			userId: 1,
			modalIsVisible: false,
			isBoardForm: false,
			isDetailView: false,
			isLoginForm: false,
			messageModel: {title: 'title', subject: 'subject'},
			boardModel: {title: 'title'},
			loginModel: {fieldOne: 'username', fieldTwo: 'password'},
			title: '',
			subject: '',
			username: '',
			password: '',
			messageToSend: {},
			boardToSend: {}
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
				addBoard={(e) => this.addBoard(e)}
				signIn={(e) => this.signIn(e)}
				messageModel={this.state.messageModel} 
				boardModel={this.state.boardModel} 
				messageToSend={this.state.messageToSend}
				boardToSend={this.state.boardToSend}
				currentBoardId={this.state.currentBoardId}
				isDetailView={this.state.isDetailView}
				isBoardForm={this.state.isBoardForm}
				loginModel={this.state.loginModel}
				isLoginForm={this.state.isLoginForm}/>
		);
		return (
			<div className="mainContainer">
				<div className="siteHeader">
					<button 
						className="loginButton"
						onClick={() => this.openLoginForm()}>
						Loggin
					</button>
					<div className="titleApp">
						<h1>Boards App!</h1>
					</div>
				</div>
				<div className="boardsWrapper">
					{list}
					<button 
						className="addBoardButton"
						onClick={() => this.openBoardForm()}
						>Add Board
					</button>
				</div>
			</div>
		);
	}
	render() {
		return this.boardsList();
	}
	closeModal() {
		this.setState({
			modalIsVisible : !this.state.modalIsVisible,
			isBoardForm : false,
			isLoginForm: false
		})
	}
	openLoginForm() {
		this.setState({
			modalIsVisible : true,
			isLoginForm : true
		})
	}
	openModal(i) { 
		const boards = this.state.boards.slice();
		const currentBoard = boards[i-1]; 
		this.setState({
			isDetailView : false,
			messageToSend : {},
			currentBoardId : currentBoard.id,
			modalIsVisible : true,
			isBoardForm : false
		})
	}
	addNewMessageToBoard(i) {
		
		const boards = this.state.boards.slice();
		const currentBoard = boards[i-1]; 
		const newMessageId = currentBoard.messages.length > 0 ? 
			currentBoard.messages[currentBoard.messages.length - 1].id + 1 : 1;
		var newMessage = 
		{
			id:newMessageId,
			message_title: this.state.title,
			message_subject: this.state.subject,
			creatorId:1
		};
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
	addBoard(e) {
		e.preventDefault();
		const boards = this.state.boards.slice();
		const newBoardId = boards[boards.length - 1].id + 1;
		const newBoard = {id: newBoardId,title:this.state.title, messages: [], isPrivate: true, ownerId: 1};
		boards.push(newBoard);
		console.log('this is new board id', newBoard.id );
		this.setState({
			boards: boards,
			isBoardForm : false,
			modalIsVisible : false,
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
		const boards = this.state.boards.slice();
		const currentMessage = boards[i.board_id - 1].messages[i.message_id - 1];
		console.log('current message', currentMessage.message_title,currentMessage.message_subject); 
		this.setState({
			messageToSend : {title : currentMessage.message_title, subject : currentMessage.message_subject},
			isDetailView : true,
			modalIsVisible : true
		});
	}

	//Board Implementation
	openBoardForm() {
		this.setState({
			modalIsVisible : true,
			isBoardForm : true
		});
	}

	//User signIn Implementation
	signIn(e) {
		e.preventDefault();
		console.log('trying sign in with', this.state.username, this.state.password);
		this.setState({
			modalIsVisible : false,
			isLoginForm : false
		});
	}
}