import { useState } from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div class="container">
        <footer class="py-3 mt-5">
          <ul class="nav justify-content-center border-bottom pb-3 mb-3">
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Dreams
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                Analysis
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link px-2 text-body-secondary">
                My Profile
              </a>
            </li>
          </ul>
          <p class="text-center text-body-secondary">
            © 2025 DreamAI. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
