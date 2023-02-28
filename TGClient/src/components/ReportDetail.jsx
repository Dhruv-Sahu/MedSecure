import React from "react";

const ReportDetail = (props) => {
  // const func = (e) => {
  //   // +e.target.calue
  // };
  const func=()=>{
    let val=document.getElementById(props.number).value
    // let val1=document.getElementById().value
    let item=props.desc
    // let item1=props.medicalTitle
    item.push(val)
    // item1.push(val1)
    props.setDesc(item);
    // props.setMedicalTitle(item1);
    console.log(props.desc)
    // console.log(props.medicalTitle)
  }
  return (
    // document.querySelector('')
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
        <label htmlFor="">Report Title</label>
        <input
          type="text"
          id="hi"
          placeholder="Enter title"
          className="title"
        />
      </div>
      <div className="form__input">
        <label htmlFor="" class="report_desc">
          Report Details
        </label>
        <textarea
          name=""
          id={props.number}
          rows="7"
          placeholder="Enter description"
          className="w-100 description"
        ></textarea>
      </div>
    </>
  );
};

export default ReportDetail;
