import { useEffect, useRef, useState } from "react";
import {
  FaArrowRight,
  FaSyringe,
  FaTooth,
  FaUserDoctor,
  FaWandMagicSparkles,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const projectIconMap = {
  checkup: FaUserDoctor,
  whitening: FaWandMagicSparkles,
  surgery: FaSyringe,
  default: FaTooth,
};

const ProjectsSection2 = ({ data }) => {
  const { heading, projects } = data;
  const animatedWords = Array.isArray(heading.animatedWords)
    ? heading.animatedWords
    : [];
  const [activeWord, setActiveWord] = useState(animatedWords[0] || "");
  const wordRef = useRef(null);

  useEffect(() => {
    if (!animatedWords.length || !wordRef.current) return;

    let index = 0;
    let timeoutId;

    const animateWord = () => {
      gsap.to(wordRef.current, {
        y: -16,
        opacity: 0,
        duration: 0.35,
        ease: "power2.in",
        onComplete: () => {
          index = (index + 1) % animatedWords.length;
          setActiveWord(animatedWords[index]);
          gsap.set(wordRef.current, { y: 16 });
          gsap.to(wordRef.current, {
            y: 0,
            opacity: 1,
            duration: 0.35,
            ease: "power2.out",
          });
          timeoutId = setTimeout(animateWord, 1700);
        },
      });
    };

    timeoutId = setTimeout(animateWord, 1700);

    return () => {
      clearTimeout(timeoutId);
      if (wordRef.current) gsap.killTweensOf(wordRef.current);
    };
  }, [animatedWords]);

  return (
    <>
      <div className="container">
        <div className="cs_portfolio_showcase_head">
          <div className="cs_portfolio_showcase_head_left">
            <div className="cs_portfolio_badge">
              <FaTooth />
              <span>{heading.subtitle}</span>
            </div>
            {heading.titlePrefix && animatedWords.length ? (
              <h2 className="cs_portfolio_title">
                {heading.titlePrefix}
                <br />
                <span ref={wordRef} className="cs_portfolio_rotating_word">
                  {activeWord}
                </span>
              </h2>
            ) : (
              <h2
                className="cs_portfolio_title"
                dangerouslySetInnerHTML={{ __html: heading.title }}
              />
            )}
          </div>
          <div className="cs_portfolio_showcase_head_right">
            <p>{heading.description}</p>
          </div>
        </div>
        <div className="cs_project_grid cs_style_2">
          {projects.map((project, index) => {
            const ProjectIcon =
              projectIconMap[project.icon] || projectIconMap.default;

            return (
              <div className="cs_project_item" key={index}>
                <Link to={project.link} className="cs_card cs_style_7">
                  <img
                    className="cs_card_image"
                    src={project.imageUrl || project.overlayImage}
                    alt={project.title}
                  />
                  <div className="cs_card_overlay" />
                  <div className="cs_card_info_wrapper">
                    <div className="cs_card_text">
                      <div className="cs_card_title_row">
                        <span className="cs_card_service_icon cs_center">
                          <ProjectIcon />
                        </span>
                        <h3 className="cs_card_title">{project.title}</h3>
                      </div>
                      <p className="cs_card_subtitle">{project.subtitle}</p>
                    </div>
                    <span className="cs_card_btn cs_center">
                      <FaArrowRight />
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="cs_portfolio_more_btn_wrap">
          <Link to={heading.buttonLink || "/"} className="cs_portfolio_more_btn">
            {heading.buttonText || "View More"}
            <span className="cs_center">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectsSection2;
