import React from "react";
const ReportDetail = (props) => {
  return (
    <>
      <div className="form__input">
        <h1
          style={{
            color: "blue",
            textAlign: "center",
            verticalAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            backgroundColor: "#004cb683",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
          }}
        >
          {props.number + 1}
        </h1>
        <div className="d-flex align-items-center gap-2">
          <div className="form__input w-50">
            <label htmlFor="">Medicine Name</label>
            <input
              type="text"
              id="hi"
              placeholder="Enter Medicine Name"
              className="titlex"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetail;
