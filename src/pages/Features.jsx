import { useState } from 'react';
import './Features.css';

function Features() {
  return (
    <>
      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom text-light">Unlock the Secrets of Your Dreams with AI-Powered Insights</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div>
              <h3 class="fs-2 ftopic">AI-Powered Dream Interpretation</h3>
              <p class="text-light">Instantly analyze your dreams using AI trained on psychological and symbolic data. Our system provides detailed interpretations based on dream content, emotions, and recurring themes, helping you uncover deeper meanings and subconscious patterns effortlessly.</p>
              <a href="#" class="btn btn-warning">
                Try It Out Now
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h3 class="fs-2 ftopic">Symbol & Emotion Analysis</h3>
              <p class="text-light">Detect key symbols, emotions, and patterns within your dreams to gain insights into your subconscious mind. The AI compares symbols with historical interpretations, helping you recognize hidden messages, emotional trends, and recurring themes for a better understanding of your dreams.</p>
              <a href="#" class="btn btn-warning">
                Try It Out Now
              </a>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h3 class="fs-2 ftopic">Personalized Dream Journal</h3>
              <p class="text-light"> Securely store, organize, and track your dreams over time with a private journal. Easily add notes, categorize dreams, and analyze patterns to gain deeper self-awareness. Search and revisit past dreams to identify recurring symbols and long-term trends in your subconscious.</p>
              <a href="#" class="btn btn-warning">
                Try It Out Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
