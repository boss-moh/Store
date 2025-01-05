import { ComponentProps, ReactNode } from "react";

export type ChildrenType = ReactNode;
export type childrenProps = { children: ChildrenType };
export type svgProps = ComponentProps<"svg">;
export type divProps = ComponentProps<"div">;

export type categoryType = {
  id: number;
  name: string;
};

export type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: categoryType;
  images: string[];
};
