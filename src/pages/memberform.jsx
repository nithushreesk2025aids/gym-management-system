import { useState } from "react";
import memberschema from "../components/memberschema";

function Memberform() {
  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    membership: ""
  });

  const handleChange = (e) => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = memberschema.safeParse(member);

    if (!result.success) {
      alert(result.error.issues[0].message);
      return;
    }

    alert("Member Registered Successfully!");
    console.log(member);

    setMember({
      name: "",
      email: "",
      phone: "",
      membership: ""
    });
  };

  return (
    <div>
      <h2>Member Registration</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={member.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={member.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          value={member.phone}
          onChange={handleChange}
          required
        />

        <select
          name="membership"
          value={member.membership}
          onChange={handleChange}
          required
        >
          <option value="">Select Membership</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </select>

        <button type="submit">
          Register Member
        </button>
      </form>
    </div>
  );
}

export default Memberform;