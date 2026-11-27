import { useNavigate } from "react-router-dom";
import "../App.css";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <h2>Gym Management System</h2>

      <h3>Welcome, Gym Owner!</h3>

      <h3>Dashboard Overview</h3>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Total Members</h3>
          <p>120</p>
        </div>

        <div className="card">
          <h3>Today's Attendance</h3>
          <p>85</p>
        </div>

        <div className="card">
          <h3>Active Memberships</h3>
          <p>95</p>
        </div>

        <div className="card">
          <h3>Total Payments</h3>
          <p>₹45,000</p>
        </div>

      </div>

      <h3>Quick Actions</h3>

      <div className="quick-actions">

        <button onClick={() => navigate("/memberform")}>
          Add New Member
        </button>

        <button onClick={() => navigate("/attendance")}>
          Mark Attendance
        </button>

        <button onClick={() => navigate("/payments")}>
          Record Payment
        </button>

      </div>

      <h3>Recent Activities</h3>

      <div className="activities">
        <p>New Member Added</p>
        <p>Payment Received</p>
        <p>Attendance Marked</p>
      </div>

      <h3>Navigation Menu</h3>

      <div className="navigation-menu">

        <p onClick={() => navigate("/members")}>
          Members
        </p>

        <p onClick={() => navigate("/membership")}>
          Membership
        </p>

        <p onClick={() => navigate("/attendance")}>
          Attendance
        </p>

        <p onClick={() => navigate("/payments")}>
          Payments
        </p>

        <p onClick={() => navigate("/trainers")}>
          Trainers
        </p>

        <p onClick={() => navigate("/notifications")}>
          Notifications
        </p>
        <p onClick={() => navigate("/settings")}>
          Settings
        </p>  

      </div>

    </div>
  );
}

export default Dashboard;