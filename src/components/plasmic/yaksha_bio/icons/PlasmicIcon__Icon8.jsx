// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 32 32"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.789 28c-3.235 0-6.25-.94-8.789-2.564 2.155.14 5.958-.195 8.324-2.451-3.559-.163-5.164-2.893-5.373-4.059.302.117 1.744.257 2.558-.07-4.093-1.026-4.721-4.619-4.582-5.715.768.537 2.07.723 2.582.676-3.814-2.729-2.442-6.834-1.767-7.72 2.737 3.792 6.84 5.922 11.914 6.04a5.865 5.865 0 01-.146-1.305C16.51 7.61 19.113 5 22.325 5a5.79 5.79 0 014.25 1.853c1.122-.263 2.81-.878 3.634-1.41-.416 1.493-1.71 2.738-2.493 3.2.006.016-.007-.016 0 0 .688-.104 2.549-.462 3.284-.96-.364.838-1.736 2.233-2.862 3.013C28.348 19.938 21.276 28 11.788 28z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Icon8Icon;
/* prettier-ignore-end */
