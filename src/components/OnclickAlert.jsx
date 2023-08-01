"use client";

import React from "react";

function OnclickAlert() {
  return (
    <button
      className="btn btn-warning btn-outline transition duration-500"
      onClick={() => alert("!!!!!!!!")}
    >
      onclick alert
    </button>
  );
}

export default OnclickAlert;
