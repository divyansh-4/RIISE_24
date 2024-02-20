import "./PageHeader.css";

const PageHeader = ({ image, title, subtitle, description }) => {
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className="header-container"
    >
      <div className="header-filter"></div>
      <div className="header-body">
        <div className="header-title">{title}</div>
        <div className="header-subtitle">{subtitle}</div>
        <div className="header-description">{description}</div>
      </div>
    </div>
  );
};

export default PageHeader;
