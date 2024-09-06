import React from "react";
import "./home.css";
// import "./home-media.css";
import "./font-weight.css";

export default function Home() {
  return (
    <main>
      <section className="hero-image">
        <div className="hero-text">
          <h1 className="hero-title">Freshly Brewed</h1>
          <h1 className="hero-title">Coffee & Green Tea</h1>
          <p className="hero-description">Best qualities from our local soil</p>
        </div>
      </section>
      <section className="content">
        <div className="introduction">
          <img src="assets/images/Who are we.jpg" alt="Who Are We?" />
          <div className="intro-desc">
            <h2>Who are we?</h2>
            <p>
              We are Jakarta-based coffee and tea house focused on
              professionally brewing local sourced, high quality, coffee beans
              and tea leaves.
            </p>
          </div>
        </div>
        <div className="showcase">
          <div className="showcase-desc">
            <h2>Product Showcase</h2>
            <p>
              Our products contain the highest quality ingredients processed
              with care.
            </p>
            <button className="lato-regular">See our coffee and tea</button>
          </div>
          <img src="assets/images/Our products.jpg" alt="Our Products" />
        </div>
        <div className="find-cafes">
          <img
            src="assets/images/Hang out with us.jpg"
            alt="Hang Out with Us"
          />
          <div className="find-cafes-desc">
            <h2>Hang out with us!</h2>
            <p>
              Our stores use sustainable furnitures, surrounded by nature, to
              help our planet survive.
            </p>
            <button className="lato-regular">Find our cafes</button>
          </div>
        </div>
        <div className="social-media">
          <div className="social-media-desc">
            <h2>
              Find us out at Instagram{" "}
              <span className="aroma-instagram">@aroma_bumi</span>!
            </h2>
          </div>
          <div className="image-container">
            <img src="assets/images/Feed 1.png" alt="Feed 1" />
            <img src="assets/images/Feed 2.png" alt="Feed 2" />
            <img src="assets/images/Feed 3.png" alt="Feed 3" />
            <img src="assets/images/Feed 4.png" alt="Feed 4" />
            <img src="assets/images/Feed 5.png" alt="Feed 5" />
            <img src="assets/images/Feed 6.png" alt="Feed 6" />
          </div>
        </div>
        <div className="ask">
          <div className="ask-desc">
            <h2>Ask us more!</h2>
            <p>
              If you have any questions or interested to cooperate with us,
              kindly let us know here:
            </p>
            <button className="lato-regular">Contact us</button>
          </div>
        </div>
      </section>
    </main>
  );
}
