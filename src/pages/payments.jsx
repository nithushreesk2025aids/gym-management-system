import { useState } from "react";

function Payments() {
  const [memberName, setMemberName] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Cash");
  const [payments, setPayments] = useState([]);

  const addPayment = (e) => {
    e.preventDefault();

    setPayments([
      ...payments,
      {
        id: Date.now(),
        memberName: memberName,
        amount: amount,
        method: method
      }
    ]);

    setMemberName("");
    setAmount("");
    setMethod("Cash");
  };

  return (
    <div className="page-container">
      <h1>Payment Management</h1>

      <form onSubmit={addPayment}>
        <input
          placeholder="Member Name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option>Cash</option>
          <option>UPI</option>
          <option>Card</option>
        </select>

        <button type="submit">Add Payment</button>
      </form>

      <h2>Payment History</h2>

      {payments.map((payment) => (
        <div className="list-card" key={payment.id}>
          <p>{payment.memberName}</p>
          <p>₹{payment.amount}</p>
          <p>{payment.method}</p>
        </div>
      ))}
    </div>
  );
}

export default Payments;