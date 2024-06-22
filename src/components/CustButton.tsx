import React from "react";
interface ButtonProps {
  children: any;
  className?: string;
  childrenImage?: any;
  classNameImage?: any;

  onClick?: () => void;
}
const CustButton: React.FC<ButtonProps> = ({
  children,
  className,
  childrenImage,
  classNameImage,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={` rounded  text-sm ${className}`}>
      <div className="inline-flex items-center">
        <img className={classNameImage} src={childrenImage} alt="" />
        {children}
      </div>
    </button>
  );
};

export default CustButton;
