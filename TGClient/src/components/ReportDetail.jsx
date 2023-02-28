import React from "react";

const ReportDetail = (props) => {
  return (
    <>
      <div className="form__input">
        <hr />
        <h1 
        style={{
          color: "blue",
          textAlign:"center",
          verticalAlign:"center",
          fontSize: "24px",
          fontWeight:"bold",
          backgroundColor:"#004cb683",
          borderRadius: "50%",
          width: "32px",
          height:"32px"
        }}
        >{props.number + 1}</h1>
        <label htmlFor="">Report Title</label>
        <input
          type="text"
          placeholder="Enter title"
          onChange={(e) => {
            props.setMedicalTitle(e.target.value);
          }}
        />
      </div>
      <div className="form__input">
        <label htmlFor="">Report Details</label>
        <textarea
          name=""
          id=""
          rows="7"
          placeholder="Enter description"
          className="w-100"
          onChange={(e) => {
            props.setDesc(e.target.value);
          }}
        ></textarea>
      </div>
    </>
  );
};

export default ReportDetail;
