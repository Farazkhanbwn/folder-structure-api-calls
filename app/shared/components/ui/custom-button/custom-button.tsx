import React, { FC } from "react";
import { CustomButtonProps, CustomButtonTypes } from "./custom-button.types";
import { customButtonStyles } from "./custom-button.styles";

const CustomButton: FC<CustomButtonProps> = ({
  type=CustomButtonTypes.PRIMARY,
  disable = false,
  onClick,
  className,
  children,
  hide = false,
}) => {
  if (hide) {
    return null;
  }
  return (
    <button
      className={`${customButtonStyles[type]} ${className}`}
      disabled={disable}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
