import React from 'react';
import '../style/modalstyle.css';

export function CustomDetailView(props) {
	return (
		<div className="modalMask">
			<div className="modalWrapper">
				<div className="modalContainer">
					<button onClick={() => props.closeView()}>Close</button>
					<div className="modalBody">
						<h1>{props.boardId}</h1>
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
					</div>
				</div>
			</div>
		</div>
	);
}