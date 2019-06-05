
import React from 'react';
import {Board} from './boardComponent.js';
import '../style/mainstyle.css';

export class BoardsWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			boards: [
				{title:'board_title', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'},{message_title: 'mTitle'},{message_title: 'mTitle'},{message_title: 'mTitle'}]},
				{title:'board_title', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'}]},
				{title:'board_three', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'}]},
				{title:'board_title', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'}]},
				{title:'board_title', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'}]},
				{title:'board_title', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'}]},
				{title:'board_title', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'}]},
				{title:'board_title', messages: [{message_title: 'mTitle'},{message_title: 'mTitle'}]},
			],
		}
	}
	boardsList() {
		const list = this.state.boards.map((board) =>
			<Board 
				key={board.title}
				title={board.title}
				messages={board.messages} />
		);
		return (
			<div className="boardsWrapper">
				{list}
			</div>
		);
	}
	render() {
		return this.boardsList();
	}
}