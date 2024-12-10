import { FC } from "react";
import clsx from "clsx";

import { HEADING_SIZE, INDENT } from "@/constants/shared";

import css from "./heading.module.css";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({
  children,
  size: H = HEADING_SIZE.H2,
  indention = INDENT.MEDIUM,
  inverse,
  className,
}) => (
  <H
    className={clsx(
      css.heading,
      css[H],
      inverse && css.inverse,
      css[indention],
      className,
    )}
  >
    {children}
  </H>
);

export default Heading;
