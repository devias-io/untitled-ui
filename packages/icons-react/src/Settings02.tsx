import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Settings02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m8.76 18.634.526 1.183A1.9907 1.9907 0 0 0 11.1062 21a1.9907 1.9907 0 0 0 1.82-1.183l.526-1.183a2.1827 2.1827 0 0 1 .9-1 2.1898 2.1898 0 0 1 1.323-.281l1.287.137a1.9915 1.9915 0 0 0 1.934-.985 1.989 1.989 0 0 0 .2643-1.1004 1.9894 1.9894 0 0 0-.3783-1.0666l-.762-1.047a2.1864 2.1864 0 0 1-.414-1.291 2.1854 2.1854 0 0 1 .418-1.286l.762-1.047a1.9895 1.9895 0 0 0 .114-2.167 1.9909 1.9909 0 0 0-1.934-.985l-1.287.137a2.19 2.19 0 0 1-1.323-.281 2.1831 2.1831 0 0 1-.9-1.005l-.53-1.183a1.9915 1.9915 0 0 0-3.64 0L8.76 5.366a2.183 2.183 0 0 1-.9 1.005 2.19 2.19 0 0 1-1.323.281l-1.291-.137a1.9911 1.9911 0 0 0-1.934.985 1.99 1.99 0 0 0 .114 2.167l.762 1.047a2.1868 2.1868 0 0 1 0 2.572l-.762 1.047a1.9899 1.9899 0 0 0-.114 2.167 1.9928 1.9928 0 0 0 1.934.985l1.287-.137a2.1898 2.1898 0 0 1 1.323.281c.4.2309.7166.5828.904 1.005Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.1045 14.7c1.4912 0 2.7-1.2088 2.7-2.7s-1.2088-2.7-2.7-2.7-2.7 1.2088-2.7 2.7 1.2088 2.7 2.7 2.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Settings02);
const Memo = memo(ForwardRef);
export default Memo;
