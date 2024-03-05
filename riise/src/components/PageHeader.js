import "./PageHeader.css";

const PageHeader = ({ image, title, subtitle, description }) => {
  return (
    <div className="page-header-container">
      <div className="page-header-body">
        <div
          style={{ backgroundImage: `url('${image}')` }}
          className="page-header-img-container"
        >
          <div className="page-header-img-overlay"></div>
        </div>
        <div
          className="page-header-title"
          // style={title.length >= 15 ? { fontSize: "4rem" } : null}
        >
          {title}
        </div>
        <div className="page-header-subtitle">{subtitle}</div>
        <div className="page-header-description">{description}</div>
      </div>
      <div className="page-header-trans">
        <div className="page-header-theme-text">THEME</div>
        <div className="page-header-build-text">BUILD FOR INDIA</div>
      </div>
    </div>
  );
};

export default PageHeader;
