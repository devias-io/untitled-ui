import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Flag02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M4 14.7s.9-.9 3.6-.9 4.5 1.8 7.2 1.8 3.6-.9 3.6-.9V4.8s-.9.9-3.6.9-4.5-1.8-7.2-1.8-3.6.9-3.6.9M4 21V3"
    />
  </svg>
);
const ForwardRef = forwardRef(Flag02);
const Memo = memo(ForwardRef);
export default Memo;
