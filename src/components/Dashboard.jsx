import AuthUser from "../services/AuthService"

export default function Dashboard() {
    const { user } = AuthUser();
    const userRole = user.authorities[0].authority;
    return (
        <div className="container">
            <h2 className="mt-4 mb-4">User Details</h2>
            <div className="row">
            <p><strong>ID:</strong> {user.userId}</p>
                <div className="col-md-6">
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                </div>
                <div className="col-md-6">
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Role:</strong> {userRole}</p>
                </div>
            </div>
        </div>
    )
}
