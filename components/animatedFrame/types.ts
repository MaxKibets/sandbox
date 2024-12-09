import { Direction, WithChildrenProps } from "@/types/shared";

export type AnimatedFrameProps = WithChildrenProps<{ direction?: Direction }>;

export type AnimatedFrameLayoutProps = AnimatedFrameProps & { isInView: boolean };
