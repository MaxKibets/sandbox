import { WithChildrenProps } from "@/types/shared";

type Indexes = {
  currentIndex: number;
  prevIndex: number;
  nextIndex: number;
};

type Icons = {
  iconPrev?: React.ReactNode | string;
  iconNext?: React.ReactNode | string;
};

type Inrerval = {
  interval?: number;
};

export type CarouselProps = WithChildrenProps<Inrerval & Icons>;

export type CarouselLayoutProps = WithChildrenProps<
  Icons & {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onPrevClick: () => void;
    onNextClick: () => void;
    onTouchStart: React.TouchEventHandler<HTMLDivElement>;
    onTouchEnd: React.TouchEventHandler<HTMLDivElement>;
    onTouchMove: React.TouchEventHandler<HTMLDivElement>;
  } & Indexes
>;

export type useCarouselControlProps = {
  itemsCount: number;
} & Inrerval;

export type useCarouselControlReturn = {
  handleShowNext: () => void;
  handleShowPrev: () => void;
  handleRun: () => void;
  handleStop: () => void;
  handleTouchStart: React.TouchEventHandler<HTMLDivElement>;
  handleTouchEnd: React.TouchEventHandler<HTMLDivElement>;
  handleTouchMove: React.TouchEventHandler<HTMLDivElement>;
} & Indexes;
