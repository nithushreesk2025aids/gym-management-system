import { useState } from "react";

function Notifications() {
  const [notifications] = useState([
    {
      id: 1,
      title: "Payment Reminder",
      message: "Some members have pending payments."
    },
    {
      id: 2,
      title: "Membership Expiry",
      message: "Some memberships are going to expire."
    },
    {
      id: 3,
      title: "Attendance Alert",
      message: "Some members have been absent for more than two days."
    }
  ]);

  return (
    <div className="page-container">
      <h1>Notifications & Alerts</h1>

      {notifications.map((item) => (
        <div className="list-card" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  );
}

export default Notifications;