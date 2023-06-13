import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowDownLeft = (
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
      d="M17 7 7 17m0 0h10M7 17V7"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowDownLeft);
const Memo = memo(ForwardRef);
export default Memo;
