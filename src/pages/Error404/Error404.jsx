import { useNavigate } from "react-router-dom";
import { errorImg } from "../../assets";
import "./Error404.css";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="error-404-page">
        <div className="img-container-404">
          <img
            className="img-responsive image-404"
            src={errorImg}
            alt="404-page"
          />
          <button
            className="btn btn-solid-primary home-btn"
            onClick={() => navigate("/")}
          >
            Return to Explore
          </button>
        </div>
      </section>
    </main>
  );
};

export { Error404 };
