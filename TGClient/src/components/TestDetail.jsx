import React from "react";

const ReportDetail = (props) => {
  return (
    <>
      <div className="form__input">
        {/* <h1
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
        </h1> */}
        <div className="d-flex align-items-center gap-2">
          <div
            className=" w-50"
            style={{
              paddingLeft: "50px",
            }}
          >
            {/* <label htmlFor="" style={{
              // color:"red"
            }} >Test Name</label> */}
            <input
              required
              type="text"
              id="hi"
              placeholder={`${props.number + 1}. Test Required `}
              className="titley"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportDetail;
