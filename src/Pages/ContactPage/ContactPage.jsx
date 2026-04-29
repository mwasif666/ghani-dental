import PageHeading from '../../Components/PageHeading';
import ContactSection from '../../Components/ContactSection';
import Section from '../../Components/Section';
import LocationMap from '../../Components/LocationMap/Index';

const headingData = {
  backgroundImage: '/assets/img/page_heading_bg.jpg',
  title: 'Contact Us',
};

const contactData = {
  sectionSubtitle: 'CONTACT US',
  SectionTitle: 'Book Your Dental Consultation',
  teethShapeImg: 'assets/img/icons/hero_shape_3.png',
  contactImg: 'assets/img/contact_2.png',
  iconBox: {
    style: 'cs_style_4',
    icon: 'assets/img/icons/call_icon_1.png',
    title: 'Emergency Call',
    subtitle: '24/7 – Support and easy',
  },
  contactDetails: {
    title: 'Get In Touch With Ghani Dental Clinic',
    description:
      'Our team is available to help you with appointments, treatment queries, and emergency dental concerns.',
    address: 'Shop #6, Muslim Town, Band Khanna Rd, Chungi #8, Rawalpindi',
    email: 'info@ghanidental.com',
    phone: '0333 4425828',
    phoneLink: '03334425828',
    hours: '24/7 Dental Clinic in Rawalpindi',
    image:
      'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  },
};

const mapData = {
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.1725757236704!2d73.0869873807349!3d33.626767071303746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa9aa8b7e8a28fb3%3A0x5ff3a2ff997f9c0a!2sGhani%20Dental%20Care%20Center!5e0!3m2!1sen!2s!4v1777278508608!5m2!1sen!2s',
};
const ContactPage = () => {
  return (
    <div className="gd_contact_page">
      <Section
        className={'cs_page_heading cs_service_inner_banner cs_bg_filed cs_center'}
        backgroundImage="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1920&q=80"
      >
        <PageHeading data={headingData} />
      </Section>

      <Section
        topSpaceLg="70"
        topSpaceMd="110"
        bottomSpaceLg="80"
        bottomSpaceMd="120"
      >
        <ContactSection reverseOrder={true} data={contactData} />
      </Section>

      <Section bottomSpaceLg="0" bottomSpaceMd="0">
        <LocationMap mapSrc={mapData.mapSrc} />
      </Section>
    </div>
  );
};

export default ContactPage;
