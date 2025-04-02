import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormData } from "../utils/validaton";
import Input from "./Input";
import Button from "./Button";
import "./../styles/Login.css";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Login successful!");
        console.log(`Login successful for user: ${data.email}`);
      } else {
        alert("❌ Login failed: " + result.message);
      }
    } catch (error) {
      alert("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="welcome">Welcome back!</h2>
      <br /><br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" {...register("email")} placeholder="UID" error={errors.email?.message} />
        <br />
        <Input type="password" {...register("password")} placeholder="Password" error={errors.password?.message} />
        <br /><br />
        <Button type="submit">Login</Button>
      </form>
    </div>
  );
};

export default Login;
