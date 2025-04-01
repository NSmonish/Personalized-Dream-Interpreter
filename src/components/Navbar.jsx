import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <header className="p-3">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <button
                  className="nav-link px-2 text-black"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="nav-link px-2 text-black"
                  onClick={() => navigate("/dreams")}
                >
                  Dreams
                </button>
              </li>
              <li>
                <button
                  className="nav-link px-2 text-black"
                  onClick={() => navigate("/analysis")}
                >
                  Analysis
                </button>
              </li>
              <li>
                <button
                  className="nav-link px-2 text-black"
                  onClick={() => navigate("/profile")}
                >
                  My Profile
                </button>
              </li>
            </ul>

            <div className="text-end nav-btn">
              <button
                type="button"
                className="btn btn-outline-dark me-2"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={() => navigate("/signup")}
              >
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
