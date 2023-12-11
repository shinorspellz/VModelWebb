"use client";

import { ThemeProvider, createTheme } from "@mui/material";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const MUIProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: "rgba(79, 60, 59, 1)",
      },
      secondary: {
        main: "rgba(237, 206, 171, 1)",
      },
    },
  });
  return (
    <NextUIProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NextUIProvider>
  );
};

export default MUIProvider;
