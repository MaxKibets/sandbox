import { ReactNode } from "react";

import { DIRECTION, INDENT, HEADING_SIZE } from "../constants/shared";

export type WithChildrenProps<P = unknown> = P & { children: ReactNode };

export type Indent = (typeof INDENT)[keyof typeof INDENT];

export type HeadingSize = (typeof HEADING_SIZE)[keyof typeof HEADING_SIZE];

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];
