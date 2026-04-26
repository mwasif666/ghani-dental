import { useState } from "react";
import { FaAnglesRight, FaRegCircleCheck } from "react-icons/fa6";
import Button from "../Buttons";
import SectionHeading from "../SectionHeading";
import VideoModal from "../VideoSection/Modal";

const About = ({ data }) => {
  const [toggle, setToggle] = useState(false);

  const [iframeSrc, setIframeSrc] = useState("about:blank");

  const handelClick = (e) => {
    if (e?.preventDefault) e.preventDefault();
    setIframeSrc(`${data.videoUrl}`);
    setToggle(true);
  };
  const handelClose = () => {
    setIframeSrc("about:blank");
    setToggle(false);
  };
  return (
    <>
      <div className="container">
        <div className="row align-items-center cs_gap_y_40">
          <div className="col-lg-6">
            <div className="cs_about_thumb">
              <div className="cs_about_thumb_1">
                <img src={data.headImgUrl} alt="" />
                <button
                  type="button"
                  className="cs_about_player_btn cs_video_open"
                  onClick={handelClick}
                >
                  <span className="cs_player_btn cs_center">
                    <span />
                  </span>
                  <span className="cs_about_play_btn_text">
                    {data.videoText}
                  </span>
                </button>
              </div>
              <div className="cs_about_thumb_2" onClick={handelClick}>
                {data.thumbVideoUrl ? (
                  <div className="cs_about_thumb_video_preview">
                    <iframe
                      src={data.thumbVideoUrl}
                      title="How we work preview"
                      allow="autoplay; encrypted-media; picture-in-picture"
                      style={{
                        width: "400px",
                        height: "260px",
                        border: "0px",
                        pointerEvents: "none",
                        transform: "scale(1.24)",
                        transformOrigin: "center center 0px",
                      }}
                    />
                  </div>
                ) : (
                  <img src="assets/img/about_img_2.jpg" alt="About Image" />
                )}
                <img
                  src="assets/img/icons/about_shape_1.png"
                  alt="Shape Image"
                  className="cs_about_thumb_shape_2"
                />
              </div>
              <div className="cs_experience_box cs_center" data-aos="zoom-in">
                <p className="cs_experience_box_number">
                  {data.experienceYears}
                </p>
                <p className="cs_experience_box_title">
                  {data.experienceTitle}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="cs_about_content">
              <SectionHeading
                SectionSubtitle={data.sectionSubtitle}
                SectionTitle={data.sectionTitle}
              />

              <p className="cs_about_text">{data.aboutText}</p>
              <div className="row cs_gap_y_30">
                {data.iconboxes.map((box, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="cs_iconbox cs_style_1">
                      <div className="cs_iconbox_head">
                        <div className="cs_iconbox_icon cs_center">
                          <img src={box.imgUrl} alt="" />
                        </div>
                        <h3 className="cs_iconbox_title m-0">{box.title}</h3>
                      </div>
                      <p className="cs_iconbox_subtitle mb-0">{box.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cs_about_iconbox">
                <div className="cs_about_iconbox_icon cs_center">
                  <i>
                    <FaRegCircleCheck />
                  </i>
                </div>
                <p
                  className="cs_about_iconbox_subtitle"
                  dangerouslySetInnerHTML={{ __html: data.service }}
                />
              </div>
              <Button
                btnText={data.btnText}
                variant={"cs_btn cs_style_1 cs_color_1"}
                btnIcons={<FaAnglesRight />}
                btnUrl={data.btnText}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cs_section_img">
        <img src={data.sectionImgUrl} alt="" />
      </div>
      {/* Video Modal  */}
      <VideoModal
        isTrue={toggle}
        iframeSrc={iframeSrc}
        handelClose={handelClose}
      />
    </>
  );
};

export default About;
