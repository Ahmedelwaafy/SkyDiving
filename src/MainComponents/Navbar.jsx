import { faChevronDown, faHourglass2, faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useReducer } from "react";


function Navbar() {
  function reducer(state, action) {
   switch (action.type) {
     case "setShowMobileMenu": {
       return {
         ...state,
         showMobileMenu: action.payload,
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
    const [state, dispatch] = useReducer(reducer, { showMobileMenu:false});

  function handleBurgerChecked(e) {
    if(e.target.checked){
      dispatch({
        type: "setShowMobileMenu",
        payload: true,
      });
    }else{
      dispatch({
        type: "setShowMobileMenu",
        payload: false,
      });
    }
  }
  return (
    <>
      <header className="fixed bg-bg/70 w-full border-b-2 border-x-2  border-x-secondary border-b-secondary h-20 rounded-b-[100px] hover:bg-secondary hover:text-bg duration-200 ease-linear group  hover:border-x-bg hover:border-b-bg overflow-hidden shadow-sm shadow-secondary/50 hover:shadow-bg ">
        {/**Desktop Nav */}

        <nav className="width flex h-full justify-between items-center">
          {/**logo */}
          <div className="logo flex items-center justify-center gap-2 text-lg font-bold cursor-pointer duration-300 hover:scale-110 ">
            <FontAwesomeIcon icon={faPlaneUp} />
            <span>SkyDiving</span>
          </div>
          {/** Nav Menu */}
          <ul className="flex h-full amd:hidden justify-center items-center gap-8 font-heading font-medium">
            <li className="hover:bg-bg hover:text-primary h-full px-2  duration-300 active:scale-90 cursor-pointer flex justify-center items-center gap-[6px] ">
              <a href="#">First Jump</a>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className="hover:bg-bg hover:text-primary h-full px-2 flex justify-center items-center duration-300 active:scale-90 cursor-pointer ">
              <a href="#">Gallery</a>
            </li>
            <li className="hover:bg-bg hover:text-primary h-full px-2  duration-300 active:scale-90 cursor-pointer flex justify-center items-center gap-[6px]">
              <a href="#">Calender</a>
              <FontAwesomeIcon icon={faChevronDown} />
            </li>
            <li className="hover:bg-bg hover:text-primary h-full px-2 flex justify-center items-center duration-300 active:scale-90 cursor-pointer ">
              <a href="#">Prices</a>
            </li>
            <li className="hover:bg-bg hover:text-primary h-full px-2 flex justify-center items-center duration-300 active:scale-90 cursor-pointer ">
              <a href="#">Contact</a>
            </li>
          </ul>
          {/** Burger Btn */}
          <label className="hamburger hidden amd:block">
            <input onChange={handleBurgerChecked} type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line stroke-primary group-hover:stroke-bg line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path
                className="line stroke-primary group-hover:stroke-bg"
                d="M7 16 27 16"
              ></path>
            </svg>
          </label>
          {/** Nav Btns */}
          <Link className="px-3 bg-primary h-full flex items-center justify-center text-bg font-bold text-lg duration-200 ease-linear group-hover:bg-bg group-hover:text-secondary   ">
            Book Now
          </Link>{" "}
        </nav>

        {/**Mobile Nav */}
      </header>

      <div
        className={`fixed-mobile-nav fixed inset-0 top-20 h-mobile-menu w-full bg-secondary text-white hidden amd:flex  justify-center items-center transition-all duration-300 ease-in-out rounded-t-[100px] ${
          state.showMobileMenu
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 translate-y-24"
        }`}
      >
        <ul className=" h-full  flex flex-col justify-center items-start  gap-10 font-heading font-medium">
          <li className="hover:opacity-70 duration-300 active:scale-90 cursor-pointer flex justify-center items-center gap-[6px] ">
            <a href="#">First Jump</a>
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li className="hover:opacity-70 duration-300 active:scale-90 cursor-pointer  ">
            <a className="" href="#">
              Gallery
            </a>
          </li>
          <li className="hover:opacity-70 duration-300 active:scale-90 cursor-pointer flex justify-center items-center gap-[6px]">
            <a href="#">Calender</a>
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <li className="hover:opacity-70 duration-300 active:scale-90 cursor-pointer ">
            <a href="#">Prices</a>
          </li>
          <li className="hover:opacity-70 duration-300 active:scale-90 cursor-pointer ">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
