import clsx from "clsx";

import classes from "./index.module.css";

type Props = {
  children: string;
  variant: "primary" | "secondary" | "transparent";
};

export const Button = ({ children, variant }: Props) => {
  return (
    <button
      className={clsx(classes.button, {
        [classes.primary]: variant === "primary",
        [classes.secondary]: variant === "secondary",
        [classes.transparent]: variant === "transparent",
      })}
    >
      {children}
    </button>
  );
};
