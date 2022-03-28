import "./Profile.css";
import { useNavigate } from "react-router";
import { useAuth, useLikes } from "../../hooks";

const Profile = () => {
    const navigate = useNavigate();
    const { authDispatch } = useAuth();
    const { likesDispatch } = useLikes();

    const logoutHandler = () => {
        navigate("/login");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type: "LOGOUT" });
        likesDispatch({ type: "EMPTY_LIKES" });
    }

    return (
        <main>
            <div className="logout-page">
                <button className="btn btn-solid-primary btn-logout" onClick={logoutHandler}>Logout</button>
            </div>
        </main>
    )
}

export { Profile };
