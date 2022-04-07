import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth, useLikes, usePlaylists, useHistory } from "../../context";
import { Navbar, Footer } from "../../components";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();
  const { likesDispatch } = useLikes();
  const { playlistsDispatch } = usePlaylists();
  const { historyDispatch } = useHistory();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    likesDispatch({ type: "CLEAR_LIKES" });
    playlistsDispatch({ type: "CLEAR_PLAYLISTS" });
    historyDispatch({ type: "CLEAR_HISTORY" });
    toast.success("Successfully Logged Out");
  };

  return (
    <>
      <Navbar />
      <main>
        <div className="logout-page">
          <button
            className="btn btn-solid-primary btn-logout"
            onClick={logoutHandler}
          >
            Logout
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { Profile };
