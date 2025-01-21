import "../Home/home.css";
import pick1 from "../../assets/images/HomePage/PICK-1.png";
import pick2 from "../../assets/images/HomePage/PICK-2.png";
import pick3 from "../../assets/images/HomePage/PICK-3.png";
import pick4 from "../../assets/images/HomePage/PICK-4.png";
// import tech_web from "../../assets/images/HomePage/TECH-WEB.svg";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="s-container">
          <p>BOOST PERFORMANCE</p>
          <h1>
            Comprehensive Solutions for <br></br>Seamless Delivery
          </h1>
          <h2>
            Explore a range of services provided to simplify parcel management,
            from tracking to customer support.
          </h2>
        </div>
        <div className="cards-div">
          <div className="cards">
            <div className="box">
              <img className="image" src={pick1} alt="" srcset="" />
            </div>
            <div className="box">
              <img className="image" src={pick2} alt="" srcset="" />
            </div>

            <div className="box">
              <img className="image" src={pick3} alt="" srcset="" />
            </div>
            <div className="box">
              <img className="image" src={pick4} alt="" srcset="" />
            </div>
          </div>

          <div className="text">
            <h1>All-in-One Delivery Platform for Everyone</h1>
            <p>
              Discover a variety of features tailored for both businesses and
              individual users, from efficient parcel tracking to easy access to
              support. Let us handle the delivery while you enjoy a hassle-free
              experience.
            </p>
            <h1>Your Trusted Delivery Partner</h1>
            <p>
              Offering versatile features designed for businesses and
              individuals alike, from real-time tracking to reliable support. We
              simplify deliveries so you can focus on what matters most. With
              our user-friendly platform, seamless parcel management has never
              been easier.
            </p>
          </div>
        </div>
        <div className="d-link-container">
          <div className="text">
            <div className="main-text">
              <h2>Empowering Your Delivery Experience</h2>
              <h1>Pick and Parcel </h1>
              <p>
                Our delivery platform documentation is your ultimate guide to
                navigating and mastering every aspect of our service. From
                setting up integrations to optimizing your logistics workflow,
                we've got you covered. Whether you're a developer looking for
                API references or a business owner aiming to enhance efficiency,
                our detailed and easy-to-understand resources are tailored to
                meet your needs.
                <br />
              </p>
            </div>
            <div className="read-docs-links">
              <p>Read Docs</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="service-container">
            <div
              className="s-box"
              style={{
                background: "linear-gradient(195deg,#94a5f0, #131c44)",
                color: "white",
              }}
            >
              <div className="icon">
                <i class="fa-solid fa-user"></i>
              </div>
              <div className="text">
                <h2>For Individuals</h2>
                <p>
                  Doorstep pickup and delivery for your personal parcels. Quick,
                  reliable, and hassle-free service for your everyday needs.
                </p>
                <div className="services-links" style={{ color: "white" }}>
                  <p>Lets Go!</p>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="s-box">
              <div className="icon">
                <i class="fa-solid fa-building"></i>
              </div>
              <div className="text">
                <h2>For Businesses</h2>
                <p>
                  Efficient bulk shipping and logistics management to help
                  streamline your operations and save time.
                </p>
                <div className="services-links">
                  <p>Start Now</p>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>

            <div className="s-box">
              <div className="icon">
                <i class="fa-solid fa-cash-register"></i>
              </div>
              <div className="text">
                <h2>For E-commerce</h2>
                <p>
                  COD, returns, and real-time package tracking to simplify your
                  delivery process and enhance customer satisfaction.
                </p>
                <div className="services-links">
                  <p>Read More</p>
                  <i class="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="feedback">
          <div class="f-contain">
            <p className="tag">BOOST PERFORMANCE</p>
            <h1>Trusted By Over</h1>
            <h1 style={{ color: "#506be1" }}>
              1,679,477+ Customers And 100+ Businesses
            </h1>
            <h2 className="tagline">
              Many Fortune 500 Users, Startups, and governmental institutions
              love <br></br>
              Pick Up and Parcel Platform Services.
            </h2>

            <div className="feed-cards">
              <div className="f-box">
                <div className="f-card-text">
                  <h3>Manish Sonawane</h3>
                  <div className="timestamp">
                    <i class="fa-regular fa-clock"></i>
                    <p>1 Day Ago</p>
                  </div>
                  <p>
                    "I’ve been using this platform for months, and it has never
                    disappointed! The delivery is always on time, and the
                    tracking feature keeps me updated at every step. Great
                    service and highly reliable!"
                  </p>
                  <div className="services-links" style={{ color: "white" }}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <div
                className="f-box"
                style={{
                  background: "linear-gradient(195deg,#94a5f0, #131c44)",
                  color: "white",
                }}
              >
                <div className="f-card-text">
                  <h3>Aditya Mahajan</h3>
                  <div className="timestamp">
                    <i
                      style={{ color: "white" }}
                      class="fa-regular fa-clock"
                    ></i>
                    <p>1 Week Ago</p>
                  </div>
                  <p>
                    "Absolutely love this platform! The seamless user interface
                    makes scheduling deliveries so easy, and the same-day
                    delivery option is a game-changer. Highly recommended!"
                  </p>
                  <div className="services-links">
                    <i style={{ color: "white" }} class="fa-solid fa-star"></i>
                    <i style={{ color: "white" }} class="fa-solid fa-star"></i>
                    <i style={{ color: "white" }} class="fa-solid fa-star"></i>
                    <i style={{ color: "white" }} class="fa-solid fa-star"></i>
                    <i style={{ color: "white" }} class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>

              <div className="f-box">
                <div className="f-card-text">
                  <h3>Pranjal Mahajan</h3>
                  <div className="timestamp">
                    <i class="fa-regular fa-clock"></i>
                    <p>3 Weeks Ago</p>
                  </div>
                  <p>
                    "Exceptional experience! The customer support is friendly
                    and quick to resolve any issues. Plus, the rates are
                    affordable without compromising on quality. I trust them for
                    all my deliveries."
                  </p>
                  <div className="services-links" style={{ color: "white" }}>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d2-link-container">
          <div className="text">
            <h1>
              Curious About How{" "}
              <span style={{ color: "#506be1" }}> Pay and Parcel </span> Works?
            </h1>
            <p>
              Discover everything you need to know, from getting started to
              making the most of our advanced features. <br></br> Whether you're
              a developer integrating APIs or a business streamlining logistics,
              we've got you covered. <br></br>Hit the button below to explore
              and take your delivery process to the next level!
            </p>

            <button className="check-button">Check Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
