import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Pilcrow02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.5 4v16m2-16H9C6.7909 4 5 5.7909 5 8c0 2.2091 1.7909 4 4 4h5m0-8v16m-2 0h7.5"
    />
  </svg>
);
const ForwardRef = forwardRef(Pilcrow02);
const Memo = memo(ForwardRef);
export default Memo;
