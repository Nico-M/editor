import clsx from "clsx";
import { FunctionComponent } from "react";
import styled from "styled-components";
import svgUrl from "../assets/svg-icons/remixicon.symbol.svg";

interface SVGProps {
  icon: string;
  className?:string
}

const SVG: FunctionComponent<SVGProps> = ({ icon,className }) => {
  const path = `${svgUrl}#${icon}`;
  return (
    <StyledSVG className={clsx("remix",className)}>
      <use xlinkHref={path}></use>
    </StyledSVG>
  );
};

const StyledSVG = styled.svg`
  width: 24px;
  height: 24px;
`;
export default SVG;
