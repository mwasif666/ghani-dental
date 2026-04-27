import { useEffect, useState } from 'react';
import { FaAnglesRight, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ isTopBar, variant }) => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
  const [openMobileSubmenuIndex, setOpenMobileSubmenuIndex] = useState([]);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isSticky, setIsSticky] = useState();
  const openMarqueeItems = Array(10).fill('24/7 Dental Clinic in Rawalpindi');
  const menu = {
    email: 'info@ghanidental.com',
    branchF8: 'Shop #6, Muslim Town, Band Khanna Rd, Chungi #8, Rawalpindi',
    branchI8: '',
    phone: '03334425828',
    phoneLink: '03334425828',
    socialLinks: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
    },
    logoUrl: '/assets/img/logo.png',
    logoLink: '/',
    navItems: [
      { label: 'Home', href: '/' },
      {
        label: 'Services',
        href: '/service',
        subItems: [
          { label: 'Braces & Orthodontics', href: '/service/braces-orthodontics' },
          { label: 'Dental Fillings', href: '/service/dental-fillings' },
          { label: 'Tooth Extraction', href: '/service/tooth-extraction' },
          { label: 'Scaling & Polishing', href: '/service/scaling-polishing' },
          { label: 'Root Canal Treatment', href: '/service/root-canal-treatment' },
          { label: 'Teeth Whitening', href: '/service/teeth-whitening' },
          { label: 'Dental Implants', href: '/service/dental-implants' },
          { label: 'Crowns & Bridges', href: '/service/crowns-bridges' },
        ],
      },
      { label: 'Dental Docters', href: '/doctors' },
      { label: 'Testimonials', href: '/testimonial' },
      { label: 'Blog', href: '/blog' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact' },
    ],
    btnUrl: '/appointments',
    btnText: 'Appointment',
  };

  const handleOpenMobileSubmenu = index => {
    if (openMobileSubmenuIndex.includes(index)) {
      setOpenMobileSubmenuIndex(prev => prev.filter(f => f !== index));
    } else {
      setOpenMobileSubmenuIndex(prev => [...prev, index]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 50) {
        setIsSticky('cs_gescout_sticky cs_gescout_show cs_fixed_sticky');
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <>
      <header
        className={`cs_site_header cs_style_1 ${
          variant ? variant : ''
        } cs_primary_color cs_sticky_header ${isSticky ? isSticky : ''}`}
      >
        {isTopBar && (
          <div className="cs_top_header cs_branch_bar cs_white_color">
            <div className="container">
              <div className="cs_branch_bar_in">
                <div className="cs_branch_item cs_branch_left">
                  <i>
                    <FaLocationDot />
                  </i>
                  <span>{menu.branchF8}</span>
                </div>
                <div className="cs_branch_divider" aria-hidden="true" />
                <div className="cs_branch_item cs_branch_right">
                  <Link
                    to={`tel:${menu.phoneLink}`}
                    className="cs_branch_phone"
                  >
                    <i>
                      <FaPhone />
                    </i>
                    <span>{menu.phone}</span>
                  </Link>
                  <div className="cs_branch_social">
                    <a
                      href={menu.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href={menu.socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href={menu.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="cs_main_header">
          <div className="container">
            <div className="cs_main_header_in">
              <div className="cs_main_header_left">
                <Link className="cs_site_branding" to={menu.logoLink}>
                  <img src={menu.logoUrl} alt="Logo" />
                </Link>
              </div>
              <div className="cs_main_header_right ">
                <div className="cs_nav cs_primary_color ">
                  <ul
                    className={`cs_nav_list ${isShowMobileMenu && 'cs_active'}`}
                  >
                    {menu.navItems.map((item, index) => (
                      <li
                        className={
                          item.subItems ? 'menu-item-has-children' : ''
                        }
                        key={index}
                      >
                        <a
                          href="#"
                          className="cs_nav_link_disabled"
                          onClick={e => {
                            e.preventDefault();
                            if (item.subItems) {
                              handleOpenMobileSubmenu(index);
                            }
                          }}
                        >
                          {item.label}
                        </a>
                        {item.subItems && (
                          <ul
                            style={{
                              display: openMobileSubmenuIndex.includes(index)
                                ? 'block'
                                : 'none',
                            }}
                          >
                            {item.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <a
                                  href="#"
                                  className="cs_nav_link_disabled"
                                  onClick={e => e.preventDefault()}
                                >
                                  {subItem.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                        {item.subItems?.length && (
                          <span
                            className={`cs_menu_dropdown_toggle ${
                              openMobileSubmenuIndex.includes(index)
                                ? 'active'
                                : ''
                            }`}
                            onClick={() => handleOpenMobileSubmenu(index)}
                          >
                            <span></span>
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                  <span
                    className={`cs_menu_toggle ${
                      isShowMobileMenu && 'cs_toggle_active'
                    }`}
                    onClick={() => setIsShowMobileMenu(!isShowMobileMenu)}
                  >
                    <span></span>
                  </span>
                </div>
                <a
                  href="#"
                  className="cs_btn cs_style_1 cs_color_1 cs_nav_link_disabled"
                  onClick={e => e.preventDefault()}
                >
                  <span>{menu.btnText}</span>
                  <i>
                    <FaAnglesRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        {isTopBar && (
          <div className="cs_bottom_header_marquee cs_white_color">
            <div
              className="cs_open_marquee_track"
              aria-label="24/7 Dental Clinic in Rawalpindi"
            >
              {[...openMarqueeItems, ...openMarqueeItems].map((item, index) => (
                <span className="cs_open_marquee_item" key={index}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
        {variant == 'cs_type_1' && (
          <div className="cs_main_header_shape">
            <svg
              width={1679}
              height={112}
              viewBox="0 0 1679 112"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0L1679 0.014C1679 0.014 1639 23.128 1639 48.261V111.014H40V47.351C40 22.567 0 0 0 0Z"
                fill="#ff0101"
              />
              <path
                d="M10 0L1669 0.014C1669 0.014 1629 23.128 1629 48.261V111.014H50V47.351C50 22.567 10 0 10 0Z"
                fill="white"
              />
            </svg>
          </div>
        )}
      </header>
      {isTopBar && <div className="cs_site_header_spacing_150" />}
    </>
  );
};

export default Header;
