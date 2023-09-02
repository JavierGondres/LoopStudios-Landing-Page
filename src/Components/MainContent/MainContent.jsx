import React ,{useState, useEffect}from "react";
import imageInteractiveDesktop from "../../../public/images/desktop/image-interactive.jpg";
import imageInteractiveMobile from "../../../public/images/mobile/image-interactive.jpg";
import earthDesktop from "../../../public/images/desktop/image-deep-earth.jpg";
import curiosityDesktop from "../../../public/images/desktop/image-curiosity.jpg";
import imgFiyesheDesktop from "../../../public/images/desktop/image-fisheye.jpg";
import imgAboveDesktop from "../../../public/images/desktop/image-from-above.jpg";
import imgGridDesktop from "../../../public/images/desktop/image-grid.jpg";
import imgArcadeDesktop from "../../../public/images/desktop/image-night-arcade.jpg";
import imgPocketDesktop from "../../../public/images/desktop/image-pocket-borealis.jpg";
import imgSoccerDesktop from "../../../public/images/desktop/image-soccer-team.jpg";
import earthMobile from "../../../public/images/mobile/image-deep-earth.jpg";
import curiosityMobile from "../../../public/images/mobile/image-curiosity.jpg";
import imgFiyesheMobile from "../../../public/images/mobile/image-fisheye.jpg";
import imgAboveMobile from "../../../public/images/mobile/image-from-above.jpg";
import imgGridMobile from "../../../public/images/mobile/image-grid.jpg";
import imgArcadeMobile from "../../../public/images/mobile/image-night-arcade.jpg";
import imgPocketMobile from "../../../public/images/mobile/image-pocket-borealis.jpg";
import imgSoccerMobile from "../../../public/images/mobile/image-soccer-team.jpg";

import Creations from "../Creations";

function MainContent() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
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
      <section className="sec-creations">
        <div className="creations-title-container">
          <h2 className="creations-title">OUR CREATIONS</h2>
          <button className="filled-btn">SEE ALL</button>
        </div>
        <div className="creations-container">
          <Creations
            imgMobile={earthMobile}
            imgDesktop={earthDesktop}
            title1={"EARTH"}
            title2={"DEEP"}
          ></Creations>
          <Creations
            imgMobile={imgArcadeMobile}
            imgDesktop={imgArcadeDesktop}
            title1={"NIGHT"}
            title2={"ARCADE"}
          ></Creations>
          <Creations
            imgMobile={imgSoccerMobile}
            imgDesktop={imgSoccerDesktop}
            title1={"SOCCER"}
            title2={"TEAM"}
          ></Creations>
          <Creations
            imgMobile={imgGridMobile}
            imgDesktop={imgGridDesktop}
            title1={"THE"}
            title2={"GRID"}
          ></Creations>
          <Creations
            imgMobile={imgAboveMobile}
            imgDesktop={imgAboveDesktop}
            title1={"FROM UP"}
            title2={"ABOVE VR"}
          ></Creations>
          <Creations
            imgMobile={imgPocketMobile}
            imgDesktop={imgPocketDesktop}
            title1={"POCKET"}
            title2={"BOREALIS"}
          ></Creations>
          <Creations
            imgMobile={curiosityMobile}
            imgDesktop={curiosityDesktop}
            title1={"THE"}
            title2={"CURIOSITY"}
          ></Creations>
          <Creations
            imgMobile={imgFiyesheMobile}
            imgDesktop={imgFiyesheDesktop}
            title1={"MAKE IT"}
            title2={"FISHEYE"}
          ></Creations>
        {windowWidth < 700 ? <button className="outline-btn">SEE ALL</button>:null}
        </div>

      </section>
    </>
  );
}

export default MainContent;
