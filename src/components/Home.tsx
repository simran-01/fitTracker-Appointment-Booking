import React from "react";

interface props {
  setPage: React.Dispatch<React.SetStateAction<string>>;
}

const Home = ({ setPage }: props) => {
  return (
    <>
      <div className="landing-page">
        <div className="home-image">
          <img src="images/home-image.png" width="85%" />
        </div>

        <div className="landing-content">
          <p className="slogan">
            <span>Fitness</span> Matters!
          </p>
          <p>Manage your client's appointment effortlessly with fitTracker.</p>
          <button className="calendar-btn" onClick={()=>setPage("calendar")}>Show Calendar</button>
          <button
            className="appointment-btn"
            onClick={() => setPage("appointments")}
          >
            Manage Appointments
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
