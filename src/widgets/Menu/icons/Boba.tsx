import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const LogoBoba: React.FC<LogoProps> = (props) => {
  return (
    <Svg viewBox="0 0 44 44" {...props}>
      <image
        width="44"
        height="44"
        href="/images/coins/boba.png"
      />
    </Svg>
  );
};

export default LogoBoba;
