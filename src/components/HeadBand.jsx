import React, { useState, useEffect } from "react";

// eslint-disable-next-line import/no-extraneous-dependencies
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import { ReactComponent as CalenderIcon } from "../icons/calendar.svg";

const HeadBand = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  return (
    <div>
      <div className="flex text-xl font-bold px-4 space-x-2 mt-4 ">
        <ClockIcon />
        <p className="text-cyan-500 ">
          {dateState.toLocaleString("fr-FR", {
            hour: "numeric",
            minute: "numeric",
            hour24: true,
          })}
        </p>
        <CalenderIcon />
        <p className="text-cyan-500 ">
          {dateState.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>

      <div className=" mx-8  mt-4 rounded-md overflow-hidden shadow-lg">
        <div className="flex bg-white justify-center space-x-6 px-6  pb-2">
          <span className="  #e5e5e5 rounded-md  py-1 text-5xl ">
            <Link
              to="/meteo"
              className="#e5e5e5 rounded-md  py-1   text-gray-700"
            >
              <Icon icon="noto:sun-behind-cloud" color="#f24e1e" />
            </Link>
          </span>
          <span className="#e5e5e5 rounded-md  py-1 text-5xl  text-gray-700">
            <Link
              to="/ign"
              className="#e5e5e5 rounded-md  py-1   text-gray-700"
            >
              <Icon icon="icon-park-outline:road-sign-both" />
            </Link>
          </span>
          <span className="mr-4 #e5e5e5 justify-center rounded-md  py-1 text-5xl">
            <Link
              to="/secours"
              className="#e5e5e5 rounded-md  py-1   text-gray-700"
            >
              <Icon icon="fa-solid:briefcase-medical" color="#f24e1e" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeadBand;
