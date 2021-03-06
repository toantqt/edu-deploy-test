import React, { useState, useEffect } from "react";
import "./header.css";
import { useHistory } from "react-router-dom";
const HeaderComponent = () => {
  let history = useHistory();
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleClickEdu = (value) => {
    history.push({
      pathname: "/course",
      search: `?id=${value}`,
    });
  };

  const handleClickShortTerm = (value) => {
    history.push({
      pathname: "/course-short-term",
      search: `?id=${value}`,
    });
  };
  return (
    <div>
      <div
        className={
          "wsmenucontent overlapblackbg " +
          (menuOpen ? "menuopen" : "menuclose")
        }
      />
      <div className="wsmenuexpandermain slideRight">
        <a
          id="navToggle"
          className={
            "animated-arrow slideLeft " + (menuOpen ? "menuopen" : "menuclose")
          }
          onClick={() => handleClickOpenMenu()}
        >
          <span />
        </a>

        <a href="/" className="smallogo">
          <img
            src="https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png"
            height="34px"
            alt=""
          />
        </a>
      </div>

      <div className="header">
        <div className="wrapper clearfix">
          <div className="container hidden-xs" style={{ position: "relative" }}>
            <div className="logo clearfix" style={{ width: "100%" }}>
              <a
                style={{ textDecoration: "none", width: "32%", float: "left" }}
                title="Responsive Slide Menus"
                href="/"
              >
                <div className="row">
                  <div className="col-3">
                    <img
                      src="https://res.cloudinary.com/serviced24/image/upload/v1633589688/logomenu_nliwks.png"
                      width="80px"
                    />
                  </div>
                  <div className="col-9" style={{ marginLeft: "-10px" }}>
                    <div className="row">
                      <div className="col-12">
                        <span className="header-title ml-3">
                          H???C VI???N DESIGN 24
                        </span>
                      </div>
                      <div className="col-12" style={{ marginTop: "-4px" }}>
                        <span
                          className=" ml-4"
                          style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            fontStyle: "italic",
                            color: "rgb(146 146 146)",
                          }}
                        >
                          Design & Digital Marketing
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="searchdestop">
              <span
                style={{
                  fontSize: "15px",
                  fontStyle: "italic",
                  fontWeight: "500",
                  color: "rgb(146, 146, 146)",
                }}
              >
                ????n v??? li??n k???t ????o t???o
              </span>
              <div style={{ textAlign: "center" }}>
                <img
                  src="https://res.cloudinary.com/toantqt/image/upload/v1620209420/icon-edu-d24/537606018a637f3d2672_esthkf.jpg"
                  width="45px"
                />
                <img
                  src="https://res.cloudinary.com/toantqt/image/upload/v1620209419/icon-edu-d24/6945795ffe3d0b63522c_wockje.jpg"
                  width="55px"
                  className="ml-3"
                />
              </div>
            </div>
          </div>
        </div>
        {/*Menu ch??nh*/}
        <div
          className="container-fluid"
          id="fix-menu"
          style={{ backgroundColor: "#0082c8" }}
        >
          <div className="container">
            <nav
              className={
                "wsmenu pm_buttoncolor blue-grdt slideLeft clearfix " +
                (menuOpen ? "menuopen" : "menuclose")
              }
            >
              <ul className="mobile-sub wsmenu-list">
                <li>
                  <a
                    className="active"
                    onClick={() => {
                      history.push("/");
                    }}
                  >
                    <i className="fa fa-home" />
                    <span className="hometext" />
                  </a>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="#">L???ch khai gi???ng</a>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="#">????? h???a chuy??n ng??nh</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a onClick={() => handleClickEdu(16)}>NG??NH DU L???CH</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(18)}> NG??NH SPA</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(17)}>
                        NG??NH NH?? H??NG KH??CH S???N
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(19)}>NG??NH KINH T???</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(20)}>
                        NG??NH N??NG NGHI???P
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(21)}>
                        NG??NH B???O V??? TH???C V???T
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(22)}>NG??NH TH???Y S???N</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(23)}>NG??NH C??NG NGH???</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(24)}>NG??NH GI??O D???C</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="#">Kh??a d??i h???n</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a onClick={() => handleClickEdu(0)}>
                        Thi???t k??? ????? h???a qu???ng c??o
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(1)}>
                        Thi???t k??? video marketing
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(2)}>
                        Thi???t k??? 3D ki???n tr??c - n???i th???t
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(3)}>Thi???t k??? TVC 3D</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(4)}>
                        Thi???t k??? ho???t h??nh 2D
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(5)}>Thi???t k??? 3D event</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(6)}>
                        Bi??n t???p &amp; d???ng phim
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(7)}>
                        MC &amp; d???n ch????ng tr??nh th???c t???
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(8)}>Quay phim</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(9)}>Nhi???p ???nh</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(10)}>Thi???t k??? Website</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(11)}>
                        Thi???t k??? App Mobile
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(12)}>
                        Thi???t k??? & thi c??ng C??ng Tr??nh Qu???ng c??o
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(13)}>T??? ch???c s??? ki???n</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(14)}>
                        Livestream b??n h??ng online
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickEdu(15)}>
                        ????? h???a cho thi???u nhi
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Kh??a ng???n h???n</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a onClick={() => handleClickShortTerm(0)}>
                        ADOBE PHOTOSHOP
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(1)}>
                        ADOBE ILLUSTRATOR
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(2)}>
                        ADOBE PREMIERE
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(3)}>
                        ADOBE AFTER EFFECT
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(4)}>COREL DRAW</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(5)}>SKETCHUP</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(6)}>NUKE STUDIO</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(7)}>BLENDER</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(8)}>
                        AUTODESK 3DS MAX
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(9)}>
                        AUTODESK MAYA
                      </a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(10)}>CINEMA 4D</a>
                    </li>
                    <li>
                      <a onClick={() => handleClickShortTerm(11)}>
                        UNREAL ENGINE
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Digital Marketing</a>
                  <ul className="wsmenu-submenu">
                    <li>
                      <a>
                        Kh??a H???c Livestream Facebook Ba??n Ha??ng Online Cao C????p
                      </a>
                    </li>
                    <li>
                      <a>Khoa?? Ho??c Ba??n Ha??ng Tr??n Ca??c Sa??n Th????ng Ma??i ??i????n T????</a>
                    </li>
                    <li>
                      <a>Qu???ng C??o Google Ads</a>
                    </li>
                    <li>
                      <a>Kh??a H???c Qu???ng C??o Facebook</a>
                    </li>
                    <li>
                      <a>Kh??a H???c Qu???ng C??o Facebook Chuy??n S??u</a>
                    </li>
                    <li>
                      <a>Kh??a H???c Content Marketing</a>
                    </li>
                    <li>
                      <a>Kh??a H???c SEO</a>
                    </li>
                    <li>
                      <a>Kh??a H???c Email Marketing</a>
                    </li>
                    <li>
                      <a>Kh??a H???c Chatbot</a>
                    </li>
                    <li>
                      <a>Kh??a H???c Video B??n H??ng</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <span className="wsmenu-click">
                    <i className="wsmenu-arrow fa fa-angle-down" />
                  </span>
                  <a href="https://design24.vn/">D???ch v???</a>
                </li>
                <li>
                  <a href="https://www.behance.net/design2cngty?tracking_source=search_projects_recommended%7Cdesign24">
                    D??? ??n
                  </a>
                </li>

                <li>
                  <a href="/tin-tuc/tin-tuc-trung-tam-tin-hoc/Huong-dan-thanh-toan-hoc-phi-959">
                    Vi???c l??m
                  </a>
                </li>
                <li>
                  <a href="/tin-tuc/gioi-thieu-ve-trung-tam-tin-hoc/lien-he-342">
                    Li??n h???
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
