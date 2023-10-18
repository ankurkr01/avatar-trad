import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/admin.css";
const AdminLogin = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const adminLogin = async (e) => {
    console.log(email,password);
    e.preventDefault();
    let result = await fetch("/api/admin/admin-login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.token) {
      localStorage.setItem("user", JSON.stringify(result.data));
      localStorage.setItem("token", JSON.stringify(result.token));
      navigate("/admin");
    } else {
    }
  };

  return (
    <div className="form admin_section">
      <form onSubmit={adminLogin}>
        <div className="input-container">
          <label>Email Address </label>
          <input
            type="email"
            name="email"
            className="form-control w-100"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control w-100"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="button-container">
          <input type="submit" className="" />
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
