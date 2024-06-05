/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { Select, Space } from "antd";

type IDropdownProps = {
  label?: any;
  placeholder?: string;
  options: any[];
  defaultValue?: any;
  disabled?: boolean;
  value?: any;
  type?: string;
  width?: any;
  className?: string;
  showSearch?: boolean;
  mode?: string;
  id?: string;
  [key: string]: any;
  setRequiredValue?: (e: string) => void;
  onChange?: (e: string) => void;
};

export default function VDropdown(props: IDropdownProps) {
  //   const { setIsMovePopup } = useContext(NewsFeedContext);
  const {
    label,
    placeholder,
    options,
    defaultValue,
    disabled,
    onChange = () => {},
    value,
    className,
    setRequiredValue,
    showSearch = false,
    mode = undefined,
    id = "",
    error,
    ...rest
  } = props;

  const { Option } = Select;

  const handleChangeDropdown = (e: string) => {
    if (setRequiredValue) {
      setRequiredValue(e);
    }
    onChange(e);
  };

  const _renderOption = (
    {
      value,
      icon,
      label,
      image,
      disabled,
    }: {
      idx: number;
      value: string;
      label: string;
      icon: any;
      image?: any;
      disabled?: boolean;
    },
    index: number
  ) => (
    <Option
      value={value}
      label={label}
      icon={icon}
      key={index}
      disabled={disabled}
    >
      <Space>
        {icon && <img src={icon} className="size-5" alt={label || "icon"} />}
        {/* <Icon name={icon} /> */}
        {image && (
          <div className="w-7 h-7">
            {/* <AppImage path={image} className="w-full h-full object-cover" /> */}
          </div>
        )}

        {label}
      </Space>
    </Option>
  );
  const handleClear = () => {
    console.log("cleared value");
  };

  return (
    <>
      {label && <span className="text-xs">{label}</span>}
      <Select
        id={id}
        mode={mode === "multiple" ? "multiple" : undefined}
        allowClear={true}
        onClear={handleClear} // Add this
        onMouseDown={() => {
          //   setIsMovePopup(false);
        }}
        dropdownStyle={{
          zIndex: 99999,
        }}
        onFocus={() => {
          //   setIsMovePopup(true);
        }}
        showSearch={showSearch}
        filterOption={(input, option) =>
          String(option?.label ?? "")
            .toLowerCase()
            .includes(input.toLowerCase())
        }
        className={`${className ? className : ""} w-full`}
        {...(defaultValue ? { defaultValue } : {})}
        {...(value ? { value } : {})}
        onChange={(e) => handleChangeDropdown(e)}
        placeholder={placeholder || "Chọn"}
        disabled={disabled}
        {...rest}
      >
        {options &&
          options.length > 0 &&
          options.map((option: any, index: any) =>
            _renderOption(option, index)
          )}
      </Select>
      {error && <p className="text-red-500 mb-0 text-xs">{error}</p>}
    </>
  );
}
