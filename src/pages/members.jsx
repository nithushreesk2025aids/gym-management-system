import { useState } from "react";

function Members() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState([]);

  const addMember = (e) => {
    e.preventDefault();

    const newMember = {
      id: Date.now(),
      name: name,
      phone: phone,
      email: email
    };

    setMembers([...members, newMember]);

    setName("");
    setPhone("");
    setEmail("");
  };

  const deleteMember = (id) => {
    setMembers(members.filter((member) => member.id !== id));
  };

  return (
    <div className="page-container">
      <h1>Member Management</h1>

      <form onSubmit={addMember}>
        <input
          placeholder="Member Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Add Member</button>
      </form>

      <h2>Member List</h2>

      {members.map((member) => (
        <div className="list-card" key={member.id}>
          <p>{member.name}</p>
          <p>{member.phone}</p>
          <p>{member.email}</p>

          <button onClick={() => deleteMember(member.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Members;