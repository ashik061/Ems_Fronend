import AuthUser from "../services/AuthService";
import AdminDashboard from "./structures/AdminDashboard";
import StudentDashboard from "./structures/StudentDashboard";

export default function Dashboard() {
    const { user } = AuthUser();
    const userRole = user.authorities[0].authority;
    return (
        <div>
            <h2 className="mt-4 mb-4">Dashboard Page.</h2>
            {userRole === 'ADMIN' && (
                <AdminDashboard />
            )}
            {userRole === 'STUDENT' && (
                <StudentDashboard />
            )}
        </div>
    )

}
