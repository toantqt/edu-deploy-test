import React, { useState, useEffect } from "react";
import "./home.css";
import HeaderComponent from "../../Components/Header/Header.component";
import SliderComponent from "../../Components/Slider/Slider.component";
import FilterComponent from "../../Components/Filter/Filter.component";
import EducationProgramComponent from "../../Components/Education/Education-Program.component";
import PromotionComponent from "../../Components/Promotion/Promotion.component";
import SupportComponent from "../../Components/Support/Support.component";
import FooterComponent from "../../Components/Footer/Footer.component";
import TeacherSliderComponent from "../../Components/Slider/Teacher-Slider.component";
import EducationSoonComponent from "../../Components/Education Soon/EducationSoon.component";

const PageHomeView = () => {
  const [fix, setFix] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      if (!fix) {
        setFix(true);
      }
    } else {
      if (fix) {
        setFix(false);
      }
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  return (
    <div style={{ overflow: "hidden" }}>
      <HeaderComponent />
      <div style={{ width: "100%", position: "relative" }}>
        <SliderComponent />
        <div className="video-slider">
          <iframe
            width="100%"
            height="300"
            src="https://www.youtube.com/embed/Mp0YNi3mW4A?autoplay=1"
            style={{ border: "none", borderRadius: "10px" }}
            className="video"
          ></iframe>
        </div>
      </div>
      <div id="content">
        <div>
          <div className="wrap-page mb-5">
            <EducationSoonComponent />
          </div>
        </div>

        <div className={fix ? "fix-content" : "d-none"}>
          <img
            src="https://res.cloudinary.com/toantqt/image/upload/v1620230066/icon-edu-d24/%C4%90a%CC%86ng-ky%CC%81-ngay-button-300x120_wxub3b.png"
            alt=""
          />
        </div>
        <h1>C??c kh??a ????o t???o d??i h???n</h1>
        <p>
          Ch????ng tr??nh h???c ??a d???ng v?? th?????ng xuy??n c???p nh???t c??ng ngh??? m???i.
          <br />
          H??y ????? ch??ng t??i ?????ng h??nh c??ng b???n tr??n h??nh tr??nh chinh ph???c tri
          th???c - v???ng v??ng b?????c v??o th??? gi???i c??ng ngh??? 4.0.
        </p>
        <br />
        <EducationProgramComponent />
        <PromotionComponent />
        <SupportComponent />
        <TeacherSliderComponent />
        <FooterComponent />
      </div>
    </div>
  );
};
export default PageHomeView;
