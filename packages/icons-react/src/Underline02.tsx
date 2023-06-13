import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Underline02 = (
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
      d="M19 4v6c0 3.866-3.134 7-7 7s-7-3.134-7-7V4m3.5 0v6c0 3.2218 2.1766 5.9352 5.1395 6.7501M4 21h16M3 4h7.5M17 4h4"
    />
  </svg>
);
const ForwardRef = forwardRef(Underline02);
const Memo = memo(ForwardRef);
export default Memo;
