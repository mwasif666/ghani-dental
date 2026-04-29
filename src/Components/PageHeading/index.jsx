import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const PageHeading = ({ data }) => {
  const { pathname } = useLocation();
  const urlSegments = useMemo(() => {
    const pathSegments = pathname
      .split("/")
      .filter((segment) => segment !== "");
    return pathSegments;
  }, [pathname]);

  const prettyText = segment =>
    segment
      .split("-")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  return (
    <div className="container">
      <h1 className="cs_page_title">{data?.title}</h1>
      <ol className="breadcrumb text-capitalize">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        {urlSegments.map((segment, index) => (
          <li key={index} className="breadcrumb-item">
            {index < urlSegments.length - 1 ? (
              <Link to={`/${urlSegments.slice(0, index + 1).join("/")}`}>
                {prettyText(segment)}
              </Link>
            ) : (
              <span className="active">{prettyText(segment)}</span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default PageHeading;
