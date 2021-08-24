/* eslint-disable no-unused-vars */
import classNames from "classnames";
import { ErrorMessage, Field, FieldAttributes } from "formik";
import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

interface InputProps {
  icon?: ReactElement<IconType>;
}

export default function Input(props: InputProps & FieldAttributes<any>) {
  return (
    <>
      <div
        className={classNames(
          "flex",
          "w-full",
          "items-center",
          "px-4",
          "py-2.5",
          "mb-4",
          "border",
          "border-border-color",
          "rounded-lg"
        )}
      >
        {props.icon && props.icon}
        <Field
          className="w-full outline-none"
          name={props.name}
          type={props.type}
        />
      </div>
      <ErrorMessage
        component="div"
        className={classNames(
          "flex",
          "w-full",
          "items-center",
          "-mt-3",
          "mb-4",
          "px-1",
          "text-red",
          "text-sm"
        )}
        name={props.name}
      />
    </>
  );
}
