import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SpacingWidth01 = (
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
      d="M6 12h12M6 12l2-3m-2 3 2 3m10-3-2-3m2 3-2 3m5 6V3M3 21V3"
    />
  </svg>
);
const ForwardRef = forwardRef(SpacingWidth01);
const Memo = memo(ForwardRef);
export default Memo;
