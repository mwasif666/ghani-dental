const Button = ({ btnUrl = '#', btnText, variant, btnIcons }) => {
  const handleClick = e => {
    e.preventDefault();
  };

  return (
    <a
      href="#"
      data-href={btnUrl}
      className={`${variant || ''} cs_nav_link_disabled`}
      onClick={handleClick}
    >
      <span>{btnText}</span>
      {btnIcons && <i>{btnIcons}</i>}
    </a>
  );
};

export default Button;
