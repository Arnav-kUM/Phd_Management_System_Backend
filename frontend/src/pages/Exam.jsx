import React from "react";
import Header from "../components/Header";
import InputAllocation from "../components/InputAllocation";

function Exam() {
  return (
    <div>
      <div className="Exam_Invigilation_Allotment flex flex-col h-screen">
        <Header />
        <InputAllocation />
        <div className="mt-4"></div>
      </div>
    </div>
  );
}

export default Exam;
