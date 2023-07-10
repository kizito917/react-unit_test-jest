import { useEffect, useState } from 'react';

export default function List() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
            setIsLoading(false);
            setUsers(data);
        })
        .catch((err) => {
            setIsLoading(false);
            setError(true);
        });
    });

    const viewUser = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    if (isLoading) {
        return (
            <h4 data-testid="list-component">Users data loading...</h4>
        )
    }

    return (
        <div data-testid="list-component">
            <h2>Users List</h2>
            {
                error ? <h4>Unable to fetch Users</h4> :
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Username</th>
                            <th>Phone Number</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{ user.name }</td>
                                        <td>{ user.email }</td>
                                        <td>{ user.username }</td>
                                        <td>{ user.phone }</td>
                                        <td>{ user.website }</td>
                                        <td>
                                            <button onClick={() => viewUser(user.id)}>View details</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    )
}