import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Toggle03Right = (
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
      d="M3 11.4C3 8.4177 5.4177 6 8.4 6h7.2c2.9823 0 5.4 2.4177 5.4 5.4 0 2.9823-2.4177 5.4-5.4 5.4H8.4c-2.9823 0-5.4-2.4177-5.4-5.4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.6 13.65c1.2426 0 2.25-1.0074 2.25-2.25s-1.0074-2.25-2.25-2.25-2.25 1.0074-2.25 2.25 1.0074 2.25 2.25 2.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Toggle03Right);
const Memo = memo(ForwardRef);
export default Memo;
