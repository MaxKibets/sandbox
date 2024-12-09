import Link from "next/link";
import { LuCodesandbox } from "react-icons/lu";

import css from "./logo.module.css";

const Logo = () => (
  <Link href="/" className={css.logo}>
    <LuCodesandbox size="2rem" />
    <b>SandBox</b>
  </Link>
);

export default Logo;
