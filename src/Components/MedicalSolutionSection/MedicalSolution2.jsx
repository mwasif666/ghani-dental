import SectionHeading from "../SectionHeading";
import { FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const MedicalSolution2 = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="container">
        <SectionHeading
          SectionTitle={data.title}
          SectionSubtitle={data.subtitle}
          SectionDescription={data.description}
          variant={"s_style_1"}
          className={"text-center cs_mb_60"}
        />

        <div className="row cs_gap_y_40 cs_choose_us_section_row">
          <div className="col-md-6">
            <div className="cs_solution_content_wrapper cs_choose_us_content">
              <ul className="cs_solution_links cs_style_1 cs_solution_accordion cs_mp0">
                {data.links.map((link, index) => (
                  <li
                    key={index}
                    className={activeIndex === index ? "cs_active" : ""}
                  >
                    <button
                      type="button"
                      className="cs_solution_accordion_head"
                      aria-expanded={activeIndex === index}
                      aria-controls={`choose-us-panel-${index}`}
                      onClick={() =>
                        setActiveIndex(activeIndex === index ? -1 : index)
                      }
                    >
                      <span className="cs_tab_link_icon_left cs_center">
                        <img src={link.iconSrc} alt={link.iconAlt} />
                      </span>
                      <span>{link.text}</span>
                      <span className="cs_tab_link_icon_right cs_center">
                        <i>
                          <FaAngleRight />
                        </i>
                      </span>
                    </button>
                    <div
                      id={`choose-us-panel-${index}`}
                      className="cs_solution_accordion_body"
                    >
                      <div className="cs_solution_accordion_body_in">
                        <p>{link.description}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="cs_solution_thumbnail cs_choose_us_visual">
              <div className="cs_choose_us_success_card">
                <div className="cs_choose_us_stat">
                  <h3>{data.successRate?.value}</h3>
                  <p>{data.successRate?.label}</p>
                </div>
                <span className="cs_choose_us_stat_btn cs_center">
                  <FaArrowRight />
                </span>
                <img src={data.thumbnailSrc} alt={data.thumbnailAlt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalSolution2;
