import "./Authentication.css";
import { Link } from "react-router-dom";

const SignUp = () => {

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
              value=""
              required
            />
            <label htmlFor="last-name">Last Name</label>
            <input
              id="last-name"
              type="text"
              placeholder="Enter your name"
              name="lastName"
              value=""
              required
            />
          </div>
          <div className="form-email">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="tanay@neog.camp"
              name="email"
              value=""
              required
            />
          </div>
          <div className="form-password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              name="password"
              value=""
              required
            />
          </div>
          <div className="form-confirm-password">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="********"
              name="confirmPassword"
              value=""
              required
            />
          </div>
          <div className="user-history">
            <input type="checkbox" id="user-request" />
            <label htmlFor="user-request">I accept all Terms & Conditions</label>
          </div>
          <button type="submit" className="btn-submit">
            Create New Account
          </button>
        </form>
        <Link to="/login" className="new-account">
          Already have an Account <i className="fas fa-chevron-right"></i>
        </Link>
      </div>
    </section >
  );
};

export { SignUp };
