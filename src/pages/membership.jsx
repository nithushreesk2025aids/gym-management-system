import { useState } from "react";

function Membership() {
  const [memberName, setMemberName] = useState("");
  const [plan, setPlan] = useState("Monthly");
  const [memberships, setMemberships] = useState([]);

  const addMembership = (e) => {
    e.preventDefault();

    setMemberships([
      ...memberships,
      {
        id: Date.now(),
        memberName: memberName,
        plan: plan
      }
    ]);

    setMemberName("");
    setPlan("Monthly");
  };

  return (
    <div className="page-container">
      <h1>Membership Management</h1>

      <form onSubmit={addMembership}>
        <input
          placeholder="Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          required
        />

        <select
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
        >
          <option>Monthly</option>
          <option>Quarterly</option>
          <option>Half-Yearly</option>
          <option>Yearly</option>
        </select>

        <button type="submit">Add Membership</button>
      </form>

      <h2>Membership List</h2>

      {memberships.map((item) => (
        <div className="list-card" key={item.id}>
          <p>{item.memberName}</p>
          <p>{item.plan}</p>
        </div>
      ))}
    </div>
  );
}

export default Membership;