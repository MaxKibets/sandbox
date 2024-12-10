export const SIZE = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
} as const;

export const INDENT = {
  ...SIZE,
  NONE: "none",
} as const;

export const DIRECTION = {
  TOP: "top",
  BOTTOM: "bottom",
  LEFT: "left",
  RIGHT: "right",
} as const;

export const HEADING_SIZE = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
} as const;
