import "./PageHeader.css";

const PageHeader = ({ image, title, subtitle, description }) => {
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className="page-header-container"
    >
      <div className="page-header-filter"></div>
      <div className="page-header-body">
        <div className="page-header-title">{title}</div>
        <div className="page-header-subtitle">{subtitle}</div>
        <div className="page-header-description">{description}</div>
      </div>
    </div>
  );
};

export default PageHeader;
