import { useEffect, useState } from 'react';

export function UserTable() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                if (!response.ok) throw new Error(response.status);
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err);
            }
        }
        fetchUsers();
    }, []);

    if (error)
        return <div className='error'>
            ERRROORO {error.toString()}
        </div>;

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.address.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}