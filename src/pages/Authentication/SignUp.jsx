import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context";
import { signUpService } from "../../services";
import "./Authentication.css";

const SignUp = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const checkPasswordHandler = () => {
    if (user.password !== user.confirmPassword) {
      toast.error("Your confirm password does not matches the real password");
    } else {
      return true;
    }
  };

  const checkInputFields = () => {
    return (
      user.email !== "" &&
      user.password !== "" &&
      user.firstName !== "" &&
      user.lastName !== "" &&
      user.confirmPassword !== ""
    );
  };

  const signUpHandler = async (event) => {
    event.preventDefault();
    if (checkInputFields()) {
      if (checkPasswordHandler()) {
        try {
          const response = await signUpService(user);
          if (response.status === 201) {
            navigate("/explore");
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.createdUser)
            );
            authDispatch({
              type: "SIGN_UP",
              payload: {
                user: response.data.createdUser,
                token: response.data.encodedToken,
              },
            });
            toast.success("Successfuly Signed In");
          } else {
            throw new Error("Something went wrong! Please try again later");
          }
        } catch (error) {
          toast.error(error.response.data.errors[0]);
        }
      }
    } else {
      toast.warning("All the fields need to be entered");
    }
  };

  return (
    <section className="form-section">
      <div className="form-wrapper">
        <h2 className="form-heading">Signup</h2>
        <form action="" method="post">
          <div className="form-username">
            <label htmlFor="first-name">First Name</label>
            <input
              id="first-name"
              type="text"
              placeholder="Enter your name"
              name="firstName"
              value={user.firstName}
              required
              onChange={changeHandler}
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              placeholder="Enter your name"
              name="lastName"
              value={user.lastName}
              required
              onChange={changeHandler}
            />
          </div>
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
          <div className="form-confirm-password">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="********"
              name="confirmPassword"
              value={user.confirmPassword}
              required
              onChange={changeHandler}
            />
          </div>
          <div className="user-history">
            <input type="checkbox" id="user-request" />
            <label htmlFor="user-request">
              I accept all Terms & Conditions
            </label>
          </div>
          <button type="submit" className="btn-submit" onClick={signUpHandler}>
            Create New Account
          </button>
        </form>
        <Link to="/login" className="new-account">
          Already have an Account <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </section>
  );
};

export { SignUp };
