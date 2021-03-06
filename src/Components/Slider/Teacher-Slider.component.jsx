import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import "./teacherSlider.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "280px",
    height: "350px",
  },
  media: {
    height: 0,
    width: "80%",
    margin: "0 auto",
    marginTop: "10px",
    paddingTop: "56.25%", // 16:9
  },
  media1: {
    height: 0,
    width: "60%",
    margin: "0 auto",
    marginTop: "10px",
    paddingTop: "56.25%", // 16:9
  },
  content: {
    marginTop: "25px",
  },
}));
const TeacherSliderComponent = () => {
  const classes = useStyles();
  var settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    slickNext: true,
    slickPrev: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        marginTop: "30px",
        width: "100%",
        height: "600px",
        margin: "0 auto",
        marginBottom: "100px",
        backgroundColor: "rgb(251 251 251)",
      }}
    >
      <div
        style={{ width: "90%", margin: "0 auto", paddingTop: "30px" }}
        className="teacher-slider"
      >
        <div style={{ marginBottom: "30px" }}>
          <div className="border_left hidden-xs"></div>
          <span
            className="ml-1 mr-1"
            style={{ fontSize: "2rem", fontWeight: "500" }}
          >
            ?????i ng?? gi???ng vi??n
          </span>
          <div className="border_right"></div>
        </div>
        <Slider {...settings}>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198754/gv-d24/HOAIANH-removebg-preview_vn5z0a.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Nguy???n Ho??i Anh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  CEO, Founder Design24, G?? Cty TNHH Mekongone, Gi???ng vi??n ??HQT
                  H???ng B??ng, ??H FPT, Cusc - Arena... Tr?????ng b??? ph???n Thi???t K??? ?????
                  H???a ????i Truy???n H??nh H???u Giang (5 n??m)
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media1}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620207997/gv-d24/2980fd01a763523d0b72-removebg-preview_cji62i.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. L?? V??n T??
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Ti???n S??? L?? V??n T??
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/THINH-removebg-preview_masyhw.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. L?? Qu???c Th???nh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ?????i h???c S??n kh???u ??i???n ???nh TP. HCM - ????i Truy???n h??nh H???u Giang
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198754/gv-d24/DUY-removebg-preview_prwlnb.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. V?? Kh??nh Duy
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Ki???n tr??c s??, ??H Ki???n Tr??c TP. HCM
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/PHUONG-removebg-preview_g6loy3.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. L?? Ph?????ng
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Bi??n t???p, quay phim - ????i ph??t thanh Truy???n h??nh H???u Giang
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/THUC-removebg-preview_aotior.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Nguy???n Tri Th???c
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Tr?????ng b??? ph???n ????? H???a ????i Truy???n h??nh Vi???t Nam t???i TP. HCM,
                  Gi???ng Vi??n ??H S??n Kh???u ??i???n ???nh TP. HCM, ??H Hoa Sen, C??ng
                  ngh???... 20 n??m kinh nghi???m thi???t k??? ????? h???a
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/TUANANH-removebg-preview_j2puiw.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. L?? Tu???n Anh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  L?? m???t trong nh???ng d???n ch????ng tr??nh (DCT) ???????c kh??n gi??? y??u
                  m???n nh???t c???a ????i Ph??t thanh Truy???n h??nh H???u Giang.
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/LYMINH-removebg-preview_hcwtdp.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. L?? Minh
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ????i Truy???n h??nh Vi???t Nam
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image="https://res.cloudinary.com/toantqt/image/upload/v1620198753/gv-d24/KHOI-removebg-preview_gu2knu.png"
                title="Paella dish"
              />
              <CardContent className={classes.content}>
                <Typography variant="h6" component="h2">
                  GV. Tr???n Xu??n Kh??i
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Thi???t k??? N???i Th???t, ??H QT H???ng B??ng TP.HCM
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default TeacherSliderComponent;
