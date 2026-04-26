import { useState } from "react";
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
} from "react-icons/fa6";
import { ImageComparison } from "../ui/image-comparison-slider";

/* -----------------------------------------------------------
 * 1. Why Choose Oradent Dental Clinic
 * ----------------------------------------------------------- */
const whyChooseFeatures = [
  {
    title: "Friendly and Skilled Team:",
    description: "Dentists who listen, explain, and treat with care.",
  },
  {
    title: "Modern Equipment:",
    description: "Safe, precise, and comfortable treatments every time.",
  },
  {
    title: "Personalized Care:",
    description: "Treatment plans that fit your needs and lifestyle.",
  },
  {
    title: "Trusted by Families:",
    description: "Honest advice, fair pricing, and a reputation you can rely on.",
  },
];

const GdWhyChooseSection = () => (
  <section className="gd_why_choose_section">
    <div className="container">
      <div className="gd_why_choose_grid">
        <div className="gd_why_choose_thumb">
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=80"
            alt="Dentist treating a patient at Oradent Dental Clinic"
          />
        </div>
        <div className="gd_why_choose_content">
          <h2 className="gd_why_choose_title">
            Why Choose Oradent Dental Clinic in Islamabad?
          </h2>
          <p className="gd_why_choose_text">
            At Oradent, we focus on giving you care that is safe, gentle, and
            easy to understand. With modern tools and methods, our treatments
            are quick and comfortable. Our team looks after your long-term oral
            health, helping you keep strong teeth and healthy gums. Families
            trust us for honest advice, fair pricing, and friendly care &mdash;
            making every visit stress-free and welcoming.
          </p>
          <h3 className="gd_why_choose_subtitle">What Makes Oradent Special</h3>
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
              At Oradent Dental Clinic, we provide complete dental care for the
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
    name: "Dr. Kaynaat Zamir",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "Dental Surgeon",
      "BDS RDS",
      "FCPS (Operative & Endodontics)",
      "Certified Cosmetic Dentist",
    ],
  },
  {
    name: "Dr. Baria Zareef",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "Dental Surgeon",
      "BDS RDS",
      "MDS (PGR)",
      "Operative Dentistry & Endodontics",
    ],
  },
  {
    name: "Dr. Syed WaliUllah Shah",
    image:
      "https://images.unsplash.com/photo-1612531386530-97286d97c2d2?auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "Dental Surgeon",
      "BDS, RDS",
      "FCPS Endodontist",
      "Cosmetic Dentist",
    ],
  },
  {
    name: "Dr. Sohaib Mansoor",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "BDS RDS",
      "Oral & Maxillofacial Surgeon",
      "PGT AFID",
      "Senior Registrar PAF Hospital",
    ],
  },
  {
    name: "Dr. Maryam Hafeez",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
    qualifications: [
      "BDS RDS",
      "Orthodontist",
      "FCPS PGT Ortho",
      "Certified Implantologist",
    ],
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
            Islamabad
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
  "2 Branches in Islamabad",
  "20000+ Happy Patients",
  "15+ Years of Excellence in Dental Services",
  "Team of 8+ Renowned Dentists with all dental specialties",
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
              Why Patients Trust Our Dental Clinic
            </h2>
            <p className="gd_trust_text">
              Patient comfort is our priority, and we utilize advanced
              technology for accurate diagnosis and precise treatments,
              guaranteeing the highest standard of care.
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
 * 5. Testimonials
 * ----------------------------------------------------------- */
const testimonialsData = [
  {
    quote:
      "I got my scaling and polishing done at Ghani Dental Care Center in Chungi #8, Rawalpindi. Dr. Baria Zareef was extremely professional and explained every step. The clinic is very clean and the staff is super friendly. Highly recommended!",
    name: "Sania Sandhu",
  },
  {
    quote:
      "Best dental experience I've ever had in Rawalpindi. I had a painful tooth that needed a root canal. Dr. Kaynaat Zamir handled it with so much care that I didn't feel any discomfort. The whole procedure was smooth and the price was very reasonable.",
    name: "Hamza Iqbal",
  },
  {
    quote:
      "I took my mother for a dental check-up and filling. The team at Ghani Dental Care was extremely polite and patient with her. The hygiene standards are excellent and the equipment looks modern. We will definitely come back for our family's regular check-ups.",
    name: "Ayesha Khan",
  },
  {
    quote:
      "Got my teeth whitening done here and the results are amazing. The staff at Muslim Town branch is very welcoming and they explained the entire process before starting. 24-hour availability is a huge plus for emergency cases.",
    name: "Usman Tariq",
  },
  {
    quote:
      "I had braces fitted by Dr. Syed WaliUllah Shah. He is very knowledgeable and answered all my questions about orthodontic treatment. The follow-ups have been hassle-free and the staff always books appointments on time. Truly the best dental clinic in the area.",
    name: "Maryam Bilal",
  },
  {
    quote:
      "My experience at Ghani Dental Care Center was wonderful. I got crowns done and they look completely natural. The doctor was patient and made sure I was comfortable throughout. The clinic is well-maintained and the prices are very fair compared to other clinics.",
    name: "Ali Raza Sheikh",
  },
];

const GdTestimonialsSection = () => (
  <section className="gd_testimonials_section">
    <div className="gd_testimonials_overlay" aria-hidden="true" />
    <div className="container">
      <h2 className="gd_testimonials_title">
        What Our Patients Are Saying
        <br />
        About Us
      </h2>
      <div className="gd_testimonials_grid">
        {testimonialsData.map((t, idx) => (
          <article key={idx} className="gd_testimonial_card">
            <div className="gd_testimonial_avatar">
              <FaUser aria-hidden="true" />
            </div>
            <p className="gd_testimonial_quote">&ldquo;{t.quote}&rdquo;</p>
            <p className="gd_testimonial_name">{t.name}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* -----------------------------------------------------------
 * 6. Visit Our Clinic + Map
 * ----------------------------------------------------------- */
const GdVisitClinicSection = () => (
  <section className="gd_visit_clinic_section">
    <div className="container">
      <div className="gd_visit_grid">
        <div className="gd_visit_map">
          <iframe
            title="OraDent Dental Clinic Islamabad F-8 location"
            src="https://www.google.com/maps?hl=en&q=Office%20No%2014%2C%20Hashim%20Plaza%2C%20F-8%20Markaz%2C%20Islamabad&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="gd_visit_content">
          <h2 className="gd_visit_title">
            Visit Our Dental Clinic in F-8 Islamabad
          </h2>
          <p className="gd_visit_text">
            We are proud to serve patients from F-8, F-7, F-6, G-8, G-9 and
            nearby areas in Islamabad. Our clinic provides modern dental care in
            a friendly and comfortable environment.
          </p>
          <h3 className="gd_visit_subtitle">Islamabad (F-8)</h3>
          <ul className="gd_visit_info">
            <li>
              <span className="gd_visit_info_icon">
                <FaLocationDot aria-hidden="true" />
              </span>
              <span>
                Office No. 14, Ground Floor, Hashim Palaza, Near MidCity
                Hospital, F-8 Markaz, Islamabad
              </span>
            </li>
            <li>
              <span className="gd_visit_info_icon">
                <FaEnvelope aria-hidden="true" />
              </span>
              <a href="mailto:oradentdentalclinicf8@gmail.com">
                oradentdentalclinicf8@gmail.com
              </a>
            </li>
            <li>
              <span className="gd_visit_info_icon">
                <FaPhone aria-hidden="true" />
              </span>
              <a href="tel:+923065393039">+923065393039</a>
            </li>
            <li>
              <span className="gd_visit_info_icon">
                <FaRegClock aria-hidden="true" />
              </span>
              <span>
                Mon-Thu &amp; Sat: 11:30 AM &ndash; 11:30 PM | Fri &amp; Sun:
                04:00 PM &ndash; 11:30 PM
              </span>
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
    question: "How to pick the right dental clinic in Islamabad?",
    answer:
      "Look for a clinic with qualified dentists, modern equipment, transparent pricing, and good patient reviews. At Oradent Dental Clinic, we offer experienced specialists, state-of-the-art technology, and a comfortable environment to make sure every visit feels stress-free.",
  },
  {
    question: "How much does it cost to clean teeth in Islamabad?",
    answer:
      "Teeth cleaning (scaling and polishing) at Oradent Dental Clinic typically ranges from PKR 3,000 to PKR 6,000 depending on the buildup level and your individual requirements. We always provide a clear quote before starting any treatment.",
  },
  {
    question: "Who is the best dentist in Islamabad?",
    answer:
      "The best dentist for you depends on your specific needs. Our team at Oradent Dental Clinic includes qualified specialists in general dentistry, cosmetic dentistry, orthodontics, endodontics, and oral surgery so you can be matched with the right expert.",
  },
  {
    question: "Who is the best female dentist in Islamabad?",
    answer:
      "Dr. Kaynaat Zamir, Dr. Baria Zareef, and Dr. Maryam Hafeez are highly qualified female dentists at Oradent Dental Clinic with FCPS, MDS, and certified specialty training, providing patient-focused dental care in Islamabad.",
  },
  {
    question: "Where can I get dental implants in Islamabad?",
    answer:
      "You can get safe and reliable dental implants at Oradent Dental Clinic, F-8 Markaz Islamabad. Our implant specialists use modern titanium implant systems for permanent, natural-looking, and long-lasting results.",
  },
];

const GdFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="gd_faq_section">
      <div className="container">
        <div className="gd_faq_head">
          <h2 className="gd_faq_title">Frequently Asked Questions</h2>
          <p className="gd_faq_subtitle">Quick answers to common queries</p>
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
      "Biocompatible and Eco-Friendly Materials: The Future of Cosmetic Dentistry",
    date: "2025-02-22",
    excerpt:
      "Cosmetic dentistry is evolving. Beyond aesthetics, people now want safe, durable, and",
    tag: "Cosmetic dentistry",
  },
  {
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    title:
      "Braces, Aligners, and Beyond: The Evolution of Orthodontic Treatments",
    date: "2025-02-26",
    excerpt:
      "Orthodontics has progressed from traditional metal braces to modern, nearly invisible solutions.",
    tag: "Orthodontics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    title:
      "Next-Gen Dental Implants: Innovations, Costs, and What to Expect",
    date: "2025-02-23",
    excerpt:
      "Dental implants have revolutionized oral healthcare, offering a permanent solution for",
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
              Find out more on how the best dental clinic in Islamabad, Oradent
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
                  Oradent Dental Clinic &bull; {post.date}
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
