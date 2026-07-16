"use client";

import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";
import { MagneticButton } from "../MagneticButton";

type CommonProps = {
  children: ReactNode;
  className?: string;
};

type AsButton = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type AsAnchor = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type OutlineButtonProps = AsButton | AsAnchor;

const baseClasses = clsx(
  "group relative inline-flex items-center justify-center gap-2 rounded-full",
  "border border-line px-7 py-3.5 text-sm font-mono uppercase tracking-wide text-paper glass",
  "transition-all duration-300 hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
);

export const OutlineButton = (props: OutlineButtonProps) => {
  const { children, className, ...rest } = props;

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <MagneticButton strength={0.2}>
        <a href={href} data-cursor-hover className={clsx(baseClasses, className)} {...anchorRest}>
          {children}
        </a>
      </MagneticButton>
    );
  }

  return (
    <MagneticButton strength={0.2}>
      <button data-cursor-hover className={clsx(baseClasses, className)} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {children}
      </button>
    </MagneticButton>
  );
};
