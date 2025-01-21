import React from "react";
import "../Order-Placement/order.css";
import img1 from "../../assets/images/Order-placement/ORDER-FORM.png";
import img2 from "../../assets/images/Order-placement/ORDER-FORM2.png";
import img3 from "../../assets/images/Order-placement/ORDER-FORM3.png";

const order = () => {
  return (
    <>
      <div className="main-container">
        <div className="side-text">
          <div className="heading">
            <i class="fa-solid fa-box-open"></i>
            <h1>Place Order Now</h1>
          </div>
          <h2>
            We value your convenience by delivering with care.and ensuring fast,
            reliable service every time!
          </h2>

          <p>
            Welcome to our seamless order placement page—designed to provide you
            with a hassle-free and secure shopping experience. Enjoy fast
            deliveries, real-time tracking, and exceptional service tailored to
            your needs!
          </p>

          <div className="info-img">
            <img src={img1} alt="" srcset="" />
            <img src={img2} alt="" srcset="" />
            <img src={img3} alt="" srcset="" />
          </div>

          <p className="order-page-info">
            Wide Product Range | Secure Transactions | Fast Delivery
          </p>
        </div>

        <div className="sub-container">
          <h2>Fill Out This Form</h2>

          <form action="" method="post" className="order-form">
            <label htmlFor="user-name">Name</label>
            <input
              type="text"
              name="user-name"
              id="user-name"
              placeholder="Please Enter Your Name"
            />

            <label htmlFor="pickup-addr">Pickup Address</label>
            <input
              type="text"
              name="pickup"
              id="pickup"
              placeholder="Please Enter Your Pickup Address"
            />

            <label htmlFor="delivery-addr">Delivery Address</label>
            <input
              type="text"
              name="delivery-addr"
              id="delivery-addr"
              placeholder="Please Enter Your Delivery Address"
            />

            <label htmlFor="pack-type">Package Type</label>
            {/* <input type="text" name="pack-type" id="pack-type" /> */}
            <select name="pack-type" id="">
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="x-large">Extra Large</option>
            </select>

            <label htmlFor="preferred-vehicle">Preffered Vehicle</label>
            <select name="" id="">
              <option value="bike">Bike</option>
              <option value="bike">Car</option>
              <option value="bike">Three-Wheeler</option>
              <option value="bike">Van</option>
              <option value="bike">Truck</option>
              <option value="bike">Other</option>
            </select>

            <label htmlFor="cost">Cost</label>
            <input
              type="text"
              name="cost"
              id="cost"
              placeholder="Please Enter Cost of Delivery"
            />

            <input type="submit" value="Submit" className="submit-button" />
          </form>
        </div>
      </div>

      <div className="numbers-container">
        <div className="numbers">
          <div className="block">
            <h1>21+</h1>
            <p>CITIES</p>
          </div>
          <div className="block">
            <h1>1.2L+</h1>
            <p>DELIVERY PARTNERS</p>
          </div>
          <div className="block">
            <h1>5000+</h1>
            <p>ENTERPRISE CLIENTS</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default order;
