import ListUsersComponent from "./ListUsersComponent";

export default function AdminDashboard(){
    return (
        <div>
            <h2 className="mt-4 mb-4">Hello admin !</h2>
            <ListUsersComponent/>
        </div>
    )
}