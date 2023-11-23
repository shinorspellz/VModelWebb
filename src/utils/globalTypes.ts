import React from "react";
import { SVGProps } from "react";

export interface OnlyChild {
  children: React.ReactNode;
}

export interface ActionButton {
  icon: string;
  title: string;
  url: string;
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};
