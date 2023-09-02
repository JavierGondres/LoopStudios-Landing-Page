import React from "react";
import imageInteractiveDesktop from "../../../public/images/desktop/image-interactive.jpg";
import imageInteractiveMobile from "../../../public/images/mobile/image-interactive.jpg";
function MainContent() {
  return (
    <>
      <section className="sec-vr">
        <div className="vr-wrapper">
          <picture className="picture-vr">
            <source
              className="vr-image"
              srcSet={imageInteractiveMobile}
              media="(max-width: 700px)"
            />
            <img className="vr-image" src={imageInteractiveDesktop} alt="" />
          </picture>

          <div className="vr-text-container">
            <h3 className="vr-title">
              THE LEADER IN <br />
              INTERACTIVE VR
            </h3>
            <p className="vr-p">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent;
