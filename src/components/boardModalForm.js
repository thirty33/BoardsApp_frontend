import React from 'react';
import '../style/modalstyle.css';

export function BoardForm(props) {
	return (
		<div className="modalMask">
			<div className="modalWrapper">
				<div className="modalContainer">
                    <div className="modalBody">
                        <button onClick={() => props.closeView()}>Close</button>
                        <form onSubmit={(e) => props.saveObject(e)}>
                            <label>
                                title:
                                <input
                                    type="text" 
                                    name={props.boardModel.title}
                                    value={props.boardToSend.title}
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