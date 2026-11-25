function Project() {
  return (
    <div className="dashboard-container">
      <h1>Gym Management System</h1>
      <h2>Owner Dashboard</h2>

      <p>Welcome, Gym Owner!</p>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Members</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Total Trainers</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Active Memberships</h3>
          <p>0</p>
        </div>

        <div className="card">
          <h3>Pending Payments</h3>
          <p>0</p>
        </div>
      </div>
    </div>
  );
}

export default Project;