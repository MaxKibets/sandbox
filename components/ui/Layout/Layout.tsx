import { Children, FC } from "react";
import clsx from "clsx";

import { WithChildrenProps } from "@/types/shared";

import css from "./layout.module.css";

const Layout: FC<WithChildrenProps> = ({ children }) => (
  <div className={css.wrap}>
    {Children.map(children, (child, index) => {
      const isMenu = index === 0;
      const Tag = isMenu ? "nav" : "main";

      return <Tag className={clsx(isMenu ? css.menu : css.content)}>{child}</Tag>;
    })}
  </div>
);

export default Layout;
