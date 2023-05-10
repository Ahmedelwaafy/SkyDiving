import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import Slider from "react-slick";

function MainSlider() {
  const [push, setPush] = useState(true);
  console.log(push);
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
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
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
      img: "/assets/images/2.jpg",

      location: "Germany",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 2,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/3.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 3,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/4.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 4,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/5.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 5,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/6.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 6,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/7.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 7,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/8.jpg",

      location: "Egypt",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 8,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/9.jpg",

      location: "Germany",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 9,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/10.jpg",

      location: "Italy",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 10,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/11.jpg",

      location: "France",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 11,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
    {
      img: "./assets/images/12.jpg",

      location: "England",
      title: "Skydiving Egypt – Over The Pyramids",
      people: 12,
      date: "14 Nov",
      description:
        "Experience the thrill of a lifetime and combine it with a journey through history by embarking on a skydiving adventure in Egypt.",
    },
  ];
  return (
    <section className="relative z-20 min-h-screen w-full h-auto pt-32 amd:pt-44 md:pt-64 pb-40 bg-bg  ">
      <div className="flex-col items-center h-full slider-container width">
        <div className="flex items-center justify-between sm:justify-center full sm my-14 slider-title-arrows ">
          <h2 className="text-3xl font-bold text-accent ">Best Offers</h2>
          <div className="flex items-center justify-end gap-5 slider-arrows sm:hidden">
            <div
              onClick={() => slider.current.slickPrev()}
              className="flex items-center justify-center w-10 h-10 duration-300 rounded-l-full cursor-pointer slider-prev bg-accent text-bg hover:opacity-90 active:scale-90"
            >
              <FontAwesomeIcon
                className="text-lg font-bold rotate-180"
                icon={faChevronRight}
              />
            </div>
            <div
              onClick={() => slider.current.slickNext()}
              className="flex items-center justify-center w-10 h-10 duration-300 rounded-r-full cursor-pointer slider-prev bg-accent text-bg hover:opacity-90 active:scale-90"
            >
              <FontAwesomeIcon
                className="text-lg font-bold "
                icon={faChevronRight}
              />
            </div>
          </div>
        </div>

        <Slider ref={slider} {...settings}>
          {offers.map((offer) => (
            <div
              key={offer.people}
              className="slide-wrapper-relative relative w-[350px] max-w-[350px] sm:w-[300px] sm:max-w-[300px] h-[420px]    overflow-hidden rounded-[70px] group"
            >
              <div className="w-full h-full slide-img-wrapper ">
                <img
                  className="object-cover w-full h-full object-top group-hover:scale-110 duration-300"
                  src={offer.img}
                  alt={offer.img}
                />
              </div>
              <div
                onClick={() => setPush(!push)}
                className={`slide-content-absolute absolute bottom-8 sm:bottom-0 w-3/4 sm:w-full h-3/4 sm:h-4/6  bg-secondary right-1/2 translate-x-1/2 rounded-[50px] translate-y-[47%]  sm:translate-y-[0%] transition-all duration-300 ease-in-out group-hover:translate-y-0 flex flex-col items-start justify-start p-6 gap-4 text-white`}
              >
                <p className="text-sm tracking-wider slide-location font-cursive">
                  {offer.location}
                </p>
                <h4 className="w-full font-bold truncate slide-title font-sub-heading text-accent">
                  {" "}
                  {offer.title}
                </h4>
                <div className="flex items-center justify-between w-full slide-date-people">
                  <p className="text-sm font-body">{offer.date}</p>
                  <p className="text-sm font-body">
                    {offer.people} Participants
                  </p>
                </div>
                <div className="w-full overflow-hidden text-sm slide-description text-ellipsis whitespace-break-spaces font-body">
                  {offer.description.substring(0, 65)} ...
                </div>
                <div className="flex items-center justify-center w-full slider-btn-wrapper h-fit">
                  <button className="px-10 py-3 border-2 rounded-full hero-cta bg-accent border-bg text-bg">
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
