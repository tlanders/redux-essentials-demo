import React from "react";
import {useSelector} from "react-redux";
import {selectAllUsers} from "./usersSlice";
import {Link} from "react-router-dom";

export const UsersList = () => {
    const users = useSelector(selectAllUsers);

    const userList = users.map(user => (
        <li key={user.id}><Link to={`/feed-app/users/${user.id}`}>{user.name}</Link></li>
    ));
    return (
        <section>
            <h2>Users</h2>
            <ul>{userList}</ul>
        </section>
    );
}