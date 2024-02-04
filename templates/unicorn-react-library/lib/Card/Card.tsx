import { ReactNode } from "react";
import css from "./Card.module.css";

type props = Readonly<{
  children: ReactNode | ReactNode[];
}>;

function Card({ children }: props) {
  return <div className={css.container}>{children}</div>;
}

export default Card;
