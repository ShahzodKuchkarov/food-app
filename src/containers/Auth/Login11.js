import React, { useState, useCallback } from 'react';
import imageAnimated from '../../assets/auth/chef-animated.svg';
import { StyledLogin } from '../../style/auth';
import { useHistory, Link } from 'react-router-dom';
import Axios from "../../utils/axios";
import Loader from '../../components/Loader'

export default function Login({ login }) {

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(state => ({ ...state, [name]: value }));
  }, []);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    Axios.post('/auth/login', values)
      .then(({ data }) => {
        if (data.success) {
          localStorage.setItem('token', JSON.stringify(data.token));
          localStorage.setItem('userData', JSON.stringify(data.user));
          login()
          setLoading(false)
          console.log(data.user)
        }
        else {
          setError(data.error)
          setLoading(false)
        }
      })
      .catch(err => {
        console.log(err);
        setError(err.response?.data?.msg)
        setLoading(false)
      })

  }
  console.log(error);

  return (
    <StyledLogin className="login">
      <Loader loading={loading} />
      <img src={imageAnimated} alt="POS" className="slider-image" />

      <form onSubmit={handelSubmit} className="login__form">
        <h2>Log In</h2>
        <div className="login__sub-title">Please, sign in to continue</div>
        {
          error ? <div className="error">{error}</div> : null
        }
        <div className="login__form-wrapper">
          <input onChange={handleInputChange} type="text" name="email" placeholder="Login" />
        </div>
        <div className="login__form-wrapper">
          <input onChange={handleInputChange} type="password" name="password" placeholder="Password" />
        </div>
        <button type="submit" className="main-btn">Sign In</button>
        <div className="login__sign-up">
          Don't have an account?
          <Link to="/sign-up">Sign up</Link>
        </div>


      </form>

      <div className="login__copy-right">
        &copy; 2020 - Alicode academy
      </div>
    </StyledLogin >
  )
}
