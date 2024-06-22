import { Link } from "react-router-dom";
import CustButton from "../components/CustButton";
import arrow from "./../assets/Arrow Icon.png";
import srk from "./../assets/srk.png";
import useFollowToggle from "../hooks/useFollowtoggle";

const Followers = () => {
  const { followers, handleFollowToggle } = useFollowToggle();

  return (
    <div>
      <div className="flex justify-between items-center border-b-2 ">
        <div className="w-30">
          <Link to="/Menu">
            <CustButton
              onClick={() => {}}
              className="py-3 px-2 m-4 bg-green-500 hover:bg-green-700 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              children={undefined}
              childrenImage={arrow}
              classNameImage="px-2"
            />
          </Link>
        </div>
        <div className="text-center">
          <h1 className="font-medium text-xl">Followers (4K)</h1>
        </div>
        <div></div>
      </div>
      {followers.map((follower: any) => (
        <div key={follower.id} className="border-b-2">
          <div className="flex items-center p-4">
            <div className="flex items-center">
              <img
                src={follower.avatar || srk}
                alt={follower.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <p className="text-sm">
                  {follower.name} <br />
                  <span className="text-gray-400">{follower.username}</span>
                </p>
              </div>
            </div>
            <div className="ml-auto">
              <CustButton
                onClick={() => handleFollowToggle(follower.id)}
                className={
                  follower.isFollowing
                    ? "bg-white  text-black py-1 px-6 rounded-full border-2 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    : "bg-green-500 hover:bg-green-600 text-white py-1 px-9 rounded-full shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                }
              >
                {follower.isFollowing ? "Following" : "Follow"}
              </CustButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Followers;
