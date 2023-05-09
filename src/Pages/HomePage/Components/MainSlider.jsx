import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import Slider from "react-slick";

function MainSlider() {
  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const offers = [
    {
      img: "./assets/images/1.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 1,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Germany",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 2,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 3,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 4,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 5,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 6,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 7,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 8,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Germany",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 9,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "Italy",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 10,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "France",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 11,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/1.jpg",

      location: "England",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 12,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
  ];
  return (
    <section className="h-screen relative z-20 bg-bg w-full pt-20">
      <div className="slider-container width h-full ">
        <span>slider</span>
        <div className="slider-title-arrows flex justify-between items-center w-full">
          <h2>Best Offers</h2>
          <div className="slider-arrows flex justify-end items-center gap-5">
            <div
              onClick={() => slider.current.slickPrev()}
              className="slider-prev w-10 h-10 bg-accent text-bg flex justify-center items-center rounded-l-full cursor-pointer duration-300 hover:opacity-90 active:scale-90"
            >
              <FontAwesomeIcon
                className="rotate-180 text-lg font-bold"
                icon={faChevronRight}
              />
            </div>
            <div
              onClick={() => slider.current.slickNext()}
              className="slider-prev w-10 h-10 bg-accent text-bg flex justify-center items-center rounded-r-full cursor-pointer duration-300 hover:opacity-90 active:scale-90"
            >
              <FontAwesomeIcon
                className=" text-lg font-bold"
                icon={faChevronRight}
              />
            </div>
          </div>
        </div>

        <Slider ref={slider} {...settings}>
          {offers.map((offer) => (
            <div
              key={offer.people}
              className="slide-wrapper-relative relative w-[350px] md:w-[300px] h-96 bg-red-200  overflow-hidden rounded-[70px]"
            >
              <div className="slide-img-wrapper  bg-red-400 w-full h-full ">
                {/**
              <img src={offer.img} alt={offer.img} />
               * 
               */}
              </div>
              <div className="slide-content-absolute absolute bottom-8 md:bottom-0 w-3/4 md:w-full h-3/4 bg-secondary right-1/2 translate-x-1/2 rounded-[50px] translate-y-[40%] md:translate-y-[0%] transition-all duration-300 ease-linear hover:translate-y-0 flex flex-col items-start justify-start p-6 gap-4 text-white">
                <p className="slide-location text-sm tracking-wider font-cursive">
                  {offer.location}
                </p>
                <h4 className="slide-title w-full truncate font-sub-heading text-accent font-bold">
                  {" "}
                  {offer.title}
                </h4>
                <div className="slide-date-people flex justify-between items-center w-full">
                  <p className="text-sm  font-body">{offer.date}</p>
                  <p className="text-sm  font-body">
                    {offer.people} Participants
                  </p>
                </div>
                <div className="slide-description text-sm   text-ellipsis overflow-hidden whitespace-break-spaces  w-full font-body">
                  {offer.description.substring(0, 70)} ...
                </div>
                <div className="slider-btn-wrapper w-full flex items-center justify-center  h-fit">
                  <button className="hero-cta  px-10 py-3 bg-accent border-2 border-bg text-bg rounded-full">
                    Book Now{" "}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default MainSlider;
