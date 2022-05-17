import { FunctionComponent } from "react";
import styled from "styled-components";
import SVG from "./components/SVG";
import clsx from "clsx";

interface MenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  active?: boolean;
}

const MenuButton: FunctionComponent<MenuButtonProps> = ({
  icon,
  active,
  ...btnProps
}) => {
  return (
    <StyledButton
      {...btnProps}
      type="button"
      className={clsx({
        "bg-neutral-900 text-white": active,
      })}
    >
      <SVG
        icon={icon}
        className={clsx(active ? "fill-white" : "fill-black")}
      ></SVG>
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 2px;
  border-radius: 2px;
`;

export default MenuButton;
