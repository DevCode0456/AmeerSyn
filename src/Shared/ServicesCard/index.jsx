import "./style.css";
import React, { memo } from "react";
import { MdContactPhone } from "react-icons/md";

const CustomCard = ({ icon, title, description }) => {
  return (
    <div class="custom-card-container rounded-3xl py-5 p-3 md:p-5 bg-primary text-center">
      <div class="side-ribbon shadow-3xl bg-primary"></div>
      <div class="custom-card bg-white rounded-3xl shadow-sm px-0">
        <div class="card-body p-3">
          <div class="icon-container">
            <div class="icon">{icon}</div>
          </div>
          <h5 class="reason-title text-gray-800 font-medium mb-2">{title}</h5>
          <p class="reason-description text-gray-600 text-sm">{description}</p>
        </div>
        <div class="circle-btn text-center mx-2 flex items-center justify-center bg-primary rounded-full shadow-md text-white">
          <MdContactPhone class="w-8 h-8 " />
        </div>
      </div>
    </div>
  );
};

export default memo(CustomCard);
