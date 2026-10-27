"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "./ThemeContext";
import { SmoothScroll } from "./SmoothScroll";
import { Loader } from "../Loader";
import { CustomCursor } from "../CustomCursor";
import { ScrollProgress } from "../ScrollProgress";
import { ScrollToTop } from "../ScrollToTop";
import { FloatingWhatsApp } from "../FloatingWhatsApp";

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider>
      <SmoothScroll>
        <Loader />
        <CustomCursor />
        <ScrollProgress />
        {children}
        <ScrollToTop />
        <FloatingWhatsApp />
      </SmoothScroll>
    </ThemeProvider>
  );
};
