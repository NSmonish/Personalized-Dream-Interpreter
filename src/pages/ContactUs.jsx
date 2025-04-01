import { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  return (
    <>
      <div class="container col-xl-10 col-xxl-8 px-4 contact">
        <div class="row align-items-center g-lg-5 pb-3">
          <div class="col-lg-12 text-center text-lg-start">
            <h1 class="display-4 fw-bold lh-1 mb-5">Contact Us</h1>
            <h2 class="display-6 text-white fw-bold lh-1">Get in Touch</h2>
            <p class="col-lg-10 text-light fs-5 mt-3">
              Have questions, feedback, or need support? We’d love to hear from
              you! Reach out to us anytime, and we’ll get back to you as soon as
              possible.
            </p>
            <ul class="col-lg-10 text-light">
              <li>Email: support@dreamai.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Dream Street, AI City, 56789</li>
            </ul>
            <h2 class="display-6 text-white fw-bold lh-1">Follow Us</h2>
            <p class="col-lg-10 text-light fs-5 mt-3">
              Stay updated with the latest features and insights:
            </p>
            <ul class="col-lg-10 text-light">
              <li>Twitter: @DreamAI</li>
              <li>Instagram: @dreamai_official</li>
              <li>Facebook: fb.com/dreamai</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;

