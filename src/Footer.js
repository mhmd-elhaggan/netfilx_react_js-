import React from "react";
import './style.css';
class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section id="footer">
    <div class="footer container">
      <div class="brand">
        <h1><span>M</span>ohamed <span>E</span>lhaggan</h1>
      </div>
      <h2>Your Complete Web Solution</h2>
      <div class="social-icon">
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/twitter.png" /></a>
        </div>
        <div class="social-item">
          <a href="#"><img src="https://img.icons8.com/bubbles/100/000000/behance.png" /></a>
        </div>
      </div>
      <p>Copyright © 2022 elhaggan. All rights reserved</p>
    </div>
  </section>
    );
  }
}

export default Footer;
