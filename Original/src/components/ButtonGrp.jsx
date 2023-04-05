import React from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const buttons = [
  {
    name: "Filters",
    href: "#",
    icon: FilterAltIcon,
  },
  {
    name: "Download",
    href: "#",
    icon: ArrowDownwardIcon,
  },
];

function ButtonGrp() {
  return (
    <div className="flex justify-between ml-4 mr-4">
      <div>
        <a
          className="group items-center justify-between gap-4 rounded-full border border-pantone-blue bg-pantone-blue px-5 py-3 transition-colors hover:bg-pantone-cool-gray-9 focus:outline-none focus:ring"
          href="#/add_students"
        >
          <PersonAddAlt1Icon style={{ color: "white" }} />
          <span className="ml-2 font-medium text-white transition-colors hidden md:inline-block">
            Add New Students
          </span>
        </a>
      </div>
      <div>
        {buttons.map((btn) => (
          <a
            className="group mx-2 items-center justify-between gap-4 rounded-full border border-current px-5 py-3 text-pantone-blue transition-colors hover:bg-pantone-blue focus:outline-none focus:ring active:bg-pantone-blue"
            key={btn.name}
            href={btn.href}
          >
            <span className="font-medium transition-colors group-hover:text-white">
              <btn.icon />
              <span className="hidden md:inline-block ml-2">{btn.name}</span>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ButtonGrp;
