import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faPlaneUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-background-bg bg-bg z-30 w-full h-auto">
      <footer className="relative  bg-secondary w-full h-auto text-bg pb-20 pt-32 rounded-t-[100px]">
        <div className="footer-content-grid grid-auto-fit h-full ">
          <div className="footer-col1-logo  h-full flex flex-col gap-7 alg:items-center">
            <div className="logo  flex items-center justify-start md:justify-center gap-2 text-lg font-bold cursor-pointer duration-300 hover:scale- ">
              <FontAwesomeIcon icon={faPlaneUp} />
              <span>SkyDiving</span>
            </div>
            <p className="text-base font-sub-heading w-full alg:text-center opacity-80">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
              iste.Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <div className="socials w-full flex justify-start alg:justify-center items-center gap-4">
              <a className="" href="#">
                <FontAwesomeIcon
                  className="text-3xl hover:scale-125 active:scale-90 hover:text-primary duration-200 transition-all cursor-pointer"
                  icon={faFacebook}
                />
              </a>
              <a className="" href="#">
                <FontAwesomeIcon
                  className="text-3xl hover:scale-125 active:scale-90 hover:text-primary duration-200 transition-all cursor-pointer"
                  icon={faTwitter}
                />
              </a>
              <a className="" href="#">
                <FontAwesomeIcon
                  className="text-3xl hover:scale-125 active:scale-90 hover:text-primary duration-200 transition-all cursor-pointer"
                  icon={faInstagram}
                />
              </a>
              <a className="" href="#">
                <FontAwesomeIcon
                  className="text-3xl hover:scale-125 active:scale-90 hover:text-primary duration-200 transition-all cursor-pointer"
                  icon={faYoutube}
                />
              </a>
            </div>
          </div>
          <div className="footer-col2 w-full h-full flex flex-col justify-start items-center ">
            <h2 className="text-xl font-bold mb-9">About</h2>
            <ul className="  h-full flex flex-col items-start md:items-center justify-start gap-7 opacity-80">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col3 w-full h-full flex flex-col justify-start items-center ">
            <h2 className="text-xl font-bold mb-9">Company</h2>
            <ul className="  h-full flex flex-col items-start md:items-center justify-start gap-7 opacity-80">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col4 w-full h-full flex flex-col justify-start items-center  ">
            <h2 className="text-xl font-bold  w-full text-start alg:text-center">
              Safety In Skydiving{" "}
            </h2>
            <p className="font-sub-heading  opacity-80 my-9 text-start w-full alg:text-center">
              Skydiving Center is a member of the United States Parachute
              Association.
            </p>
            <img src="/assets/images/uspa.png" alt="" />
          </div>
        </div>
        <div className="footer-absolute-top z-30 absolute right-1/2 translate-x-1/2 top-0 -translate-y-1/2 w-3/5 h-32 rounded-full bg-accent shadow-md shadow-accent/70 text-bg flex justify-between items-center gap-10 px-12 xl:gap-5 xl:px-5 alg alg:gap-10 alg:px-10 alg:h-24 alg:w-1/2 md:w-3/4 ">
          <a
            href="#"
            className="contact-left flex justify-start items-center gap-4"
          >
            <div className="bg-bg text-accent text-xl w-9 h-9 flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <span className="alg:hidden">sky@diving.com</span>
          </a>
          <a
            href="#"
            className="contact-left flex justify-start items-center gap-4"
          >
            <div className="bg-bg text-accent text-xl w-9 h-9 flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faWhatsapp} />
            </div>
            <span className="alg:hidden">+20 - 123456789</span>
          </a>
          <a
            href="#"
            className="contact-left flex justify-start items-center gap-4"
          >
            <div className="bg-bg text-accent text-xl w-9 h-9 flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <span className="alg:hidden">sky@diving.com</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
