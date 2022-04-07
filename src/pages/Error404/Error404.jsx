import { useNavigate } from "react-router-dom";
import { errorImg } from "../../assets";
import "./Error404.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="img-container-404">
        <img
          className="img-responsive image-404"
          src={errorImg}
          alt="404-page"
        />
        <button
          className="btn btn-solid-primary home-btn"
          onClick={() => navigate("/explore")}
        >
          Return to Explore
        </button>
      </div>
    </main>
  );
};

export { Error404 };
