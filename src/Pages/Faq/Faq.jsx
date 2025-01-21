import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // Add these imports for icons
import "./Faq.css";
import data from "./Data.js";

const Faq = () => {
  const [selected, setSelected] = useState(null);

  function handleClick(getcurrentID) {
    setSelected(prevSelected => (prevSelected === getcurrentID ? null : getcurrentID));
  }

  return (
    <div className="main">
      <div className="accordian">
        <h1 id="h1" className="heading">
          Frequently asked questions
        </h1>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div onClick={() => handleClick(dataItem.id)} className="title">
                <h1>{dataItem.question}</h1>
                <span>
                  {selected === dataItem.id ? (
                    <i className="fas fa-chevron-up"></i>
                  ) : (
                    <i className="fas fa-chevron-down"></i>
                  )}
                </span>
              </div>
              <div
                className={`Content ${selected === dataItem.id ? "open" : ""}`}
              >
                {dataItem.answer}
              </div>
            </div>
          ))
        ) : (
          <h1>No Data Found</h1>
        )}
      </div>

      <div className="helpline">
        <h1 id="h1">Helpline and Support</h1>
        <div className="contact">
          <div className="contact-item">
            <div className="icon">
              <FaPhoneAlt />
            </div>
            <h2>Contact Number</h2>
            <p>+91 999999999</p>
          </div>
          <div className="contact-item">
            <div className="icon">
              <FaEnvelope />
            </div>
            <h2>Email</h2>
            <p>pickupandpay@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
