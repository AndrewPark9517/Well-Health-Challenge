import React from 'react';
import '../styles/messageBar.css';

export default function MessageBar(props) {
    const messages = [
        ["Some User", "Some Message"],
        ["Some User", "Some Message"],
        ["Some User", "Some Message"],
        ["Some User", "Some Message"],
        ["Some User", "Some Message"],
        ["Some User", "Some Message"]
    ];
    const messageList = messages.map((message, index) => {
        return <li key={index} className="messageList-item">
            <span className="username">{message[0]}</span>
            <p className="latestMessage">{message[1]}</p>
        </li>
    });

    return(
        <aside className="MessageBar">
            <ul className="messageList">
                {messageList}
            </ul>
        </aside>
    );
}