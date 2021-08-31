import classNames from "classnames";
import { Field, FormikErrors, FormikTouched, useFormikContext } from "formik";
interface InputProps {
  name: string;
  label: string;
  type: string;
  className?: string;
}

export default function Input(props: InputProps) {
  const {
    touched,
    errors,
  }: {
    touched: FormikTouched<{ [field: string]: any }>;
    errors: FormikErrors<{ [field: string]: any }>;
  } = useFormikContext();

  const error =
    touched[props.name] && errors[props.name] ? errors[props.name] : null;

  return (
    <div className={props.className}>
      <label
        className={classNames("block mb-2 text-xs", { "text-red": error })}
        htmlFor={props.name}
      >
        <span className="uppercase">{props.label}</span>
        {error && <> - {error}</>}
      </label>
      <Field
        className={classNames(
          "w-full p-2.5 text-white border border-solid border-text-input-border bg-text-input-bg rounded-sm leading-none",
          { "border-red": error }
        )}
        name={props.name}
        type={props.type}
      />
    </div>
  );
}
