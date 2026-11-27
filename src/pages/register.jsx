import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "../components/registerschema";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registerSchema)
  });

  function onSubmit(data) {
    console.log(data);

    alert("Registration Successful");

    navigate("/login", {
      state: data
    });
  }

  return (
    <div className="login-container">
      <form
        className="login-form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Gym Owner Registration</h2>

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email")}
        />
        <p className="error">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password")}
        />
        <p className="error">{errors.password?.message}</p>

        <button type="submit">Register</button>
        <p>
            Already have an account?{" "}
  <         button type="button" onClick={() => navigate("/login")}>
            Login
           </button>
       </p>
      </form>
    </div>
  );
}

export default Register;