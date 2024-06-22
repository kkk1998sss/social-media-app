import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import check from "./../assets/Check Icon.png";

interface NotificationProps {
  id: number;
  name: string;
  action: string;
  time: string;
  image: string;
  read: boolean;
}

interface SwipeableCardProps {
  notification: NotificationProps;
  onRead: (id: number) => void;
}

const SwipeableCard: React.FC<SwipeableCardProps> = ({
  notification,
  onRead,
}) => {
  const [isSwiped, setIsSwiped] = useState(false);

  const handlers = useSwipeable({
    onSwipedLeft: () => setIsSwiped(true),
    onSwipedRight: () => setIsSwiped(false),
    trackMouse: true,
  });

  return (
    <div className="relative w-full max-w-md mx-auto my-4">
      <div className="absolute inset-0 flex items-center justify-end  rounded-lg p-4">
        <button
          className="bg-green-500 text-white rounded px-8 py-6 mr-2"
          onClick={() => onRead(notification.id)}
        >
          <div className="text-center items-center justify-center">
            <img src={check} alt="" className="pl-2" />
            <h6>Read</h6>
          </div>
        </button>
      </div>
      <div
        {...handlers}
        className={`relative bg-white rounded-lg shadow-sm p-6 transition-transform duration-300 border-2 ${
          isSwiped ? "-translate-x-32" : "translate-x-0"
        }`}
      >
        <div className="flex items-center">
          <img
            src={notification.image}
            alt={notification.name}
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <p className="text-sm">
              {notification.name}{" "}
              <span className="text-gray-400">{notification.action}</span>
            </p>
            <p className="text-gray-400 text-sm">{notification.time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeableCard;
