import {
  faCalendar,
  faCalendarCheck,
  faCalendarDays,
  faChevronDown,
  faCirclePlay,
  faLocationDot,
  faMagnifyingGlassLocation,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useReducer } from "react";

function Hero() {
  function reducer(state, action) {
    switch (action.type) {
      case "setFilter": {
        return {
          ...state,
          filter: action.payload,
        };
      }
      case "setLocations": {
        return {
          ...state,
          locations: action.payload,
        };
      }
      case "setShowLocations": {
        return {
          ...state,
          showLocation: action.payload,
        };
      }
      case "setSelectedLocation": {
        return {
          ...state,
          selectedLocation: action.payload,
        };
      }
      case "setSearch": {
        return {
          ...state,
          search: action.payload,
        };
      }
      case "setNoLocationFound": {
        return {
          ...state,
          noLocationFound: action.payload,
        };
      }
      case "setDate": {
        return {
          ...state,
          date: action.payload,
        };
      }
      case "setDateColorChange": {
        return {
          ...state,
          dateColorChange: action.payload,
        };
      }
      case "setPersonsNum": {
        return {
          ...state,
          personsNum: action.payload,
        };
      }
      case "setPersonsNumChange": {
        return {
          ...state,
          personsNumChange: action.payload,
        };
      }
      case "setIncreasePersonsNum": {
        return {
          ...state,
          personsNum: state.personsNum + 1,
        };
      }
      case "setDecreasePersonsNum": {
        return {
          ...state,
          personsNum: state.personsNum - 1,
        };
      }
    }
    throw Error("Unknown action: " + action.type);
  }
  const [state, dispatch] = useReducer(reducer, {
    filter: "single",
    locations: [],
    showLocation: false,
    selectedLocation: "",
    search: "",
    noLocationFound: false,
    date: "2023-05-23",
    dateColorChange: false,
    personsNum: 1,
    personsNumChange: false,
  });
  useEffect(() => {
    try {
      fetch("https://restcountries.com/v2/all?fields=name")
        .then((res) => res.json())
        .then((data) =>
          dispatch({
            type: "setLocations",
            payload: data,
          })
        );
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleSearchChange(e) {
    for (let i = 0; i < state.locations.length; i++) {
      if (
        state.locations[i].name
          .toString()
          .toLocaleUpperCase()
          .startsWith(e.target.value.toString().toLocaleUpperCase())
      ) {
        dispatch({
          type: "setNoLocationFound",
          payload: false,
        });
        break;
      } else {
        dispatch({
          type: "setNoLocationFound",
          payload: true,
        });
      }
    }
  }
  return (
    <div
      className="h-screen  w-full pt-20 flex
     justify-center items-center"
    >
      <section
        className="hero-content-container relative h-full width flex flex-col items-center justify-center gap-10
       "
      >
        <h3 className="cursive-text text-[15vw] opacity-30 fixed top-10 right-1/2 translate-x-1/2 font-cursive pointer-events-none ">
          {" "}
          SkyDiving
        </h3>
        
        <FontAwesomeIcon
          className=" play-icon absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 text-8xl cursor-pointer hover:scale-110 duration-300 opacity-70 hover:opacity-100 z-[20]"
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
          <button className="hero-cta mt-5 px-7 py-4 bg-accent border-2 border-bg text-bg rounded-t-full">Discover Plans</button>
        </div>

        {/**Booking ------------*/}
        <div className="booking w-5/6 mx-auto h-40 translate-y-1/2 z-40 shadow-lg   absolute bottom-0 ">
          <div className="booking-relative-for-filter relative w-full h-full bg-bg rounded-tr-[100px]  flex justify-between items-center ">
            {/**filter ----------- */}
            <div className="filter-absolute absolute rounded-t-[100px]  h-20 w-80 left-0 top-0 -translate-y-[100%]  flex justify-between items-center overflow-hidden">
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
            {/**Booking left message ----------- */}
            <div className="booking-text-left font-cursive text-xl w-72 h-full  flex justify-center items-center leading-relaxed px-5">
              Book Your Amazing Skydive. ADVENTURE AWAITS!!
            </div>

            {/**booking-options----------- */}
            <div className="booking-options w-full h-full bg-red-400 flex justify-between items-center">
              {/**Location----------- */}

              <div className="booking-location w-1/3 h-full bg-bg flex flex-col items-start justify-center gap-4 px-5 ">
                <div className="booking-location-tile  flex justify-start items-center gap-3 text-secondary">
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>Location</span>
                </div>
                {/**Location - Option -Select----------- */}

                <div className="booking-location-option w-full h-auto ">
                  {/**selected-location----------- */}
                  <div className="selected-location-location-relative relative w-full">
                    <div
                      onClick={() =>
                        dispatch({
                          type: "setShowLocations",
                          payload: !state.showLocation,
                        })
                      }
                      className={`selected-location flex justify-between px-4 items-center gap-5 rounded-2xl border-2 border-primary  w-full h-8  cursor-pointer ${
                        state.selectedLocation
                          ? "text-primary"
                          : "text-secondary "
                      } `}
                    >
                      <span className={`  text-sm  truncate`}>
                        {state.selectedLocation
                          ? state.selectedLocation
                          : "Select location"}
                      </span>{" "}
                      <FontAwesomeIcon
                        className={`transition-all duration-200 ease-in-out ${
                          state.showLocation ? "rotate-180" : "rotate-0"
                        }`}
                        icon={faChevronDown}
                      />
                    </div>
                    {/**locations----------- */}
                    <div
                      className={`locations-absolute  absolute z-40 top-7 left-0 w-full transition-all duration-200 ease-linear rounded-2xl overflow-x-hidden ${
                        state.showLocation
                          ? "max-h-72 overflow-y-auto mt-5 bg-secondary"
                          : "max-h-0 overflow-y-hidden"
                      }`}
                    >
                      <ul
                        className={`locations flex flex-col gap-3 relative items-start pb-3  ${
                          state.showLocation ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <div className="search-locations-input-sticky sticky top-0 h-12 w-full bg-white shadow-sm flex justify-between px-4 gap-5 items-center">
                          <FontAwesomeIcon
                            className="text-xl text-secondary"
                            icon={faMagnifyingGlassLocation}
                          />
                          <input
                            value={state.search}
                            autoComplete="on"
                            onChange={(e) => {
                              dispatch({
                                type: "setSearch",
                                payload: e.target.value,
                              });
                              handleSearchChange(e);
                            }}
                            className=" outline-none text-sm font-normal text-secondary placeholder:text-sm placeholder:font-normal placeholder:text-secondary "
                            type="text"
                            placeholder="Search location"
                          />
                        </div>
                        {state.noLocationFound && (
                          <span className="text-center w-full text-sm text-red-500">
                            No location found
                          </span>
                        )}
                        {state.locations?.map((location) => (
                          <li
                            className={`pl-4 py-1 cursor-pointer hover:bg-white w-full truncate duration-300 ${
                              location.name
                                .toLocaleLowerCase()
                                .startsWith(state.search.toLocaleLowerCase())
                                ? "block"
                                : "hidden"
                            }
                            ${
                              state.selectedLocation == location.name
                                ? "bg-white"
                                : ""
                            }
                            `}
                            key={location.name}
                            onClick={() => {
                              dispatch({
                                type: "setSelectedLocation",
                                payload: location.name,
                              });
                              dispatch({
                                type: "setShowLocations",
                                payload: false,
                              });
                              dispatch({
                                type: "setSearch",
                                payload: "",
                              });
                            }}
                          >
                            {location.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/**Calender----------- */}

              <div className="booking-calender w-1/3 h-full bg-bg flex flex-col items-start justify-center gap-4 px-5 ">
                <div className="booking-calender-tile  flex justify-start items-center gap-3 text-secondary">
                  <FontAwesomeIcon icon={faCalendarDays} /> <span>Date</span>
                </div>

                {/**calender - Option -Select----------- */}
                <div
                  className={`calendar-relative relative rounded-2xl border-2 border-primary  w-full  h-8 flex justify-center items-center  px-4 ${
                    state.dateColorChange ? "text-primary" : "text-secondary"
                  }`}
                >
                  <FontAwesomeIcon
                    className="calendar-icon absolute right-4  bottom-1/2 translate-y-1/2 text-lg pointer-events-none cursor-pointer "
                    icon={faCalendar}
                  />
                  <input
                    id="date"
                    onChange={(e) => {
                      dispatch({
                        type: "setDate",
                        payload: e.target.value,
                      });
                      dispatch({
                        type: "setDateColorChange",
                        payload: true,
                      });
                    }}
                    value={state.date}
                    className={`bg-transparent outline-none w-full `}
                    type="date"
                  />
                </div>
              </div>

              {/**Persons----------- */}

              <div className="booking-Persons w-1/3 h-full bg-bg flex flex-col items-start justify-center gap-4 px-5 ">
                <div className="booking-Persons-tile  flex justify-start items-center gap-3 text-secondary">
                  <FontAwesomeIcon icon={faPeopleGroup} />{" "}
                  <span>Total persons</span>
                </div>

                {/**Persons - Option -Select----------- */}
                <div className="input-persons-number rounded-2xl border-2 border-primary  w-full h-8  flex justify-between items-center gap-4 px-4">
                  <input
                    onChange={(e) => {
                      dispatch({
                        type: "setPersonsNum",
                        payload: parseInt(e.target.value),
                      });
                      dispatch({
                        type: "setPersonsNumChange",
                        payload: true,
                      });
                    }}
                    value={state.personsNum}
                    className={` outline-none bg-transparent w-1/2 ${
                      state.personsNumChange ? "text-primary" : "text-secondary"
                    }`}
                    type="number"
                  />

                  {/**persons-controls */}
                  <div className="persons-controls w-1/2  flex justify-end items-center gap-6">
                    <span
                      onClick={() => {
                        dispatch({
                          type: "setDecreasePersonsNum",
                        });
                        dispatch({
                          type: "setPersonsNumChange",
                          payload: true,
                        });
                      }}
                      className={`decrement rounded-full  text-bg flex justify-center items-center w-[22px] h-[22px] font-bold text-lg cursor-pointer ${
                        state.personsNum == 1
                          ? "bg-secondary pointer-events-none"
                          : "bg-primary"
                      }`}
                    >
                      -
                    </span>
                    <span
                      onClick={() => {
                        dispatch({
                          type: "setIncreasePersonsNum",
                        });
                        dispatch({
                          type: "setPersonsNumChange",
                          payload: true,
                        });
                      }}
                      className="increment rounded-full bg-primary text-bg flex justify-center items-center w-[22px] h-[22px] font-bold text-lg cursor-pointer"
                    >
                      +
                    </span>
                  </div>
                </div>
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
