import { useState } from "react";

function Trainers() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [trainers, setTrainers] = useState([]);

  const addTrainer = (e) => {
    e.preventDefault();

    setTrainers([
      ...trainers,
      {
        id: Date.now(),
        name: name,
        phone: phone,
        specialization: specialization
      }
    ]);

    setName("");
    setPhone("");
    setSpecialization("");
  };

  const deleteTrainer = (id) => {
    setTrainers(trainers.filter((trainer) => trainer.id !== id));
  };

  return (
    <div className="page-container">
      <h1>Trainer Management</h1>

      <form onSubmit={addTrainer}>
        <input
          placeholder="Trainer Name"
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
          placeholder="Specialization"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
          required
        />

        <button type="submit">Add Trainer</button>
      </form>

      <h2>Trainer List</h2>

      {trainers.map((trainer) => (
        <div className="list-card" key={trainer.id}>
          <p>{trainer.name}</p>
          <p>{trainer.phone}</p>
          <p>{trainer.specialization}</p>

          <button onClick={() => deleteTrainer(trainer.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Trainers;