import React from "react";
import Loading from "./Loading.gif";

export default function Spinner() {
  return (
    <div className="text-center my-4">
      <img src={Loading} alt="loading" />
    </div>
  );
}
