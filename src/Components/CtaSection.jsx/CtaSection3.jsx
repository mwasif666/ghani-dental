import Button from "../Buttons";
import { FaAnglesRight } from "react-icons/fa6";

const circleBase = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  border: "5px solid #fff",
  boxShadow: "0 8px 22px rgba(0,0,0,0.18)",
  objectFit: "cover",
  display: "block",
  flex: "none",
};

const CtaSection3 = ({ data }) => {
  const images = Array.isArray(data.images) && data.images.length > 0
    ? data.images
    : null;

  return (
    <>
      <div className="container">
        <div className="cs_cta_in">
          <div className="cs_cta_left">
            {images ? (
              <div
                className="cs_cta_thumb_group"
                data-aos="fade-left"
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  flex: "none",
                }}
              >
                {images.slice(0, 3).map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt || `cta-${i}`}
                    style={{
                      ...circleBase,
                      marginLeft: i === 0 ? 0 : "-36px",
                      zIndex: 3 - i,
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="cs_cta_thumb" data-aos="fade-left">
                <img src={data.imageUrl} alt={data.imageAlt} />
              </div>
            )}
            <div className="cs_cta_info">
              <h2 className="cs_cta_title">{data.title}</h2>
              <p className="cs_cta_subtitle">{data.subtitle}</p>
            </div>
          </div>
          <div className="cs_cta_right">
            <Button
              variant={"cs_btn cs_style_1 cs_color_3"}
              btnText={data.buttonText}
              btnIcons={<FaAnglesRight />}
              btnUrl={data.buttonLink}
            />
          </div>
        </div>
      </div>
      <div className="cs_cta_shape" />
    </>
  );
};

export default CtaSection3;
