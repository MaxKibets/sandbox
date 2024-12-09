import { ReactNode } from "react";

import { DIRECTION } from "../constants/shared";

export type WithChildrenProps<P = unknown> = P & { children: ReactNode };

export type Direction = (typeof DIRECTION)[keyof typeof DIRECTION];
