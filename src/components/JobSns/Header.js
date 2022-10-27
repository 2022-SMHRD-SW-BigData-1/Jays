import "../../styles/Jobsns/Header.scss";
import searchIcon from "../../images/searchIcon.png";
import logo from "../../images/jobsnsLogo.png";
<<<<<<< HEAD
import report from "../../images/report.png";
import special from "../../images/special.png";
=======
>>>>>>> 90130fd749824a463945bf1eee6e52e44330901e

function Header() {
  return (
    <div className="navigation">
      <div className="container">
        <div className="container_Logo">
          <img className="logo" src={logo} alt="Jobsns logo" />
        </div>
<<<<<<< HEAD
        <div className="container_Special">
          <img className="Icon" src={special} alt="special Tab" />
          <img className="Icon" src={report} alt="graph" />
        </div>
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
          <span className="searchText">검색</span>
=======
        <div className="search">
          <img className="searchIcon" src={searchIcon} alt="search icon" />
>>>>>>> 90130fd749824a463945bf1eee6e52e44330901e
        </div>
      </div>
    </div>
  );
}

export default Header;
