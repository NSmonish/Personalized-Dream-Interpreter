import { useState } from 'react';
import './ToDream.css';

function ToDream() {
  return (
    <>
      <div class="col-11 mx-auto px-4 py-5 my-5 text-center ToDream">
        <h1 class="display-5 fw-bold">Analyze Your Dream Now</h1>
        <div class="col-lg-8 mx-auto">
          <p class="lead text-light mb-4">Have you ever wondered what your dreams mean? With DreamAnalyzer, you can explore the symbols, emotions, and recurring patterns in your dreams using cutting-edge AI and deep learning models. Our intelligent system provides personalized insights, helping you uncover hidden messages and emotional trends over time.</p>
          <p class="lead text-light mb-4">Join thousands of users who are discovering the deeper meaning of their dreams today!</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-warning btn-lg px-4 gap-3">Enter Dream</button>
            <button type="button" class="btn btn-outline-light btn-lg px-4">View Dream</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDream;
