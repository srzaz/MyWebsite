import React from "react";
import SocialProfiles from './SocialProfiles';

function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 white fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-black">
          <SocialProfiles/>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;