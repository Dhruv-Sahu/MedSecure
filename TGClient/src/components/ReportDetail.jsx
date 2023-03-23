import React from "react";
import MedicalDetail from "./MedicineDetail";
import TestDetail from "./TestDetail";
import { useState } from "react";
const ReportDetail = (props) => {
  const creater = (e) => {
    e.preventDefault();
    let temp = props.medicine;
    let temp1 = props.doublemedicine;
    let form1 = [];
    for (let i = 0; i < numberofmedicalIssue; i++) {
      form1.push(i);
      temp.push(1);
    }
    temp1.push(form1);
    props.setDoubleMedicine(temp1);
    props.setMedicine(temp);
    setarrayform(form1);
  };
  const creater2 = (e) => {
    e.preventDefault();
    let temp1 = props.test;
    let temp2 = props.doubleTest;
    let form2 = [];
    for (let i = 0; i < numberOfTest; i++) {
      form2.push(i);
      temp1.push(1);
    }
    temp2.push(form2);
    props.setDoubleTest(temp2);
    props.setTest(temp1);
    setarrayform2(form2);
  };
  const [arrayform, setarrayform] = useState(false);
  const [arrayform2, setarrayform2] = useState(false);
  const [numberofmedicalIssue, setnumberofmedicalIssue] = useState(0);
  const [numberOfTest, setNumberOfTest] = useState(0);
  return (
    <>
      <div className="form__input">
        <hr />
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
        <div className="form__input w-50">
          <label htmlFor="">Report Title</label>
          <input
            type="text"
            id="hi"
            placeholder="Enter title"
            className="title"
            required
          />
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="form__input">
            <label htmlFor="">Test Required</label>
            <input
              type="text"
              required
              id="hi2"
              placeholder="Enter The number of Test"
              className="title2"
              onChange={(e) => {
                setNumberOfTest(e.target.value);
              }}
            />
          </div>
          <div className="styler">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              style={{ marginBottom: "-15px" }}
              onClick={creater2}
            >
              Add +
            </button>
          </div>
        </div>

        {arrayform2 &&
          arrayform2.map((e) => {
            return <TestDetail number={e} />;
          })}

        <div className="form__input w-50">
          <label htmlFor="">Issue Started On</label>
          <input
            type="date"
            id="hi"
            required
            placeholder="Enter title"
            className="title3"
          />
        </div>
        <div className="d-flex align-items-center gap-2">
          <div className="form__input">
            <label htmlFor="">Number of Medicine</label>
            <input
              type="number"
              id="hi"
              required
              placeholder="Enter The number of Medicines prescribed"
              className="title4"
              onChange={(e) => {
                setnumberofmedicalIssue(e.target.value);
              }}
            />
          </div>
          <div className="styler">
            <button
              type="button"
              className="btn btn-primary btn-block"
              style={{ marginBottom: "-15px" }}
              onClick={creater}
            >
              Add +
            </button>
          </div>
        </div>
        {arrayform &&
          arrayform.map((e) => {
            return <MedicalDetail number={e} />;
          })}
      </div>
      <div className="form__input">
        <label htmlFor="" class="report_desc">
          Report Details
        </label>
        <textarea
          name=""
          id={props.number}
          rows="7"
          required
          placeholder="Enter description"
          className="w-100 description"
        ></textarea>
      </div>
    </>
  );
};

export default ReportDetail;
