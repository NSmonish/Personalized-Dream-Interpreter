import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Intro.css";

function Intro() {
  const navigate = useNavigate();
  return (
    <>
      <div class="container col-xxl-8 px-4 py-5 mt-5 intro">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src=" "
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">
              Welcome to your Personalized Dream Interpreter – Unlock the Hidden
              Meanings of Your Dreams!
            </h1>
            <p class="lead text-light">
              Turn your dreams into insights with AI-powered interpretation and
              trend analysis.
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-warning btn-lg px-4 me-md-2"
                onClick={() => navigate("/signup")}
              >
                Sign-up
              </button>
              <button
                type="button"
                className="btn btn-outline-light btn-lg px-4"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
