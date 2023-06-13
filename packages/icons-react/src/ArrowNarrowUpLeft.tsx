import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowNarrowUpLeft = (
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
      d="M18 18 6 6m0 0v8m0-8h8"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowNarrowUpLeft);
const Memo = memo(ForwardRef);
export default Memo;
