"use client";

import { FC } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import clsx from "clsx";

import css from "./mainNavBar.module.css";
import { MainNavBarItemProps } from "./types";
import Logo from "../ui/Logo";

const LINKS = [
  { name: "Carousel", slug: "carousel" },
  { name: "Virtualization", slug: "virtualization" },
];

const MainNavBarItem: FC<MainNavBarItemProps> = ({ name, slug }) => {
  const segment = useSelectedLayoutSegment();

  return (
    <li>
      <Link
        href={`/${slug}`}
        className={clsx(css.link, { [css.active]: slug === segment })}
      >
        {name && name}
      </Link>
    </li>
  );
};

const MainNavBar: FC = () => {
  return (
    <ul className={css.navBar}>
      <li>
        <Logo />
      </li>
      {LINKS.map(({ name, slug }) => (
        <MainNavBarItem key={name} name={name} slug={slug} />
      ))}
    </ul>
  );
};

export default MainNavBar;
