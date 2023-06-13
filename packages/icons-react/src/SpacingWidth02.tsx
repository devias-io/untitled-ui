import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SpacingWidth02 = (
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
      d="M21 21V3M3 21V3m3.5 9h11m0 3V9m-11 6V9"
    />
  </svg>
);
const ForwardRef = forwardRef(SpacingWidth02);
const Memo = memo(ForwardRef);
export default Memo;
