import React from "react";
import "./TrackPage.css"; // Import the updated CSS file

const TrackPage = () => {
  return (
    <div className="track-page">
      <div className="container">
        {/* Tracking Information Section */}
        <div className="tracking-info">
          <h1>Track Your Parcel</h1>
          <p>Enter your tracking ID to see the status of your most recent order.</p>

          {/* Tracking ID Input */}
          <div className="input-container">
            <input
              type="text"
              placeholder="Enter Tracking ID"
              className="tracking-input"
            />
            <button className="track-button">Track</button>
          </div>
        </div>

        {/* Order Details Section */}
        <div className="order-details">
          <h2>Recent Order Details</h2>
          <div className="order-info">
            <p><strong>Order ID:</strong> 123456789</p>
            <p><strong>Status:</strong> In Transit</p>
            <p><strong>Estimated Delivery:</strong> 24th Jan 2025</p>
            <p><strong>Shipping Address:</strong> Paarsh Infotech Pvt Ltd, Aurangabad</p>
          </div>
        </div>

        {/* Map and Delivery Partner Section */}
        <div className="tracking-map-container">
          <div className="tracking-map">
            <h3>Order Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29994.395409004945!2d73.76731155652391!3d19.995943960043718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddebee73f7beb3%3A0x180f540ccce09ace!2sPAARSH%20INFOTECH%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1737436742300!5m2!1sen!2sin"
              width="100%"
              height="500" // Increased height for larger map
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Order Location Map"
            ></iframe>
          </div>

          {/* Delivery Partner Details */}
          <div className="delivery-partner">
            <h3>Delivery Partner</h3>
            <div className="partner-info">
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Contact:</strong> +91 123 456 7890</p>
              <p><strong>Vehicle:</strong> Truck</p>
              <p><strong>Status:</strong> On the way</p>
              <p><strong>ETA:</strong> 30 min</p>
            </div>
          </div>
        </div>

        {/* Order History Section */}
        <div className="order-history">
          <h3>Order History</h3>
          <div className="history-item">
            <p><strong>Order ID:</strong> 123456788</p>
            <p><strong>Status:</strong> Delivered</p>
            <p><strong>Delivered On:</strong> 15th Jan 2025</p>
          </div>
          <div className="history-item">
            <p><strong>Order ID:</strong> 123456787</p>
            <p><strong>Status:</strong> In Transit</p>
            <p><strong>Estimated Delivery:</strong> 20th Jan 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
