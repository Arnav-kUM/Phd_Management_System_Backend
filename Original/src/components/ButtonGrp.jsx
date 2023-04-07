import React from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import axios from 'axios';

function ButtonGrp() {

  const buttons = [
    {
      name: 'Filters',
      href: '#',
      icon: FilterAltIcon,
      handleClick: () => {
        const queryParams = { yourQueryParam: '1' };
        const url = "http://127.0.0.1:8000/parameter";

        axios({
          method: 'post',
          url: url,
          data: queryParams,
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }).then(response => {
          console.log(response.data);
        }).catch(error => {
          console.log(error);
        });
      },
    },
    {
      name: 'Download',
      href: '#',
      icon: ArrowDownwardIcon,
    },
  ];

  return (
    <div className="flex justify-between ml-4 mr-4">
      <div>
        <a
          className="group items-center justify-between gap-4 rounded-full border border-pantone-blue bg-pantone-blue px-5 py-3 transition-colors hover:bg-pantone-cool-gray-9 focus:outline-none focus:ring"
          href="#/add_students"
        >
          <PersonAddAlt1Icon style={{ color: "white" }} />
          <span className="ml-2 font-medium text-white transition-colors">
            Add New Students
          </span>
        </a>
      </div>
      <div>
        {buttons.map((button) => (
          <button className="group mx-2 items-center justify-between gap-4 rounded-full border border-current px-5 py-3 text-pantone-blue transition-colors hover:bg-pantone-blue focus:outline-none focus:ring active:bg-pantone-blue"
            key={button.name} href={button.href} onClick={button.handleClick}>
            <span className="font-medium transition-colors group-hover:text-white">
              <button.icon className="mr-2"/>
              {button.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default ButtonGrp;
