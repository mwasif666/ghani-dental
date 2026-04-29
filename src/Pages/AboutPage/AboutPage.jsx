import PageHeading from '../../Components/PageHeading';
import Section from '../../Components/Section';
import {
  GdFaqSection,
  GdReviewCtaSection,
  GdTestimonialsSection,
  GdTrustBookingSection,
  GdVisitClinicSection,
} from '../../Components/HomeClone/HomeCloneSections';

const headingData = {
  title: 'About Us',
};

const AboutPage = () => {
  return (
    <div className='about-page-area'>
      <Section
        className={'cs_page_heading cs_service_inner_banner cs_bg_filed cs_center'}
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80"
      >
        <PageHeading data={headingData} />
      </Section>

      <section className="gd_about_intro_section">
        <div className="container">
          <div className="gd_about_intro_grid">
            <div>
              <h2 className="gd_about_intro_title">
                Welcome to Ghani Dental Clinic - Your Family Dentist in Rawalpindi
              </h2>
              <p>
                At Ghani Dental Care Centre we combine advanced dental technology with genuine
                compassion and personalized care. Our experienced team delivers gentle, high-quality
                treatments in a comfortable environment, helping every patient achieve lasting oral
                health and a confident smile.
              </p>
              <p>
                We offer complete dental care for every age and every need, from routine checkups
                and cleanings to advanced treatments like implants, root canals, whitening and
                orthodontics.
              </p>
              <a href="https://wa.me/923334425828" target="_blank" rel="noopener noreferrer" className="gd_about_intro_btn">Book Your Dental Consultation</a>
            </div>
            <div className="gd_about_intro_image">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
                alt="Dental treatment in clinic"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="gd_about_mission_section">
        <div className="container">
          <div className="gd_about_mission_grid">
            <article className="gd_about_mission_card">
              <div className="gd_about_mission_icon">⚡</div>
              <h3>Our Mission</h3>
              <p>
                Our mission is to build long-term relationships with our patients by providing
                honest, reliable, and high-quality dental care in a comfortable environment.
              </p>
            </article>
            <article className="gd_about_mission_card">
              <div className="gd_about_mission_icon">◎</div>
              <h3>Our Vision</h3>
              <p>
                Our vision is to become one of the most trusted dental clinics by consistently
                providing high quality dental care and modern treatments.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="gd_about_branch_section">
        <div className="container">
          <h2 className="gd_about_branch_title">Our Dental Clinic Branch in Rawalpindi</h2>
          <p className="gd_about_branch_subtitle">
            Ghani Dental Care Center serves patients from Chungi #8 and nearby areas with
            modern equipment, experienced dentists, and a comfortable environment.
          </p>
          <div className="gd_about_branch_cards">
            <article className="gd_about_branch_card">
              <div className="gd_about_branch_pin">📍</div>
              <h3>Chungi #8 Branch</h3>
              <p>
                Shop #6, Muslim Town, Band Khanna Rd, Chungi #8, Rawalpindi.
                Contact: 0333 4425828 | info@ghanidental.com
              </p>
            </article>
          </div>
        </div>
      </section>

      <GdTrustBookingSection />
      <GdVisitClinicSection />
      <GdTestimonialsSection />
      <GdFaqSection />
      <GdReviewCtaSection />
    </div>
  );
};

export default AboutPage;
