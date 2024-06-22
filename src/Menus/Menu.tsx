import CustMenuItems from "../components/CustMenuItems";
import avatar1 from "./../assets/Image Avatar.png";
import arrowchev from "./../assets/Chev Icon.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuItems = [
    {
      title: "Notification",
      subnotice: "See your recent activity",
      path: "/Notification",
      noticNum: 25,
    },
    {
      title: "Friends",
      subnotice: "Friendlist totals",
    },
    {
      title: "Messages",
      subnotice: "Message Your friends",
      path: "/ChatArea",
      noticNum: 2,
    },
    {
      title: "Albums",
      subnotice: "Save or post your albums",
    },
    {
      title: "Favourites",
      subnotice: "Friends you love",
    },
    {
      title: "Privacy policy",
      subnotice: "Protect your privacy",
    },
  ];
  return (
    <>
      <div className="border-2">
        <div className="flex items-center m-4">
          <div className="border-2 rounded-full p-1 border-green-400">
            <Link to="/Profile">
              <img src={avatar1} alt="Avatar" />
            </Link>
          </div>
          <div className="ml-4">
            <h1 className="font-medium">Kundan Sharma</h1>
            <p className="text-gray-400">@kundan.sha</p>
          </div>
          <div className="ml-auto">
            <Link to="/Profile">
              <button className="rounded-full border-2 py-4 px-5">
                <img src={arrowchev} alt="chevron arrow" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-2">
        <div>
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

        {menuItems.map((item, index) => (
          <CustMenuItems
            key={index}
            onClick={() => {}}
            children={item.title}
            subnotice={item.subnotice}
            path={item.path}
            noticNum={
              item.noticNum && (
                <span className="bg-green-500 text-white mr-8 px-2 py-1 rounded-full">
                  {item.noticNum}
                </span>
              )
            }
            Buttonitem={
              <>
                <img src={arrowchev} alt="chevarro" />
              </>
            }
          />
        ))}
      </div>
      <div className="text-center my-6">
        <Link to="/Signup">
          <button
            children="Logout"
            className=" py-4 w-11/12 bg-green-100 text-green-400 border-2 border-green-400"
          ></button>
        </Link>
      </div>
    </>
  );
};

export default Menu;
