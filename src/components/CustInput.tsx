import React from "react";

interface InputProps {
  children: any;
  className?: string;
  onClick?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: any;
  label?: string;
  id?: string;
}

const CustInput: React.FC<InputProps> = ({
  children,
  className,
  onClick,
  onChange,
  value,
  type = "text",
  label,
  id,
}) => {
  return (
    <div className="mx-4 my-4 relative group">
      <input
        id={id}
        required
        className={`w-full h-20 px-4 text-sm peer border-2 border-gray-100 outline-none focus:ring-2 ring-green-400 rounded-md ${className}`}
        placeholder={children}
        onClick={onClick}
        onChange={onChange}
        value={value}
        type={type}
      />
      {label && (
        <label
          htmlFor={id}
          className="transform transition-all absolute top-8 left-2 px-2 text-sm text-gray-400 group-focus-within:text-xs peer-valid:text-xs peer-focus:absolute peer-focus:top-2 peer-focus:left-4 peer-focus:text-green-500 peer-focus:bg-white peer-focus:px-1 peer-valid:absolute peer-valid:top-2 peer-valid:left-4 peer-valid:text-green-500 peer-valid:bg-white peer-valid:px-1"
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CustInput;
