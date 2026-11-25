function Tasks() {
  return (
    <div className="dashboard-container">
      <h1>Gym Management</h1>
      <h2>Management Modules</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Member Management</h3>
          <p>Manage gym members</p>
        </div>

        <div className="card">
          <h3>Trainer Management</h3>
          <p>Manage gym trainers</p>
        </div>

        <div className="card">
          <h3>Attendance Management</h3>
          <p>Track daily attendance</p>
        </div>

        <div className="card">
          <h3>Membership Management</h3>
          <p>Manage membership plans</p>
        </div>

        <div className="card">
          <h3>Payment Management</h3>
          <p>Manage fees and payments</p>
        </div>

        <div className="card">
          <h3>Reports</h3>
          <p>View gym reports</p>
        </div>
      </div>
    </div>
  );
}

export default Tasks;