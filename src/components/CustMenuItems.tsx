import React from "react";
import { Link } from "react-router-dom";
interface ImageProps {
  children?: string;
  subnotice?: string;
  noticNum?: any;
  Buttonitem?: any;
  ButtonStyle?: any;
  AvatarImage?: any;
  path?: any;
  onClick: () => void;
}
const CustMenuItems: React.FC<ImageProps> = ({
  children,
  subnotice,
  noticNum,
  Buttonitem,
  ButtonStyle,
  AvatarImage,
  path,
}) => {
  return (
    <>
      <div className="flex justify-between m-6">
        {AvatarImage}
        <div>
          <h1 className={`font-medium `}>{children}</h1>
          <p className="text-gray-400">{subnotice}</p>
        </div>
        <div></div>
        <div className="flex justify-end content-center">
          <div className="content-center">{noticNum}</div>
          <div className="content-center">
            <Link to={path}>
              <button
                className={`rounded-full border-2 py-4 px-5 ${ButtonStyle}`}
              >
                {Buttonitem}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustMenuItems;
