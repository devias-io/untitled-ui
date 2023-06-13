import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Expand01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m14 10 7-7m0 0h-6m6 0v6m-11 5-7 7m0 0h6m-6 0v-6"
    />
  </svg>
);
const ForwardRef = forwardRef(Expand01);
const Memo = memo(ForwardRef);
export default Memo;
