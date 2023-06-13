import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowDownRight = (
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
      d="m7 7 10 10m0 0V7m0 10H7"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowDownRight);
const Memo = memo(ForwardRef);
export default Memo;
