import React from 'react';
import '../style/modalstyle.css';

export function LoginForm(props) {
	return (
		<div className="modalMask">
			<div className="modalWrapper">
				<div className="modalContainer">
                    <div className="modalBody">
                        <button onClick={() => props.closeView()}>Close</button>
                        <form onSubmit={(e) => props.saveObject(e)}>
                            <label>
                                username:
                                <input
                                    type="text" 
                                    name={props.loginModel.fieldOne}
                                    onChange={(e) => props.handleInputChange(e)} />
                            </label>
                            <label>
                                password:
                                <input
                                    type="text" 
                                    name={props.loginModel.fieldTwo}
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