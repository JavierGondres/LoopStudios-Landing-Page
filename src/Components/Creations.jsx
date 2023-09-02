import React ,{useState, useEffect}from "react";

function Creations({imgMobile, imgDesktop, title1, title2}) {
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
      <div className="creation">
        {windowWidth < 700 ? (
          <img className="c-img" src={imgMobile} alt="" />
        ) : (
          <img className="c-img" src={imgDesktop} alt="" />
        )}
        <p className="c-p">
          {title1} <br /> {title2}
        </p>
      </div>
    </>
  );
}

export default Creations;
