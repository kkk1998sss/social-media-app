import { Link } from "react-router-dom";
import CustButton from "../components/CustButton";
import arrow from "./../assets/Arrow Icon.png";
import Heart from "./../assets/Heart Icon.png";
import search from "./../assets/Button - Search.png";
import tom from "./../assets/Tom Crus.png";
import chat from "./../assets/Chat Icon.png";
import carousel1 from "./../assets/Image.png";
import carousel2 from "./../assets/Image (1).png";
import carousel3 from "./../assets/tom3.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useFollowToggle from "../hooks/useFollowtoggle";

const carouselImages = [carousel1, carousel2, carousel3];
const Profile = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const { followers, handleFollowToggle } = useFollowToggle();
  const toggleFollow = () => {
    // Assuming followers[0] represents the current user in this example
    const currentUser = followers[0];
    handleFollowToggle(currentUser.id);
  };

  return (
    <div>
      <div className="flex justify-between items-center border-b-2 p-4">
        <Link to="/Menu">
          <CustButton
            onClick={() => {}}
            className="py-3 px-2 mr-4 bg-green-500 hover:bg-green-700 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            children={undefined}
            childrenImage={arrow}
            classNameImage="px-2"
          />
        </Link>
        <div>
          <h1 className="flex font-medium text-xl items-center">Profile</h1>
        </div>
        <div className="flex">
          <img className="px-2" src={Heart} alt="Phone" />
          <img className="px-2" src={search} alt="Phone" />
        </div>
      </div>

      <div className="flex justify-center my-6 ">
        <div className="rounded-full border-2 p-2 border-green-400">
          <img src={tom} alt="Profile" className="rounded-full w-40 h-40" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-medium">Tom Cruise</h1>
        <h6 className="text-gray-400">@tomcruiser</h6>
      </div>
      <div className="flex justify-center my-4">
        <div className="rounded-full p-2 bg-slate-100 mr-2">
          <div className="rounded-full p-3 bg-slate-500"></div>
        </div>
        <div className="rounded-full p-2 bg-slate-100 mr-2">
          <div className="rounded-full p-3 bg-slate-500"></div>
        </div>
        <div className="rounded-full p-2 bg-slate-100 mr-2">
          <div className="rounded-full p-3 bg-slate-500"></div>
        </div>
        <div className="rounded-full p-2 bg-slate-100">
          <div className="rounded-full p-3 bg-slate-500"></div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link to="/ChatArea">
          <button className="flex rounded-full px-5 py-2 border-2 items-center mr-4">
            <span className="rounded-full bg-green-500 h-2 w-2 mr-2" />
            <img src={chat} alt="" className="mr-2" /> Message
          </button>
        </Link>

        <CustButton
          onClick={toggleFollow}
          className={
            followers[0]?.isFollowing
              ? "bg-white text-black py-1 px-6 rounded-full border-2 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              : "bg-green-500 text-white py-1 px-9 rounded-full shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          }
        >
          {followers[0]?.isFollowing ? "Following" : "Follow"}
        </CustButton>
      </div>

      <div className="border-b-2">
        <div className="flex justify-around text-center my-6">
          <div className="border-2 border-gray-300 rounded py-2 px-4">
            <h1 className="text-3xl font-small">572</h1>
            <h6 className="text-gray-400">Post</h6>
          </div>
          <Link to="/Followers">
            <div className="border-2 border-gray-300 rounded py-2 px-4">
              <h1 className="text-3xl font-small">6.3K</h1>
              <h6 className="text-gray-400">Followers</h6>
            </div>
          </Link>
          <div className="border-2 border-gray-300 rounded py-2 px-4">
            <h1 className="text-3xl font-small">2.5K</h1>
            <h6 className="text-gray-400">Following</h6>
          </div>
        </div>
      </div>
      <div className="">
        <div className="my-6 px-4">
          <Slider {...settings}>
            {carouselImages.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`carousel-${index}`}
                  className="w-full h-40 object-cover rounded-lg pr-2"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Profile;
