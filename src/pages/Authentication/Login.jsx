import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAuth,
  useLikes,
  useHistory,
  usePlaylists,
  useNotes,
} from "../../context";
import { loginService } from "../../services";
import {
  getLikesHandler,
  getPlaylistsHandler,
  getHistoryHandler,
  getNotesHandler,
} from "../../utils";
import "./Authentication.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    authState: { token },
    authDispatch,
  } = useAuth();
  const { likesDispatch } = useLikes();
  const { playlistsDispatch } = usePlaylists();
  const { historyDispatch } = useHistory();
  const { notesDispatch } = useNotes();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  const guestUser = {
    email: "guest@gmail.com",
    password: "Guest@1234",
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const guestUserHandler = (event) => {
    event.preventDefault();
    setUser(guestUser);
    setRememberMe(true);
  };

  const loginHandler = async (event) => {
    event.preventDefault();

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await loginService(user);
        if (response.status === 200) {
          if (rememberMe) {
            localStorage.setItem("token", response.data.encodedToken);
            localStorage.setItem(
              "user",
              JSON.stringify(response.data.foundUser)
            );
          }
          authDispatch({
            type: "LOGIN",
            payload: {
              user: response.data.foundUser,
              token: response.data.encodedToken,
            },
          });
          getNotesHandler(response.data.encodedToken, notesDispatch);
          getLikesHandler(response.data.encodedToken, likesDispatch);
          getPlaylistsHandler(response.data.encodedToken, playlistsDispatch);
          getHistoryHandler(response.data.encodedToken, historyDispatch);
          navigate(location?.state?.from?.pathname || -1, { replace: true });
          toast.success("Successfully Logged In");
        } else {
          throw new Error("Something went wrong! Please try again later");
        }
      } catch (error) {
        toast.error(error.response.data.errors[0]);
      }
    } else {
      toast.warning("Both the fields need to be entered");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <section className="form-section">
        <div className="form-wrapper">
          <h2 className="form-heading">Login</h2>
          <form className="login">
            <div className="form-email">
              <label htmlFor="email">
                Email address <span>*</span>
              </label>
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
            <div className="form-password input-wrapper">
              <label htmlFor="password">
                Password <span>*</span>
              </label>
              <input
                id="password"
                type={passwordType}
                placeholder="********"
                autoComplete="off"
                name="password"
                value={user.password}
                required
                onChange={changeHandler}
              />
              {passwordType === "password" ? (
                <i
                  className="fa-solid fa-eye password-icon"
                  onClick={() => setPasswordType("text")}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye-slash password-icon"
                  onClick={() => setPasswordType("password")}
                ></i>
              )}
            </div>
            <div className="user-history">
              <input
                type="checkbox"
                id="user-save"
                checked={rememberMe}
                onChange={(e) =>
                  e.target.checked ? setRememberMe(true) : setRememberMe(false)
                }
              />
              <label htmlFor="user-save">Remember me</label>
            </div>
            <button
              className="btn btn-text-primary text-underline btn-guest"
              onClick={guestUserHandler}
            >
              Add Guest credentials
            </button>
            <button type="submit" className="btn-submit" onClick={loginHandler}>
              Submit
            </button>
          </form>
          <Link to="/signup" className="new-account">
            Create New Account <i className="fas fa-chevron-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
};

export { Login };
