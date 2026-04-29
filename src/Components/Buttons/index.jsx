import { Link } from 'react-router-dom';

const WHATSAPP_URL = 'https://wa.me/923334425828';

const Button = ({ btnUrl = '#', btnText, variant, btnIcons }) => {
  const href = btnUrl === '/appointments' ? WHATSAPP_URL : btnUrl;
  const isInternalRoute = href.startsWith('/') && !href.startsWith('//');
  const isNewTabLink =
    href.includes('wa.me') || href.startsWith('http://') || href.startsWith('https://');

  if (isInternalRoute) {
    return (
      <Link to={href} className={`${variant || ''}`}>
        <span>{btnText}</span>
        {btnIcons && <i>{btnIcons}</i>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={`${variant || ''}`}
      target={isNewTabLink ? '_blank' : undefined}
      rel={isNewTabLink ? 'noopener noreferrer' : undefined}
    >
      <span>{btnText}</span>
      {btnIcons && <i>{btnIcons}</i>}
    </a>
  );
};

export default Button;
