import { twMerge } from "tailwind-merge";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface IProps {
  icon?: any;
  className?: string;
  classNameChild?: string;
  direction?: "vertical" | "horizontal";
  children?: React.ReactNode;
  loading?: boolean;
  onClick?: (e?: any) => any;
  disabled?: boolean;
  type?: "button" | "submit";
  [key: string]: any;
  bg?: string;
  color?: string;
  isShop?: boolean;
  iconPosition?: "left" | "right";
}

const VButton = ({
  icon,
  className,
  classNameChild,
  direction = "horizontal",
  children,
  loading,
  disabled = false,
  type = "button",
  bg,
  color,
  isShop = false,
  iconPosition = "left",
  onClick,
}: IProps) => {
  console.log("direction :", bg);

  return (
    <button
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
      className={`flex    leading-[25.2px] text-[white] items-center justify-center text-[14px] w-auto py-[4px]   ${
        className || ""
      }`}
      disabled={loading || disabled}
      type={"button"}
    >
      {loading && (
        <AiOutlineLoading3Quarters className="animate-spin mr-2" size={20} />
      )}
      {icon} {children}
    </button>
  );
};
export default VButton;
