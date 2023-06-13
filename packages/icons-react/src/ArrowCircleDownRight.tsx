import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowCircleDownRight = (
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
      d="M14.7002 8.3v5.4m0 0h-5.4m5.4 0-5.4-5.4M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCircleDownRight);
const Memo = memo(ForwardRef);
export default Memo;
