import React from 'react';
import '../style/modalstyle.css';

export function MessageDetailView(props) {
	return (
		<div className="modalMask">
			<div className="modalWrapper">
				<div className="modalContainer">
						<div className="modalBody">
							<button onClick={() => props.closeView()}>Close</button>
							{!props.isDetailView &&
								<form onSubmit={(e, id) => props.saveObject(e, props.boardId)}>
									<label>
										title:
										<input
											type="text" 
											name={props.messageModel.title}
											value={props.messageToSend.title}
											onChange={(e) => props.handleInputChange(e)} />
									</label>
									<label>
										subject:
										<textarea 
											name={props.messageModel.subject}
											value={props.messageToSend.body}
											onChange={(e) => props.handleInputChange(e)} />
									</label>
									<div className="modalActions">
										<input type="submit" value="Submit" />
									</div>
								</form>
							}
							{props.isDetailView && 
								<div className="ModalItems">
									<h2>Title: {props.messageToSend.title}</h2>
									<h3>subject: {props.messageToSend.subject}</h3>
								</div>
							}
						</div>
				</div>
			</div>
		</div>
	);
}