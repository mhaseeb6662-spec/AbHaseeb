"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { SmoothScroll } from "./SmoothScroll";
import { Loader } from "../Loader";
import { CustomCursor } from "../CustomCursor";
import { ScrollProgress } from "../ScrollProgress";
import { ScrollToTop } from "../ScrollToTop";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        {children}
        <ScrollToTop />
      </SmoothScroll>
    </ThemeProvider>
  );
};
