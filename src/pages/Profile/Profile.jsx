import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useAuth,
  useLikes,
  usePlaylists,
  useHistory,
  useNotes,
} from "../../context";
import "./Profile.css";

const Profile = () => {
  const navigate = useNavigate();
  const {
    authState: { user },
    authDispatch,
  } = useAuth();
  const { likesDispatch } = useLikes();
  const { playlistsDispatch } = usePlaylists();
  const { historyDispatch } = useHistory();
  const { notesDispatch } = useNotes();

  const logoutHandler = () => {
    navigate("/");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    authDispatch({ type: "LOGOUT" });
    likesDispatch({ type: "CLEAR_LIKES" });
    playlistsDispatch({ type: "CLEAR_PLAYLISTS" });
    historyDispatch({ type: "CLEAR_HISTORY" });
    notesDispatch({ type: "CLEAR_NOTES" });
    toast.success("Successfully Logged Out");
  };

  return (
    <>
      <main>
        <h1 className="profile-page-title align-center">Account</h1>
        <section className="profile-page">
          <div className="profile-tabs">
            <button className="tab profile-tab">Profile</button>
          </div>
          <div className="user-page">
            <div className="user-details">
              <h3 className="text-underline">Profile Details</h3>
              <div className="detail">
                <div className="user-info">
                  <h4>Name</h4>
                  <p>
                    {user.firstName} {user.lastName}
                  </p>
                </div>
                <div className="user-info">
                  <h4>Email</h4>
                  <p>{user.email}</p>
                </div>
              </div>
            </div>
            <div className="user-settings">
              <h3 className="text-underline">Account Settings</h3>
              <button
                className="btn btn-solid-primary btn-logout"
                onClick={logoutHandler}
              >
                Logout
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export { Profile };
