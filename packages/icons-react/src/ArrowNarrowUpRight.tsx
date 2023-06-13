import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowNarrowUpRight = (
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
      d="M6 18 18 6m0 0h-8m8 0v8"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowNarrowUpRight);
const Memo = memo(ForwardRef);
export default Memo;
