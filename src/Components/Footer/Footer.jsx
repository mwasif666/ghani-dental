import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaAngleRight,
} from 'react-icons/fa6';

const data = {
  paymentTitle: 'We Are Now Accepting The Online Payment',
  paymentProviders: [
    {
      name: 'Hand Cash',
      img: 'https://www.svgrepo.com/show/484519/giving-money.svg',
      bg: '#ffffff',
    },
    {
      name: 'Easypaisa',
      img: 'https://www.svgrepo.com/show/484411/letter-e.svg',
      bg: '#85c441',
    },
    {
      name: 'JazzCash',
      img: 'https://www.svgrepo.com/show/484413/letter-j.svg',
      bg: '#ff7a00',
    },
    {
      name: 'Bank Transfer',
      img: 'https://www.svgrepo.com/show/484404/bank.svg',
      bg: '#0267ff',
    },
  ],
  quickLinks: [
    { text: 'Home' },
    { text: 'About Us' },
    { text: 'Our Services' },
    { text: 'Contact Us' },
  ],
  branches: [
    {
      title: 'I-8 Markaz Branch',
      address:
        'Office No 7, Pakland Business Center Behind Allied Bank I-8 Markaz, Islamabad.',
      email: 'info@ghanidentalclinic.com',
      phones: ['+92 324 9134745', '+051 2707333'],
    },
    {
      title: 'F-8 Markaz Branch',
      address:
        'Office No 14, Ground Floor Hashim Plaza Near Medcity Hospital F-8 Markaz, Islamabad.',
      email: 'ghanidentalclinicf8@gmail.com',
      phones: ['+92 306 5393039', '+051 2744915'],
    },
  ],
  socials: [
    { icon: <FaFacebookF />, label: 'Facebook' },
    { icon: <FaInstagram />, label: 'Instagram' },
  ],
  brand: 'Ghani Dental Care Center',
};

const noNav = e => e.preventDefault();

const Footer = () => {
  return (
    <>
      <footer className="cs_footer cs_v2">
        {/* Online Payment banner */}
        {/* <div className="cs_footer_payment_wrap">
          <div className="container">
            <div className="cs_footer_payment">
              <h3 className="cs_footer_payment_title">{data.paymentTitle}</h3>
              <ul className="cs_footer_payment_list">
                {data.paymentProviders.map((p, i) => (
                  <li
                    key={i}
                    className="cs_footer_payment_item"
                    style={{ backgroundColor: p.bg }}
                    title={p.name}
                  >
                    <img src={p.img} alt={p.name} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}

        {/* Main footer */}
        <div className="cs_footer_main">
          <div className="container">
            <div className="cs_footer_grid">
              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">Quick Links</h4>
                <ul className="cs_footer_links cs_mp_0">
                  {data.quickLinks.map((l, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="cs_nav_link_disabled"
                        onClick={noNav}
                      >
                        <i>
                          <FaAngleRight />
                        </i>
                        <span>{l.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {data.branches.map((b, i) => (
                <div className="cs_footer_widget" key={i}>
                  <h4 className="cs_footer_widget_title">{b.title}</h4>
                  <ul className="cs_footer_branch cs_mp_0">
                    <li>
                      <i>
                        <FaLocationDot />
                      </i>
                      <span>{b.address}</span>
                    </li>
                    <li>
                      <i>
                        <FaEnvelope />
                      </i>
                      <a
                        href="#"
                        className="cs_nav_link_disabled"
                        onClick={noNav}
                      >
                        {b.email}
                      </a>
                    </li>
                    {b.phones.map((p, j) => (
                      <li key={j}>
                        <i>
                          <FaPhone />
                        </i>
                        <a
                          href="#"
                          className="cs_nav_link_disabled"
                          onClick={noNav}
                        >
                          {p}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="cs_footer_widget">
                <h4 className="cs_footer_widget_title">Follow Us</h4>
                <div className="cs_footer_socials">
                  {data.socials.map((s, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label={s.label}
                      className="cs_footer_social cs_nav_link_disabled"
                      onClick={noNav}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="cs_footer_bottom_v2">
          <div className="container">
            <p className="cs_footer_copy mb-0">
              &copy;{' '}
              <a
                href="#"
                className="cs_footer_copy_link cs_nav_link_disabled"
                onClick={noNav}
              >
                {data.brand}
              </a>
              . All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
