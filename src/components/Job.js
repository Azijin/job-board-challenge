import React from "react";

const Job = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <div>
        <span>{props.contractType} - </span>
        <span>{props.country}</span>
        <span> - {props.city}</span>
      </div>
    </div>
  );
};

export default Job;
