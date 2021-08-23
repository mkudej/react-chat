import classNames from "classnames";
import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: any) => void;
  icon?: ReactElement<IconType>;
  error?: any;
}

export default function Input({
  name,
  placeholder,
  type,
  icon,
  value,
  error,
  onChange,
}: InputProps) {
  return (
    <>
      <div
        className={classNames(
          "border-border-color border rounded-lg py-2.5 px-4 w-full flex items-center",
          {
            "rounded-b-none border-red": error,
            "mb-4": !error,
          }
        )}
      >
        {icon && icon}
        <input
          name={name}
          className="outline-none"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
      {error ? (
        <div className="border-red border border-t-0 rounded-lg rounded-t-none py-2 px-4 mb-4 w-full flex items-center text-red text-sm">
          {error}
        </div>
      ) : null}
    </>
  );
}
