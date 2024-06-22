import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustButton from "./CustButton";
import girlImg from "./../assets/girl.jpg";
import { Link } from "react-router-dom";
import "./CustomSlider.css"; // Import the custom CSS file

const textSlides = [
  {
    title: "Let’s connect",
    subtitle: "with each other",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
  },
  {
    title: "Stay Connected",
    subtitle: "Anytime, Anywhere",
    description: "Stay in touch with your loved ones, no matter where you are.",
  },
  {
    title: "Join Us Today",
    subtitle: "And Start Connecting",
    description: "Create an account to start your journey with us.",
  },
];

const Landingpage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | React.ReactElement<any, string | React.JSXElementConstructor<any>>
        | Iterable<React.ReactNode>
        | React.ReactPortal
        | null
        | undefined
    ) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="custom-dot">
        <button />
      </div>
    ),
  };

  return (
    <>
      <div className="text-center">
        <div className="">
          <div
            className="items-center relative"
            style={{
              clipPath:
                "polygon(0% 0%, 100% 0%, 100% 71%, 49% 81%, 26% 93%, 32% 81%, 0 74%)",
              height: "60vh",
            }}
          >
            <img
              src={girlImg}
              alt="girlImage"
              className="rounded mx-auto w-full h-full object-cover"
            />
          </div>
        </div>
        <Slider {...settings}>
          {textSlides.map((slide, index) => (
            <div key={index} className="px-4">
              <h1 className="text-5xl font-medium">
                {slide.title} <br /> {slide.subtitle}
              </h1>
              <h6 className="px-6 text-slate-400">{slide.description}</h6>
            </div>
          ))}
        </Slider>
        <div className="my-4">
          <button
            type="button"
            className="w-10 h-2 rounded-full bg-zinc-600 mr-1"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-2 rounded-full bg-zinc-400 mr-1"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-2 rounded-full bg-zinc-400 mr-1"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
        </div>
        <br />
        <Link to="/Signup">
          <CustButton
            onClick={() => {}}
            className="py-4 w-11/12 text-white bg-green-500 hover:bg-green-700 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            children="Get Started"
          />
        </Link>
      </div>
    </>
  );
};

export default Landingpage;
