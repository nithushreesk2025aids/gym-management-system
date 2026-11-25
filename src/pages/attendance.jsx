import { useState } from "react";

function Attendance() {
  const [memberName, setMemberName] = useState("");
  const [attendance, setAttendance] = useState([]);

  const markAttendance = (e) => {
    e.preventDefault();

    const today = new Date().toLocaleDateString();

    const alreadyMarked = attendance.some(
      (item) => item.memberName === memberName && item.date === today
    );

    if (alreadyMarked) {
      alert("Attendance already marked today");
      return;
    }

    setAttendance([
      ...attendance,
      {
        id: Date.now(),
        memberName: memberName,
        date: today
      }
    ]);

    setMemberName("");
  };

  return (
    <div className="page-container">
      <h1>Attendance Management</h1>

      <form onSubmit={markAttendance}>
        <input
          placeholder="Enter Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          required
        />

        <button type="submit">Mark Attendance</button>
      </form>

      <h2>Attendance History</h2>

      {attendance.map((item) => (
        <div className="list-card" key={item.id}>
          <p>{item.memberName}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Attendance;