import React, { useState, useCallback } from "react";
import { Sign } from "../../style/SignUp";
import Axios from "../../utils/axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Image from "../../assets/auth/ice-cream.svg";
import Loader from "../../components/Loader";

export default function SignUp() {
  const history = useHistory();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((state) => ({ ...state, [name]: value }));
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    Axios.post("/auth/sign-up", values)
      .then(({ data }) => {
        if (data.success) {
          console.log("success", values);
          history.push("/login");
          setLoading(false);
        } else {
          setError(data.error);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(err.response?.data?.msg);
        setLoading(false);
      });
  };
  return (
    <Sign>
      <Loader loading={loading} />
      <img src={Image} alt="" />
      <form onSubmit={handelSubmit}>
        <h1>Sign Up</h1>
        {error ? <div className="error">{error}</div> : null}
        <input
          placeholder="First name"
          onChange={handleInputChange}
          type="text"
          name="firstName"
        />
        <input
          placeholder="Last name"
          onChange={handleInputChange}
          type="text"
          name="lastName"
        />
        <input
          placeholder="Email"
          onChange={handleInputChange}
          type="email"
          name="email"
        />
        <input
          placeholder="Phone number"
          onChange={handleInputChange}
          type="number"
          name="phone"
        />
        <input
          placeholder="Password"
          onChange={handleInputChange}
          required
          type="password"
          name="password"
          minlength="6"
        />
        {/* <input type="text" name="image" /> */}
        <button onChange={handleInputChange} type="submit">
          Sign Up
        </button>
        <div>
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </form>
    </Sign>
  );
}
