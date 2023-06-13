import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowUpRight = (
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
      d="M7 17 17 7m0 0H7m10 0v10"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowUpRight);
const Memo = memo(ForwardRef);
export default Memo;
