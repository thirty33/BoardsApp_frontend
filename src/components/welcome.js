
import React from 'react';
import {Board} from './boardComponent.js';
import '../style/mainstyle.css';

export class BoardsWrapper extends React.Component {
    render() {
        return <div className="boardsWrapper">
            <Board title="boardOne"/>
            <Board title="boardTwo"/>
            <Board title="boardThree"/>
            <Board title="boardFour"/>
            <Board title="boardFive"/>
            <Board title="boardSix"/>
        </div>
    }
}