import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowRight = (
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
      d="M5 12h14m0 0-7-7m7 7-7 7"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowRight);
const Memo = memo(ForwardRef);
export default Memo;
