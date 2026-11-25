import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page-container">
      <h1>Gym Management System</h1>
      <h2>Owner Dashboard</h2>
      <p>Welcome, Gym Owner!</p>

      <div className="dashboard-cards">
        <Link to="/members" className="card">
          <h3>Member Management</h3>
          <p>Manage Gym Members</p>
        </Link>

        <Link to="/attendance" className="card">
          <h3>Attendance</h3>
          <p>Manage Daily Attendance</p>
        </Link>

        <Link to="/membership" className="card">
          <h3>Membership</h3>
          <p>Manage Membership Plans</p>
        </Link>

        <Link to="/payments" className="card">
          <h3>Payments</h3>
          <p>Manage Member Payments</p>
        </Link>

        <Link to="/trainers" className="card">
          <h3>Trainers</h3>
          <p>Manage Gym Trainers</p>
        </Link>

        <Link to="/notifications" className="card">
          <h3>Notifications</h3>
          <p>View Gym Alerts</p>
        </Link>
      </div>

      <button onClick={() => window.location.href = "/"}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;