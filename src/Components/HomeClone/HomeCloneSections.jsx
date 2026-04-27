import { useState } from "react";
import Slider from "react-slick";
import {
  FaCheck,
  FaUser,
  FaStar,
  FaRegStar,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
  FaRegClock,
  FaChevronDown,
  FaRegStarHalfStroke,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { ImageComparison } from "../ui/image-comparison-slider";

/* -----------------------------------------------------------
 * 1. Why Choose Ghani Dental Clinic
 * ----------------------------------------------------------- */
const whyChooseFeatures = [
  {
    title: "Warm & Expert Team:",
    description:
      "Skilled dentists who truly listen to your concerns, explain everything clearly, and treat you with genuine care and professionalism.",
  },
  {
    title: "Advanced Technology:",
    description:
      "Cutting-edge equipment designed to deliver safe, accurate, and remarkably comfortable treatments every visit.",
  },
  {
    title: "Care Built Around You:",
    description:
      "Personalized treatment plans created to match your individual needs, lifestyle, and long-term oral health goals.",
  },
  {
    title: "A Clinic Families Trust:",
    description:
      "Known for honest guidance, transparent and fair pricing, and a reputation built on reliability and excellence.",
  },
];

const GdWhyChooseSection = () => (
  <section className="gd_why_choose_section">
    <div className="container">
      <div className="gd_why_choose_grid">
        <div className="gd_why_choose_thumb">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
            alt="Dentist treating a patient at Ghani Dental Clinic"
          />
        </div>
        <div className="gd_why_choose_content">
          <h2 className="gd_why_choose_title">
            Why Families Choose Ghani Dental Clinic in Rawalpindi
          </h2>
          <p className="gd_why_choose_text">
            At Ghani Dental Clinic, we believe everyone deserves gentle,
            stress-free dental care in a warm and welcoming environment. Our
            modern facility and advanced techniques allow us to provide fast,
            comfortable treatments while keeping your safety as our top
            priority. We go beyond fixing problems &mdash; our focus is on
            building lasting oral health so you can enjoy strong teeth and
            healthy gums for years ahead.
          </p>
          <h3 className="gd_why_choose_subtitle">
            What Sets Ghani Dental Clinic Apart
          </h3>
          <ul className="gd_why_choose_list">
            {whyChooseFeatures.map((feature, idx) => (
              <li key={idx} className="gd_why_choose_item">
                <span className="gd_why_choose_icon">
                  <FaCheck aria-hidden="true" />
                </span>
                <div className="gd_why_choose_item_text">
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* -----------------------------------------------------------
 * 2. Our Dental Services
 * ----------------------------------------------------------- */
const dentalServices = [
  {
    title: "General Dentistry",
    description:
      "Dentists specializing in general dentistry provide comprehensive care to patients of all ages, focusing on routine dental exams, cleanings, and treatments.",
    image:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Imperfections such as chipped or malformed teeth can be corrected with veneers, bonding, and other cosmetic operations.",
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    title: "Dental Implants",
    description:
      "Dental implants are artificial tooth roots made of titanium that are surgically placed into the jawbone beneath the gum line.",
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Orthodontics",
    description:
      "Teeth are misaligned, orthodontic treatments such as braces or clear aligners might help you achieve a straighter smile.",
    image: "/assets/img/services/Orthodontics.webp",
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional teeth whitening erases years of stains, making your teeth appear brighter and more youthful.",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Denture",
    description:
      "A denture is a removable replacement for missing teeth and surrounding tissues.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Root Canal",
    description: "Dental procedure used to treat infection at the centre of a tooth.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Teeth Filling",
    description:
      "Decayed tooth tissue is removed and space filled with a filling material.",
    image: "/assets/img/services/dental-crown.webp",
  },
];

const GdServicesSection = () => {
  const featuredServices = dentalServices.filter((s) => s.featured);
  const otherServices = dentalServices.filter((s) => !s.featured);

  return (
    <section className="gd_services_section">
      <div className="container">
        <div className="gd_services_top">
           <h2 className="gd_services_title">OUR DENTAL SERVICES</h2>
            <p className="gd_services_subtitle">
              At Ghani Dental Clinic, we provide complete dental care for the
              whole family. Whether you need a simple checkup, a filling, or a
              more advanced treatment, our team is here to guide you with care
              and comfort.
            </p>
          <div className="gd_services_hero">
            <ImageComparison
              beforeImage="/assets/img/before.jpg"
              afterImage="/assets/img/after.jpg"
              altBefore="Stained teeth before dental treatment"
              altAfter="Whitened teeth after dental treatment"
              className="cs_services_before_after gd_services_compare"
            />
          </div>
          <div className="gd_services_intro">
           
            <div className="gd_services_featured">
              {featuredServices.map((service, idx) => (
                <article
                  key={idx}
                  className="gd_service_card gd_service_card_lg"
                >
                  <div className="gd_service_thumb">
                    <img src={service.image} alt={service.title} />
                    <span className="gd_service_thumb_badge" aria-hidden="true">
                      <FaCheck />
                    </span>
                  </div>
                  <div className="gd_service_body">
                    <h4 className="gd_service_title">{service.title}</h4>
                    <p className="gd_service_text">{service.description}</p>
                    <a
                      href="/service/service-details"
                      className="gd_service_link"
                    >
                      <span>Read More</span>
                      <FaArrowRight aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="gd_services_grid">
          {otherServices.map((service, idx) => (
            <article
              key={idx}
              className="gd_service_card gd_service_card_lg"
            >
              <div className="gd_service_thumb">
                <img src={service.image} alt={service.title} />
                <span className="gd_service_thumb_badge" aria-hidden="true">
                  <FaCheck />
                </span>
              </div>
              <div className="gd_service_body">
                <h4 className="gd_service_title">{service.title}</h4>
                <p className="gd_service_text">{service.description}</p>
                <a
                  href="/service/service-details"
                  className="gd_service_link"
                >
                  <span>Read More</span>
                  <FaArrowRight aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------------------------------------
 * 3. Meet Our Dentists
 * ----------------------------------------------------------- */
const dentistsData = [
  {
    name: "Dr. Abdul Mateen",
    image: "/assets/img/doctors/doctor-1-2.jpg",
    qualifications: [
      "Dental Surgeon",
      "BDS (PAK), RDS (PM&DC)",
      "FCPS II, OMFS PIMS",
      "Ex-Demonstrator at FTH",
      "PMDC: 23359-D",
    ],
  },
  {
    name: "Dr. Faizan Ul Haq",
    image: "/assets/img/doctors/no-image.svg",
    qualifications: ["Dental Surgeon", "BDS, RDS", "PMDC: 24584-D"],
  },
  {
    name: "Dr. Toqir Ahmad",
    image: "/assets/img/doctors/doctor-3.jpg",
    qualifications: ["Dental Surgeon", "BDS, RDS, FCPS", "PMDC: 23065-D"],
  },
  {
    name: "Dr. Nabila Shaikh",
    image: "/assets/img/doctors/no-image.svg",
    qualifications: ["Dental Surgeon", "BDS, RDS", "PMDC: 24584-D"],
  },
  {
    name: "Dr. Waqar Hassan",
    image: "/assets/img/doctors/doctor-5.jpg",
    qualifications: ["Dental Surgeon"],
  },
];

const GdDentistsSection = () => (
  <section className="gd_dentists_section">
    <div className="container">
      <div className="gd_dentists_grid">
        <article className="gd_dentist_card gd_dentist_intro">
          <span className="gd_dentist_eyebrow">OUR DENTIST</span>
          <h2 className="gd_dentist_heading">
            Meet Our
            <br />
            Dentists In
            <br />
            Rawalpindi
          </h2>
          <a href="/appointments" className="gd_dentist_btn">
            Appointment
          </a>
        </article>
        {dentistsData.map((doctor, idx) => (
          <article key={idx} className="gd_dentist_card">
            <div className="gd_dentist_avatar">
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <h3 className="gd_dentist_name">{doctor.name}</h3>
            <ul className="gd_dentist_quals">
              {doctor.qualifications.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
            <a href="/appointments" className="gd_dentist_btn">
              Appointment
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* -----------------------------------------------------------
 * 4. Why Patients Trust + Booking Form
 * ----------------------------------------------------------- */
const trustPoints = [
  "5000+ Happy Patients who keep coming back",
  "10+ Years of dental excellence",
  "Team of 10+ Renowned Dentists covering every dental speciality",
];

const GdTrustBookingSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
                  <option value="general">General Dentistry</option>
                  <option value="cosmetic">Cosmetic Dentistry</option>
                  <option value="implants">Dental Implants</option>
                  <option value="orthodontics">Orthodontics</option>
                  <option value="whitening">Teeth Whitening</option>
                  <option value="root">Root Canal</option>
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
  );
};

/* -----------------------------------------------------------
 * 5. Testimonials (Google Reviews carousel)
 * ----------------------------------------------------------- */
const googleReviewsUrl =
  "https://share.google/24qrfKtPnMDUdTyXu";

const testimonialsData = [
  {
    quote:
      "I got my scaling and polishing done at Ghani Dental Care Center in Chungi #8, Rawalpindi. Dr. Baria Zareef was extremely professional and explained every step. The clinic is very clean and the staff is super friendly. Highly recommended!",
    name: "Sania Sandhu",
    rating: 5,
    timeAgo: "2 weeks ago",
    initial: "S",
  },
  {
    quote:
      "Best dental experience I've ever had in Rawalpindi. I had a painful tooth that needed a root canal. Dr. Kaynaat Zamir handled it with so much care that I didn't feel any discomfort. The whole procedure was smooth and the price was very reasonable.",
    name: "Hamza Iqbal",
    rating: 5,
    timeAgo: "1 month ago",
    initial: "H",
  },
  {
    quote:
      "I took my mother for a dental check-up and filling. The team at Ghani Dental Care was extremely polite and patient with her. The hygiene standards are excellent and the equipment looks modern. We will definitely come back for our family's regular check-ups.",
    name: "Ayesha Khan",
    rating: 5,
    timeAgo: "3 weeks ago",
    initial: "A",
  },
  {
    quote:
      "Got my teeth whitening done here and the results are amazing. The staff at Muslim Town branch is very welcoming and they explained the entire process before starting. 24-hour availability is a huge plus for emergency cases.",
    name: "Usman Tariq",
    rating: 5,
    timeAgo: "1 month ago",
    initial: "U",
  },
  {
    quote:
      "I had braces fitted by Dr. Syed WaliUllah Shah. He is very knowledgeable and answered all my questions about orthodontic treatment. The follow-ups have been hassle-free and the staff always books appointments on time. Truly the best dental clinic in the area.",
    name: "Maryam Bilal",
    rating: 5,
    timeAgo: "2 months ago",
    initial: "M",
  },
  {
    quote:
      "My experience at Ghani Dental Care Center was wonderful. I got crowns done and they look completely natural. The doctor was patient and made sure I was comfortable throughout. The clinic is well-maintained and the prices are very fair compared to other clinics.",
    name: "Ali Raza Sheikh",
    rating: 5,
    timeAgo: "3 months ago",
    initial: "A",
  },
  {
    quote:
      "Excellent dental clinic with very professional staff. Got my dental implants done and the procedure was completely painless. The clinic uses modern equipment and follows proper hygiene protocols. Definitely worth visiting!",
    name: "Fatima Malik",
    rating: 5,
    timeAgo: "1 month ago",
    initial: "F",
  },
  {
    quote:
      "Very satisfied with the treatment. The dentist explained every step and made me feel comfortable. The pricing is reasonable and the clinic is conveniently located in Chungi #8 Rawalpindi. Highly recommend Ghani Dental Care.",
    name: "Ahmed Raza",
    rating: 5,
    timeAgo: "2 weeks ago",
    initial: "A",
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FaStar key={i} />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FaRegStarHalfStroke key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }
  return stars;
};

const calcAverageRating = () => {
  const total = testimonialsData.reduce((sum, t) => sum + t.rating, 0);
  return (total / testimonialsData.length).toFixed(1);
};

const GdTestimonialsSection = () => {
  const totalReviews = testimonialsData.length;
  const averageRating = calcAverageRating();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 767,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="gd_testimonials_section">
      <div className="gd_testimonials_overlay" aria-hidden="true" />
      <div className="container">
        <div className="gd_testimonials_header">
          <h2 className="gd_testimonials_title">
            What Our Patients Are Saying
            <br />
            About Us
          </h2>
          <div className="gd_testimonials_rating_box">
            <div className="gd_testimonials_google_brand">
              <FaGoogle aria-hidden="true" />
              <span>Google Reviews</span>
            </div>
            <div className="gd_testimonials_rating_score">
              <span className="gd_testimonials_score">{averageRating}</span>
              <div className="gd_testimonials_stars_lg">
                {renderStars(Math.round(averageRating))}
              </div>
            </div>
            <p className="gd_testimonials_count">
              Based on <strong>{totalReviews}+</strong> verified reviews
            </p>
            <a
              href={googleReviewsUrl}
              className="gd_testimonials_google_btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google
            </a>
          </div>
        </div>

        <div className="gd_testimonials_carousel">
          <Slider {...sliderSettings}>
            {testimonialsData.map((t, idx) => (
              <div key={idx} className="gd_testimonial_slide">
                <article className="gd_testimonial_card">
                  <div className="gd_testimonial_top">
                    <div className="gd_testimonial_avatar_circle">
                      {t.initial}
                    </div>
                    <div className="gd_testimonial_meta">
                      <p className="gd_testimonial_name">{t.name}</p>
                      <p className="gd_testimonial_time">
                        <FaGoogle aria-hidden="true" />
                        <span>{t.timeAgo}</span>
                      </p>
                    </div>
                  </div>
                  <div className="gd_testimonial_stars">
                    {renderStars(t.rating)}
                  </div>
                  <FaQuoteLeft
                    className="gd_testimonial_quote_icon"
                    aria-hidden="true"
                  />
                  <p className="gd_testimonial_quote">{t.quote}</p>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------------------------------------
 * 6. Visit Our Clinic + Map
 * ----------------------------------------------------------- */
const GdVisitClinicSection = () => (
  <section className="gd_visit_clinic_section">
    <div className="container">
      <div className="gd_visit_grid">
        <div className="gd_visit_map">
          <iframe
            title="Ghani Dental Care Center Rawalpindi location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1725757236704!2d73.0869873807349!3d33.626767071303746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa9aa8b7e8a28fb3%3A0x5ff3a2ff997f9c0a!2sGhani%20Dental%20Care%20Center!5e0!3m2!1sen!2s!4v1777278508608!5m2!1sen!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="gd_visit_content">
          <h2 className="gd_visit_title">
            Visit Our Dental Clinic in Rawalpindi
          </h2>
          <h3 className="gd_visit_subtitle">Proudly Serving Rawalpindi</h3>
          <p className="gd_visit_text">
            We are proud to serve patients from Chungi #8 and all nearby areas
            including Muslim Town, Sadiqabad, Khanna Pull (Khanna), Haji Chowk,
            Khurram Colony, Band Khanna Road, Shakrial, and localities along
            Adyala Road. Our clinic provides modern dental care in a friendly
            and comfortable environment.
          </p>
          <ul className="gd_visit_info">
            <li>
              <span className="gd_visit_info_icon">
                <FaLocationDot aria-hidden="true" />
              </span>
              <span>
                Shop #6, Muslim Town, Band Khanna Rd, Chungi #8, Rawalpindi
              </span>
            </li>
            <li>
              <span className="gd_visit_info_icon">
                <FaEnvelope aria-hidden="true" />
              </span>
              <a href="mailto:info@ghanidental.com">info@ghanidental.com</a>
            </li>
            <li>
              <span className="gd_visit_info_icon">
                <FaPhone aria-hidden="true" />
              </span>
              <a href="tel:03334425828">0333 4425828</a>
            </li>
            <li>
              <span className="gd_visit_info_icon">
                <FaRegClock aria-hidden="true" />
              </span>
              <span>24/7 Dental Clinic in Rawalpindi</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* -----------------------------------------------------------
 * 7. FAQs Accordion
 * ----------------------------------------------------------- */
const faqData = [
  {
    question:
      "Where is Ghani Dental Clinic located in Rawalpindi? Best dental clinic near Chungi #8?",
    answer:
      "Ghani Dental Clinic is conveniently located right at Chungi #8, Rawalpindi. We proudly serve patients from Chungi #8, Muslim Town, Sadiqabad, Khanna Pull (Khanna), Haji Chowk, Khurram Colony, Band Khanna Road, Shakrial, and all nearby areas along Adyala Road. Our modern, well-equipped clinic is easy to reach with ample parking, making it the preferred choice for quality dental care in the area.",
  },
  {
    question: "How much do dental implants cost in Rawalpindi?",
    answer:
      "At Ghani Dental Clinic Rawalpindi, we offer high-quality dental implants at competitive and transparent prices. The exact cost depends on the type of implant and your individual case, but we focus on making advanced implant treatment affordable without compromising on quality or safety. Visit us for a free consultation and get a personalized treatment plan with clear pricing.",
  },
  {
    question: "What is the cost of braces in Rawalpindi?",
    answer:
      "Braces treatment at Ghani Dental Clinic Rawalpindi is affordable and customized to your needs. Prices vary depending on whether you choose metal braces, ceramic braces, or clear aligners. We provide flexible payment plans so you can achieve a confident smile without financial stress. Book a free orthodontic consultation today for exact pricing and a personalized plan.",
  },
  {
    question: "Do you provide emergency dental care in Rawalpindi?",
    answer:
      "Yes! Ghani Dental Clinic offers prompt emergency dental services in Rawalpindi for severe toothache, swelling, broken or knocked-out teeth, and other urgent dental problems. Our experienced team is ready to provide fast, gentle relief. Contact us immediately for same-day emergency appointments.",
  },
  {
    question:
      "Is dental treatment painful? Do you offer painless root canal treatment?",
    answer:
      "At Ghani Dental Clinic, your comfort is our top priority. We use advanced technology, modern anesthesia techniques, and gentle methods to make every procedure — including root canal treatment — as painless and comfortable as possible. Most of our patients are surprised at how relaxed and stress-free their experience is.",
  },
];

const GdFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="gd_faq_section">
      <div className="container">
        <div className="gd_faq_head">
          <h2 className="gd_faq_title">Frequently Asked Questions By Customers</h2>
          <p className="gd_faq_subtitle">
            We&apos;ve answered the most common questions our patients ask
            about dental care.
          </p>
        </div>
        <div className="gd_faq_list">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`gd_faq_item${isOpen ? " gd_faq_item_open" : ""}`}
              >
                <button
                  type="button"
                  className="gd_faq_question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span>{item.question}</span>
                  <FaChevronDown aria-hidden="true" />
                </button>
                <div className="gd_faq_answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------------------------------------
 * 8. Our Blogs
 * ----------------------------------------------------------- */
const blogTags = [
  "All",
  "Orthodontics",
  "Cleaning",
  "Diagnostic",
  "Cosmetic dentistry",
  "Antifrazz Technology",
];

const blogsList = [
  {
    image:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80",
    title:
      "Dental Implants Cost in Rawalpindi 2026: Complete Price Guide & What to Expect",
    date: "2025-02-22",
    excerpt:
      "Discover the actual cost of dental implants in Rawalpindi, latest techniques, success rates, recovery timeline, and how Ghani Dental Clinic makes permanent tooth replacement affordable and stress-free near Chungi #8.",
    tag: "Cosmetic dentistry",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    title:
      "Teeth Whitening in Rawalpindi: Professional Treatment Cost, Results & How Long It Lasts",
    date: "2025-02-26",
    excerpt:
      "Get a brighter, confident smile with safe professional teeth whitening in Rawalpindi. Learn about current prices, treatment options, sensitivity-free methods, and tips to maintain long-lasting results at Ghani Dental Clinic.",
    tag: "Orthodontics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    title:
      "Root Canal Treatment in Rawalpindi: Is It Really Painful? Cost, Procedure & Modern Solutions",
    date: "2025-02-23",
    excerpt:
      "Clear your doubts about root canal pain and cost in Rawalpindi. This guide explains the modern, virtually painless procedure, exact pricing, and why patients trust Ghani Dental Clinic for comfortable and successful root canal treatment.",
    tag: "Diagnostic",
  },
];

const GdBlogsSection = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filteredBlogs =
    activeTag === "All"
      ? blogsList
      : blogsList.filter((b) => b.tag === activeTag);

  return (
    <section className="gd_blogs_section">
      <div className="container">
        <div className="gd_blogs_head">
          <div className="gd_blogs_head_text">
            <h2 className="gd_blogs_title">Our Blogs</h2>
            <p className="gd_blogs_subtitle">
              Find out more on how the best dental clinic in Islamabad, Ghani
              Dental Clinic, provides insights on dental procedures and care.
              Check our blogs for more valuable guidance.
            </p>
          </div>
          <a href="/blog" className="gd_blogs_view_all">
            View All
          </a>
        </div>

        <div className="gd_blogs_tags">
          {blogTags.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`gd_blogs_tag${activeTag === tag ? " gd_blogs_tag_active" : ""}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="gd_blogs_grid">
          {filteredBlogs.map((post, idx) => (
            <article key={idx} className="gd_blog_card">
              <a href="/blog/blog-details" className="gd_blog_thumb">
                <img src={post.image} alt={post.title} />
              </a>
              <div className="gd_blog_body">
                <h3 className="gd_blog_title">
                  <a href="/blog/blog-details">{post.title}</a>
                </h3>
                <p className="gd_blog_meta">
                  Ghani Dental Clinic &bull; {post.date}
                </p>
                <p className="gd_blog_excerpt">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------------------------------------
 * 9. Love Your Visit – Review CTA
 * ----------------------------------------------------------- */
const GdReviewCtaSection = () => (
  <section className="gd_review_cta_section">
    <div className="container">
      <div className="gd_review_card">
        <div className="gd_review_text">
          <h3 className="gd_review_title">Love your visit?</h3>
          <p className="gd_review_desc">
            Share your experience with others by leaving us a Google review. It
            only takes a minute and helps our clinic grow!
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
          <a
            href="/appointments"
            className="gd_review_btn gd_review_btn_blue"
          >
            <FaRegStarHalfStroke aria-hidden="true" />
            <span>Book an Appointment</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* -----------------------------------------------------------
 * Aggregator – renders all clone sections in screenshot order
 * ----------------------------------------------------------- */
const HomeCloneSections = () => (
  <>
    <GdWhyChooseSection />
    <GdServicesSection />
    <GdDentistsSection />
    <GdTrustBookingSection />
    <GdVisitClinicSection />
    <GdTestimonialsSection />
    <GdFaqSection />
    <GdBlogsSection />
    <GdReviewCtaSection />
  </>
);

export default HomeCloneSections;
