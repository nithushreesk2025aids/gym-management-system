
function Dashboard() {
  return (
    <div className="page-container">
      <h1>Gym Management System</h1>
      <h2>Owner Dashboard</h2>
      <p>Welcome, Gym Owner!</p>

      <div className="dashboard-cards">
  
          <h3>Member Management</h3>
          <p>Manage Gym Members</p>        
          <h3>Attendance</h3>
          <p>Manage Daily Attendance</p>       
          <h3>Membership</h3>
          <p>Manage Membership Plans</p>  
          <h3>Payments</h3>
          <p>Manage Member Payments</p>
          <h3>Trainers</h3>
          <p>Manage Gym Trainers</p>
          <h3>Notifications</h3>
          <p>View Gym Alerts</p>
        
      </div>

      <button onClick={() => window.location.href = "/"}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;