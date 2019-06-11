import React from 'react';
import '../styles/notificationsList.css';

export default function NotificationsBar(props) {
    const notices = [
        "Some notifications",
        "Some notifications",
        "Some notifications",
        "Some notifications",
        "Some notifications",
        "Some notifications"
    ];

    const notificationsList = notices.map((notice,index) => {
        return <li key={index}>
            {notice}
        </li>
    })
    return (
        <div className="NotificationsBar">
            <ul className="notificationsList">
                {notificationsList}
            </ul>
        </div>
    )
}