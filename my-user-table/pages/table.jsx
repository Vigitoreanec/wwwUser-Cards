import { UserTable } from "../components/UsersTable";

export default function UserPages() {
    return (
        <div className="header-table">
            <h2>Table Users <span>jsonplaceholder.typicode.com/users/</span></h2>
            <UserTable />
        </div>
    );
}