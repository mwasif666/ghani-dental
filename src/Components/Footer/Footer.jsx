import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaAngleRight,
  FaPaperPlane,
  FaClock,
  FaIdCard,
} from 'react-icons/fa6';

const SOCIAL_REDIRECT_URL = 'https://www.facebook.com/share/1CGB43veC9/';
const SHOW_LEGAL_LINKS = false;

const data = {
  brand: 'Ghani Dental Care Center',
  description:
    'Best Dental Clinic in Rawalpindi. We provide complete dental and cosmetic services including Scaling & Polishing, Root Canal Treatment, Teeth Whitening, Dental Implants, Braces, Crowns & Bridges with modern technology and gentle care.',
  logoUrl: '/assets/img/logo.png',
  newsletterImg:
    'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=600&q=80',
  socials: {
    facebook: SOCIAL_REDIRECT_URL,
    twitter: SOCIAL_REDIRECT_URL,
    linkedin: SOCIAL_REDIRECT_URL,
    email: SOCIAL_REDIRECT_URL,
  },
  contact: {
    address: 'Shop #6, Muslim Town, Band Khanna Rd, Chungi #8, Rawalpindi.',
    phone: '0333 4425828',
    phoneLink: '03334425828',
    hours: '24/7 Dental Clinic in Rawalpindi',
    license: 'PHC/R-67643',
  },
  quickLinks: [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Services', href: '/service' },
    { text: 'Our Team', href: '/doctors' },
    { text: 'Contact Us', href: '/contact' },
  ],
  services: [
    { text: 'Scaling & Polishing', href: '/service/scaling-polishing' },
    { text: 'Tooth Extraction', href: '/service/tooth-extraction' },
    { text: 'Root Canal Treatment', href: '/service/root-canal-treatment' },
    { text: 'Crowns & Bridges', href: '/service/crowns-bridges' },
    { text: 'Teeth Whitening', href: '/service/teeth-whitening' },
    { text: 'Dental Implants', href: '/service/dental-implants' },
    { text: 'Dental Fillings', href: '/service/dental-fillings' },
    { text: 'Braces & Orthodontics', href: '/service/braces-orthodontics' },
  ],
};

const Footer = () => {
  const handleSubscribe = e => {
    e.preventDefault();
  };

  return (
    <footer className="gd_footer">
      {/* Newsletter Card */}
      <div className="gd_footer_newsletter_wrap">
        <div className="container">
          <div className="gd_footer_newsletter">
            <div className="gd_footer_newsletter_image">
              <img src={data.newsletterImg} alt="Subscribe to our newsletter" />
            </div>
            <div className="gd_footer_newsletter_content">
              <h3 className="gd_footer_newsletter_title">
                Subscribe To Our Newsletter
              </h3>
              <p className="gd_footer_newsletter_text">
                Get the latest dental tips, special offers, oral health advice,
                and exclusive updates from Ghani Dental Care Centre directly in
                your inbox.
              </p>
              <form
                className="gd_footer_newsletter_form"
                onSubmit={handleSubscribe}
              >
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required
                />
                <button type="submit">
                  <span>Subscribe</span>
                  <FaPaperPlane aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="gd_footer_main">
        <div className="container">
          <div className="gd_footer_grid">
            {/* Brand Column */}
            <div className="gd_footer_brand_col">
              <Link to="/" className="gd_footer_logo">
                <img src={data.logoUrl} alt={data.brand} />
              </Link>
              <p className="gd_footer_brand_text">
                <strong>{data.brand}</strong> – {data.description}
              </p>
              <div className="gd_footer_socials">
                <a
                  href={data.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={data.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={data.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href={data.socials.email}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="gd_footer_col">
              <h4 className="gd_footer_widget_title">Quick Links</h4>
              <ul className="gd_footer_links">
                {data.quickLinks.map((l, i) => (
                  <li key={i}>
                    <Link to={l.href}>
                      <FaAngleRight aria-hidden="true" />
                      <span>{l.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="gd_footer_col">
              <h4 className="gd_footer_widget_title">Our Services</h4>
              <ul className="gd_footer_links">
                {data.services.map((s, i) => (
                  <li key={i}>
                    <Link to={s.href}>
                      <FaAngleRight aria-hidden="true" />
                      <span>{s.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="gd_footer_col">
              <h4 className="gd_footer_widget_title">Contact Info</h4>
              <ul className="gd_footer_contact_list">
                <li>
                  <FaLocationDot aria-hidden="true" />
                  <span>{data.contact.address}</span>
                </li>
                <li>
                  <FaPhone aria-hidden="true" />
                  <a href={`tel:${data.contact.phoneLink}`}>
                    {data.contact.phone}
                  </a>
                </li>
                <li>
                  <FaClock aria-hidden="true" />
                  <span>{data.contact.hours}</span>
                </li>
                <li>
                  <FaIdCard aria-hidden="true" />
                  <span>{data.contact.license}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="gd_footer_bottom">
        <div className="container">
          <div className="gd_footer_bottom_inner">
            <p className="gd_footer_copy">
              Copyright &copy; 2026 {data.brand}. All Rights Reserved.
              <br />
              <span className="gd_footer_dev">
                Developed by{' '}
                <a
                  href="https://innovationpixel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  InnovationPixel
                </a>
              </span>
            </p>
            {SHOW_LEGAL_LINKS && (
              <div className="gd_footer_legal">
                <Link to="/terms">Terms &amp; Conditions</Link>
                <span className="gd_footer_sep">|</span>
                <Link to="/privacy">Privacy Policy</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
