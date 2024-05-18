import { ChangeEvent, ReactElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type IProps = {
  id?: string;
  className?: string;
  label?: string | ReactElement;
  name?: string;
  type?: "text" | "number" | "email" | "password" | "color" | "url";
  value?: string | number | any;
  placeholder?: string;
  disabled?: boolean;
  direction?: "vertical" | "horizontal";
  prefix?: any;
  suffix?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
  size?: "small" | "large" | null;
  containerClassName?: string;
  error?: string | ReactNode;
};

const Input = ({
  type = "text",
  placeholder = "",
  label,
  name,
  value,
  className,
  padding,
  disabled = false,
  direction = "vertical",
  prefix = null,
  suffix = null,
  size = null,
  containerClassName,
  onChange,
  error,
  id,
  ...rest
}: IProps) => {
  return (
    <div
      className={twMerge(
        direction === "horizontal" && "flex items-center ",
        containerClassName
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900 mb-1 "
        >
          {label}
        </label>
      )}

      <div>
        <input
          type={type}
          name={name}
          id={id}
          className={twMerge(
            "block rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-primary-blue sm:text-sm sm:leading-[22.2px] px-2",
            className
          )}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...rest}
        />
      </div>
      {prefix && (
        <div className="absolute left-0 top-[-1px] h-full flex items-center ">
          {prefix}
        </div>
      )}
      {suffix && (
        <div className="absolute right-0 top-[-1px] h-full flex items-center">
          {suffix}
        </div>
      )}
      {error && <p className="text-red-500 mb-0 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
