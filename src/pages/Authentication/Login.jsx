import "./Authentication.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useAuth, useLikes } from "../../hooks";
import { loginService } from "../../services";
import { getLikesHandler } from "../../utils"

const Login = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const { likesDispatch } = useLikes();
  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  const guestUser = {
    email: "test@gmail.com",
    password: "test123"
  }

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value })
  }

  const guestUserHandler = (event) => {
    event.preventDefault();
    setUser(guestUser);
  }

  const loginHandler = async (event) => {
    event.preventDefault();

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await loginService(user);
        switch (response.status) {
          case 200:
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem("user", JSON.stringify(response.data.foundUser));
            authDispatch({ type: "LOGIN", payload: { user: response.data.foundUser, token: response.data.encodedToken } });
            getLikesHandler(response.data.encodedToken, likesDispatch);
            navigate("/explore");
            break;
          case 404:
            throw new Error("Email not found");
          case 401:
            throw new Error("Wrong Password");
          case 500:
            throw new Error("Server Error");
        }
      }
      catch (error) {
        alert(error);
      }
    }
    else {
      alert("Both of the fields need to be entered");
    }
  }

  return (
    <section className="form-section">
      <div className="form-wrapper">
        <h2 className="form-heading">Login</h2>
        <form action="" method="post">
          <div className="form-email">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="tanay@neog.camp"
              name="email"
              value={user.email}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="form-password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              name="password"
              value={user.password}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="user-history">
            <input type="checkbox" id="user-save" />
            <label htmlFor="user-save">Remember me</label>
            <Link to="./Put route to forgot password">Forgot your Password?</Link>
          </div>
          <button className="btn btn-text-primary text-underline btn-guest" onClick={guestUserHandler}>Add Guest credentials</button>
          <button type="submit" className="btn-submit" onClick={loginHandler}>
            Submit
          </button>
        </form>
        <Link to="/signup" className="new-account">
          Create New Account <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </section>
  );
};

export { Login };
