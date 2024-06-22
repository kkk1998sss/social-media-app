import { useState } from "react";
import avatar1 from "./../assets/Image Avatar.png";
import search from "./../assets/Button - Search.png";
import srkImage from "./../assets/srk.png";
import tomImage from "./../assets/Tom Crus.png";
import author from "./../assets/Image Avatar (2).png";
import SwipeableCard from "../components/SwipeableCard";
import { Link } from "react-router-dom";

interface NotificationProps {
  id: number;
  name: string;
  action: string;
  time: string;
  image: string;
  read: boolean;
}

const notificationsData: NotificationProps[] = [
  {
    id: 1,
    name: "Arthur Aguilar",
    action: "Shared your post",
    time: "52 min ago",
    image: author,
    read: false,
  },
  {
    id: 2,
    name: "Addie Barrera",
    action: "Commend your post",
    time: "1 h ago",
    image: tomImage,
    read: false,
  },
  {
    id: 3,
    name: "Anne Southern",
    action: "added photo in group",
    time: "2 h ago",
    image: srkImage,
    read: false,
  },
  {
    id: 4,
    name: "Brenden Ramirez",
    action: "Liked your post",
    time: "2 h ago",
    image: srkImage,
    read: false,
  },
  {
    id: 5,
    name: "Brax Stott",
    action: "Liked your comments",
    time: "2 h ago",
    image: srkImage,
    read: false,
  },
];
const Notification = () => {
  const [notifications, setNotifications] = useState(notificationsData);

  const handleRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) => (notif.id === id ? { ...notif, read: true } : notif))
    );
  };
  return (
    <div className="">
      <div className="border-2 ">
        <div className="flex justify-between m-6">
          <Link to="/Profile">
            <div className="border-2 rounded-full p-1 border-green-400">
              <img src={avatar1} alt="" />
            </div>
          </Link>
          <div>
            {/* <h1 className="font-medium">Kundan Sharma</h1>
                <p>@kundan.sha</p> */}
          </div>

          <div className="flex justify-end content-center">
            <div className="content-center">
              {/* <span className="bg-green-500 text-white mr-8 px-2 py-1 rounded-full">
                    35
                </span> */}
            </div>
            <div className="content-center">
              <button className="">
                <img className="px-2" src={search} alt="Phone" />
              </button>
            </div>
          </div>
        </div>
        <div className="font-medium text-lg ml-6 mb-2">
          Notification{" "}
          <span className="bg-green-500 text-white mr-8 px-2 py-1 rounded-full">
            25
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-4 mb-2 m-6">
        <button className="text-gray-400">Show all</button>
        <button
          className="text-gray-500"
          onClick={() =>
            setNotifications((prev) =>
              prev.map((notif) => ({ ...notif, read: true }))
            )
          }
        >
          Mark all as read
        </button>
      </div>
      {/* <div className="space-y-4 m-6">
        {notifications.map((notif) => (
          <SwipeableNotification
            key={notif.id}
            notification={notif}
            onRead={handleRead}
          />
        ))}
      </div> */}
      <div className="space-y-4 m-4">
        {notifications.map((notification) => (
          <SwipeableCard
            key={notification.id}
            notification={notification}
            onRead={handleRead}
          />
        ))}
      </div>
    </div>
  );
};

// interface SwipeableNotificationProps {
//   notification: NotificationProps;
//   onRead: (id: number) => void;
// }

// const SwipeableNotification: React.FC<SwipeableNotificationProps> = ({
//   notification,
//   onRead,
// }) => {
//   const handlers = useSwipeable({
//     onSwipedLeft: () => onRead(notification.id),
//     // preventDefaultTouchmoveEvent: true,
//     trackMouse: true,
//   });

//   return (
//     <div
//       {...handlers}
//       className={`flex justify-between items-center p-4 border rounded-lg ${
//         notification.read ? "bg-gray-200" : "bg-white"
//       }`}
//     >
//       <div className="flex items-center">
//         <img
//           src={notification.image}
//           alt={notification.name}
//           className="w-10 h-10 rounded-full mr-4"
//         />
//         <div>
//           <p className="text-sm">
//             {notification.name}{" "}
//             <span className="text-gray-400">{notification.action}</span>
//           </p>
//           <p className="text-gray-400 text-sm">{notification.time}</p>
//         </div>
//       </div>
//     </div>
//   );
// };
export default Notification;
