import SectionHeading from "../SectionHeading";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa6";
import Button from "../Buttons";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ImageComparison } from "../ui/image-comparison-slider";

const ServiceSection3 = ({ data }) => {
  const wordRef = useRef(null);
  const animatedWords = Array.isArray(data.animatedWords)
    ? data.animatedWords
    : [];
  const animatedWordsKey = animatedWords.join("|");
  const [activeWord, setActiveWord] = useState(animatedWords[0] || "");

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 2200,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    appendDots: (dots) => (
      <div>
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: `cs_pagination cs_style_2 cs_white_color`,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const beforeImage = data.beforeImage || data.beforeAfterImage;
  const afterImage = data.afterImage || data.beforeAfterImage;
  const hasBeforeAfterImage = Boolean(beforeImage && afterImage);
  const shouldAnimateTitle = Boolean(data.titlePrefix && animatedWords.length);

  useEffect(() => {
    setActiveWord(animatedWords[0] || "");
  }, [animatedWordsKey]);

  useEffect(() => {
    if (!shouldAnimateTitle || !wordRef.current) return;

    let index = 0;
    let timeoutId;

    const animateWord = () => {
      gsap.to(wordRef.current, {
        y: -18,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          index = (index + 1) % animatedWords.length;
          setActiveWord(animatedWords[index]);
          gsap.set(wordRef.current, { y: 18 });
          gsap.to(wordRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          });
          timeoutId = setTimeout(animateWord, 1800);
        },
      });
    };

    timeoutId = setTimeout(animateWord, 1800);

    return () => {
      clearTimeout(timeoutId);
      if (wordRef.current) gsap.killTweensOf(wordRef.current);
    };
  }, [animatedWordsKey, shouldAnimateTitle]);

  return (
    <div className="container">
      {hasBeforeAfterImage ? (
        <div className="cs_services_intro">
          <ImageComparison
            beforeImage={beforeImage}
            afterImage={afterImage}
            altBefore={data.beforeAlt || "Before dental treatment"}
            altAfter={data.afterAlt || "After dental treatment"}
            className="cs_services_before_after"
          />
          <div className="cs_services_intro_content">
            <div className="cs_section_heading cs_style_1 cs_services_heading_skin">
              <p className="cs_section_subtitle cs_services_intro_subtitle">
                <span className="cs_shape_left" />
                {data.sectionSubtitle}
              </p>
            </div>
            {shouldAnimateTitle ? (
              <h2 className="cs_services_intro_title">
                {data.titlePrefix}
                <br />
                <span ref={wordRef} className="cs_services_rotating_word">
                  {activeWord}
                </span>
              </h2>
            ) : (
              <h2
                className="cs_services_intro_title"
                dangerouslySetInnerHTML={{ __html: data.sectionTitle }}
              />
            )}
            <p className="cs_services_intro_description">
              {data.description}
            </p>
          </div>
        </div>
      ) : (
        <SectionHeading
          variant={"cs_type_1"}
          SectionSubtitle={data.sectionSubtitle}
          SectionTitle={data.sectionTitle}
          SectionDescription={data.description}
        />
      )}

      <div className="cs_height_50 cs_height_lg_50" />
      <div className="cs_slider cs_style_1 cs_slider_gap_24">
        <div className="cs_slider_container">
          <div className="cs_slider_wrapper">
            <Slider {...settings}>
              {data.slides.map((slide, index) => (
                <div className="cs_slide" key={index}>
                  <div className="cs_iconbox cs_style_7">
                    <Link
                      to={slide.detailsLink}
                      className="cs_iconbox_thumbnail"
                    >
                      <img src={slide.imageUrl} alt="Image" />
                    </Link>
                    <div className="cs_iconbox_content">
                      <div
                        className="cs_iconbox_overlay cs_bg_filed"
                        style={{
                          backgroundImage: `url(${slide.bgImagUrl})`,
                        }}
                      />
                      <div className="cs_iconbox_icon cs_center">
                        <img src={slide.icon} alt="Icon" />
                      </div>
                      <h3 className="cs_iconbox_title">
                        <Link to={slide.detailsLink}>{slide.title}</Link>
                      </h3>
                      <p className="cs_iconbox_subtitle">{slide.subtitle}</p>

                      <Button
                        btnIcons={<FaAngleRight />}
                        btnText={slide.detailsText}
                        btnUrl={slide.detailsLink}
                        variant={"cs_iconbox_btn"}
                      />

                      <div className="cs_iconbox_shape_1 position-absolute" />
                      <div className="cs_iconbox_shape_2 position-absolute" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection3;
