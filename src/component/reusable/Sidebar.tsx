import { useState } from "react";
import PropTypes from "prop-types";
import ORMLogo from "../../assets/svg/orm-logo.svg";
import LMCLogo from "../../assets/svg/LMCLogo.svg";
import { DASHBOARD_SIDE_BAR_LINKS } from "../../utils/constant/DashboardLinks";
import RequestAccordion from "./RequestAccordion";


const linkClasses =
  "flex items-center gap-2 text-gray-500 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const SideBar = () => {

  const [isRequestAccordionOpen, setIsRequestAccordionOpen] = useState(false);

  const toggleRequestAccordion = () => {
    setIsRequestAccordionOpen(!isRequestAccordionOpen);
  };

  return (
    <div className="w-48 pt-0 mt-0 h-full items-center flex flex-col border overflow-hidden">
      <div className="flex flex-col justify-between items-center pt-0 px-1 py-3">
        <img className="w-20 pt-5 pb-6" src={ORMLogo} alt="Coopera Logo" />
        <img className="w-16 h-16" src={LMCLogo} alt="LMC Logo" />
      </div>

      <div className="flex-1">
       {DASHBOARD_SIDE_BAR_LINKS.map((item) => (
        <div key={item.key}>
          <SideBarLink item={item} onClick={item.key === "request" ? toggleRequestAccordion : undefined} />
           {item.key === "request" && isRequestAccordionOpen && <RequestAccordion />}
        </div>
       ))}
      </div>

    </div>
  );
};

const SideBarLink = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`${linkClasses} sidebar-link`}
    >
      {item.icon}
      {item.label}
    </div>
  );
};

SideBarLink.propTypes = {
  item: PropTypes.shape({
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
};

export default SideBar;
