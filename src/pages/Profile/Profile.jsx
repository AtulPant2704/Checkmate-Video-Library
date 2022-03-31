import "./Profile.css";
import { useNavigate } from "react-router";
import { useAuth, useLikes, usePlaylists, useHistory } from "../../context";

const Profile = () => {
    const navigate = useNavigate();
    const { authDispatch } = useAuth();
    const { likesDispatch } = useLikes();
    const { playlistsDispatch } = usePlaylists();
    const { historyDispatch } = useHistory();

    const logoutHandler = () => {
        navigate("/login");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({ type: "LOGOUT" });
        likesDispatch({ type: "CLEAR_LIKES" });
        playlistsDispatch({ type: "CLEAR_PLAYLISTS" });
        historyDispatch({ type: "CLEAR_HISTORY" });

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
