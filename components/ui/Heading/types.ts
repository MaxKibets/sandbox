import { HeadingSize, Indent, WithChildrenProps } from "@/types/shared";

export type HeadingProps = WithChildrenProps<{
  size?: HeadingSize;
  inverse?: boolean;
  className?: string;
  indention?: Indent;
}>;
