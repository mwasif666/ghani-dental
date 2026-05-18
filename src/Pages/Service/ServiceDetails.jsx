import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import Section from "../../Components/Section";
import { getServiceDetails, serviceOptions } from "./serviceContent";

const trustPoints = [
  "5000+ Happy Patients who keep coming back",
  "10+ Years of dental excellence",
  "Team of 10+ Renowned Dentists covering every dental speciality",
];

const ServiceDetails = ({ data }) => {
  const { serviceId } = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open("https://wa.me/923334425828", "_blank", "noopener,noreferrer");
  };
  const serviceData = data || getServiceDetails(serviceId) || {
    title: "Service",
    bannerImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80",
    introImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    introTitle: "Service Details",
    introDescription: "Please select a service from the services menu.",
    introCta: "Explore Our Dental Services",
    benefitsHeading: "Complete Dental Care for Healthy Smiles",
    benefits: [],
  };
  const benefits = serviceData.benefits || [];
  const leftBenefits = benefits.filter((_, index) => index % 2 === 0);
  const rightBenefits = benefits.filter((_, index) => index % 2 === 1);
  const headingData = {
    title: serviceData.title,
  };

  return (
    <>
      <Section
        className={"cs_page_heading cs_service_inner_banner cs_bg_filed cs_center"}
        backgroundImage={serviceData.bannerImage}
      >
        <PageHeading data={headingData} />
      </Section>

      <Section topSpaceLg="70" topSpaceMd="80" bottomSpaceLg="20" bottomSpaceMd="20">
        <div className="container">
          <div className="gd_service_intro_block">
            <div className="gd_service_intro_media">
              <img src={serviceData.introImage} alt={serviceData.introTitle} />
            </div>
            <div className="gd_service_intro_content">
              <h2 className="gd_service_intro_title">{serviceData.introTitle}</h2>
              <p className="gd_service_intro_text">{serviceData.introDescription}</p>
              <button type="button" className="gd_service_intro_cta">
                {serviceData.introCta}
              </button>
            </div>
          </div>
        </div>
      </Section>

      <section className="gd_trust_booking_section">
        <div className="gd_trust_booking_overlay" aria-hidden="true" />
        <div className="container">
          <div className="gd_trust_booking_grid">
            <div className="gd_trust_content">
              <h2 className="gd_trust_title">
                Why Patients Trust Ghani Dental Clinic
              </h2>
              <p className="gd_trust_text">
                At Ghani Dental Clinic, your comfort and peace of mind come
                first. We combine compassionate care with state-of-the-art
                technology to deliver precise diagnoses and gentle, highly
                accurate treatments &mdash; giving you exceptional results you can
                count on.
              </p>
              <ul className="gd_trust_list">
                {trustPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>

            <form className="gd_booking_form" onSubmit={handleSubmit}>
              <h3 className="gd_booking_title">Book your dental consultation</h3>
              <div className="gd_booking_row">
                <div className="gd_booking_field">
                  <select defaultValue="" required>
                    <option value="" disabled>
                      Select A Service
                    </option>
                    {serviceOptions.map(service => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="gd_booking_field">
                  <input type="text" placeholder="Your Name" required />
                </div>
              </div>
              <div className="gd_booking_row">
                <div className="gd_booking_field">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="gd_booking_field">
                  <input type="tel" placeholder="Your Phone Number" required />
                </div>
              </div>
              <div className="gd_booking_row">
                <div className="gd_booking_field">
                  <input type="date" required />
                </div>
                <div className="gd_booking_field">
                  <input type="time" required />
                </div>
              </div>
              <button type="submit" className="gd_booking_submit">
                Make Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="gd_service_benefits_section">
        <div className="container">
          <h2 className="gd_service_benefits_heading">
            {serviceData.benefitsHeading}
          </h2>

          <div className="gd_service_benefits_grid">
            <div className="gd_service_benefits_col">
              {leftBenefits.map((benefit, index) => (
                <article className="gd_service_benefit_card" key={index}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>

            <div className="gd_service_benefits_center">
              <img
                className="gd_service_benefits_img_back"
                src={serviceData.introImage}
                alt={`${serviceData.title} treatment`}
              />
              <img
                className="gd_service_benefits_img_front"
                src={serviceData.secondaryImage || serviceData.bannerImage}
                alt={`${serviceData.title} result`}
              />
            </div>

            <div className="gd_service_benefits_col">
              {rightBenefits.map((benefit, index) => (
                <article className="gd_service_benefit_card" key={index}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="gd_review_cta_section">
        <div className="container">
          <div className="gd_review_card">
            <div className="gd_review_text">
              <h3 className="gd_review_title">Love your visit?</h3>
              <p className="gd_review_desc">
                Share your experience with others by leaving us a Google review.
                It only takes a minute and helps our clinic grow!
              </p>
              <div className="gd_review_stars" aria-label="5 out of 5 stars">
                <FaStar aria-hidden="true" />
                <FaStar aria-hidden="true" />
                <FaStar aria-hidden="true" />
                <FaStar aria-hidden="true" />
                <FaStar aria-hidden="true" />
              </div>
            </div>
            <div className="gd_review_actions">
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="gd_review_btn gd_review_btn_green"
              >
                <FaStar aria-hidden="true" />
                <span>Leave a Google Review</span>
              </a>
              <a href="https://wa.me/923334425828" target="_blank" rel="noopener noreferrer" className="gd_review_btn gd_review_btn_blue">
                <FaRegStarHalfStroke aria-hidden="true" />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
