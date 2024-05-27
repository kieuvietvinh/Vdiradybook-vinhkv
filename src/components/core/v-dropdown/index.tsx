import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  menu: {
    key: string;
    onClick?: Function;
    icon?: JSX.Element;
    disabled?: boolean;
    children?: IProps["menu"];
    isUpload?: boolean;
    name?: string;
    active?: boolean;
  }[];
  label: JSX.Element | string;
  className?: string;
  id?: string;
}

const VDropdownModal = ({ label, menu, className = "", id }: IProps) => {
  return (
    <Menu
      as="li"
      className={"flex w-fit items-center justify-center relative "}
      id={id}
    >
      <Menu.Button as="div" className="cursor-pointer relative">
        {label}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition all ease-in-out duration-[.4s] transform"
        enterFrom="translate-y-1/4 opacity-0"
        enterTo="-translate-y-5px opacity-100"
        leave=""
        leaveFrom=""
        leaveTo=""
      >
        <Menu.Items
          className={`overflow-hidden outline-none border border-[#4284F3]  p-2 shadow-toolbox bg-white  mt-2 right-0 top-4 lg:left-auto  bottom-auto absolute z-50 leading-normal flex max-w-[400px] max-[991.98px]:max-h-[calc(100vh-175px)] rounded-[10px]
        ${className}`}
        >
          <div className="shadow-none w-full">
            {menu?.map(
              (
                {
                  key,
                  children,
                  disabled = false,
                  icon,
                  onClick = () => {},
                  isUpload,
                  name,
                  active,
                },
                i
              ) => (
                <>
                  {isUpload ? (
                    <Menu.Item
                      key={i}
                      as="div"
                      onClick={() => onClick()}
                      className={twMerge(
                        "flex cursor-pointer gap-2 rounded-md items-center border-[#f1f1f1] px-5 py-2.5 hover:bg-[#e9ecef] hover:text-[#3870cf] transition-all"
                      )}
                      disabled={disabled}
                    >
                      {icon}
                      <label
                        htmlFor="upload-background"
                        className={twMerge(
                          "font-medium",
                          disabled ? "text-gray-400" : ""
                        )}
                      >
                        {key}
                      </label>
                      <div hidden={true}></div>
                    </Menu.Item>
                  ) : (
                    <>
                      {children && children?.length > 0 && (
                        <VDropdownModal menu={children} label={""} />
                      )}
                      {(!children || children?.length === 0) && (
                        <Menu.Item
                          key={i}
                          as="div"
                          onClick={() => onClick()}
                          className={twMerge(
                            "flex cursor-pointer gap-2 rounded-md items-center border-[#f1f1f1] px-4 py-2 hover:text-white hover:bg-[#3870cf] transition-all"
                          )}
                          disabled={disabled}
                        >
                          {icon}
                          <div
                            className={twMerge(
                              "font-normal text-[#1F1F1F] hover:text-white text-sm whitespace-nowrap line-clamp-1",
                              disabled ? "text-gray-400" : "",
                              active ? "text-[#3870cf]  font-medium" : ""
                            )}
                          >
                            {key}
                          </div>
                        </Menu.Item>
                      )}
                    </>
                  )}
                </>
              )
            )}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
export default VDropdownModal;
