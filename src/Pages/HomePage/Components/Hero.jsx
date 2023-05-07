import {
  faCalendarCheck,
  faCirclePlay,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useReducer } from "react";

function Hero() {
  function reducer(state, action) {
    switch (action.type) {
      case "setFilter": {
        return {
          ...state,
          filter: action.payload,
        };
      }
      case "changed_name": {
        return {
          name: action.nextName,
          age: state.age,
        };
      }
    }
    throw Error("Unknown action: " + action.type);
  }
  const [state, dispatch] = useReducer(reducer, { filter: "single" });
  return (
    <div
      className="h-screen  w-full pt-20 flex
     justify-center items-center"
    >
      <section
        className="hero-content-container relative h-full width flex flex-col items-center justify-center gap-7
       "
      >
        <h3 className="cursive-text text-[200px] opacity-30 fixed top-10 right-1/2 translate-x-1/2 font-cursive pointer-events-none ">
          {" "}
          SkyDiving
        </h3>
        <FontAwesomeIcon
          className=" play-icon absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-8xl cursor-pointer hover:scale-110 duration-300 opacity-70 hover:opacity-100 z-[0]"
          icon={faCirclePlay}
        />

        <div className="heading-wrapper overflow-hidden  ">
          <h1
            className="font-black text-7xl text-bg z-10 relative 
          pointer-events-none "
          >
            Ready. Set. GO!
          </h1>
        </div>
        <div className="sub-heading-wrapper overflow-hidden w-3/5 ">
          <h2
            className="font-black text-4xl text-center font-sub-heading  text-bg z-10 relative italic  pointer-events-none
          "
          >
            READY TO FEEL ON TOP OF THE WORLD? WE CAN HELP YOU WITH THAT.
          </h2>
        </div>
        <div className="cta-wrapper">
          <button className="hero-cta">Discover Plans</button>
        </div>

        {/**Booking ------------*/}
        <div className="booking w-5/6 h-40  absolute bottom-0 ">
          <div className="booking-relative relative w-full h-full bg-bg rounded-tr-[100px]  flex justify-between items-center ">
            {/**filter ----------- */}
            <div className="filter-absolute absolute rounded-t-[100px]  h-20 w-80 left-0 top-0 -translate-y-[100%] bg-red-300 flex justify-between items-center overflow-hidden">
              <button
                onClick={() =>
                  dispatch({
                    type: "setFilter",
                    payload: "single",
                  })
                }
                className={`w-1/2    h-full flex justify-center items-center cursor-pointer duration-300 transition-all hover:opacity-90 ${
                  state.filter == "single"
                    ? "bg-accent text-bg"
                    : "text-accent bg-bg"
                }`}
              >
                Single
              </button>
              <button
                onClick={() =>
                  dispatch({
                    type: "setFilter",
                    payload: "tandem",
                  })
                }
                className={`w-1/2  h-full flex justify-center items-center cursor-pointer duration-300 transition-all hover:opacity-90 ${
                  state.filter == "tandem"
                    ? "bg-accent text-bg"
                    : " text-accent bg-bg"
                }`}
              >
                Tandem
              </button>
            </div>
            {/**Booking Options ----------- */}
            <div className="booking-text font-cursive text-xl w-72 h-full  flex justify-center items-center leading-relaxed px-5">
              Book Your Amazing Skydive. ADVENTURE AWAITS!!
            </div>
            <div className="booking-options w-full h-full bg-red-400 flex justify-between items-center">
              <div className="booking-location w-1/3 h-full bg-test2 flex flex-col items-center justify-center gap-4">
                <div className="booking-location-tile flex justify-start items-center gap-3 opacity-60">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>Location</span>
                </div>
                <div className="booking-location-option"></div>
              </div>
            </div>
            <div className="booking-btn w-48 h-full bg-accent flex flex-col items-center justify-center gap-5 rounded-tr-[100px] text-bg cursor-pointer duration-300 hover:opacity-90">
              <FontAwesomeIcon className="text-2xl" icon={faCalendarCheck} />
              <p>Book Now</p>
            </div>
          </div>
        </div>
      </section>
      <div className="overlay fixed w-full h-full inset-0 bg-bg/10 z-[-2]"></div>
      <video
        className="fixed inset-0 h-full w-full object-cover z-[-3] "
        src="https://firebasestorage.googleapis.com/v0/b/dtd-blog-8bed5.appspot.com/o/skydiving.mp4?alt=media&token=2883d31d-4ee5-41b8-8a2c-6630a7081b87"
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
}

export default Hero;
