import styled from "styled-components";
import {
  space,
  layout,
  color,
  SpaceProps,
  LayoutProps,
  ColorProps,
  typography,
  TypographyProps,
  border,
  BorderProps,
} from "styled-system";

const Box = styled.div<
  SpaceProps & LayoutProps & ColorProps & TypographyProps & BorderProps
>`
  ${space}
  ${layout}
  ${color}
${typography}
${border}
`;

export default Box;
