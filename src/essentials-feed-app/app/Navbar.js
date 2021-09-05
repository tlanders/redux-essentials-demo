import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchNotifications, selectAllNotifications} from "../features/notifications/notificationsSlice";

export const Navbar = () => {
    const dispatch = useDispatch();
    const notifications = useSelector(selectAllNotifications);

    const unreadCount = notifications.filter(notification => !notification.read).length;

    const fetchNewNotifications = () => {
        dispatch(fetchNotifications());
    };

    return (
        <nav>
            <section>
                <h1>Redux Essentials Example</h1>

                <div className="navContent">
                    <div className="navLinks">
                        <Link to="/feed-app">Posts</Link>
                        <Link to="/feed-app/users">Users</Link>
                        <Link to="/feed-app/notifications">Notifications ({unreadCount})</Link>
                    </div>
                    <button className={"button"} onClick={fetchNewNotifications}>Refresh Notifications</button>
                </div>
            </section>
        </nav>
    );
}