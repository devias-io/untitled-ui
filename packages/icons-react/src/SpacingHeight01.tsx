import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SpacingHeight01 = (
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
      d="M12 18V6m0 12-3-2m3 2 3-2M12 6 9 8m3-2 3 2m6-5H3m18 18H3"
    />
  </svg>
);
const ForwardRef = forwardRef(SpacingHeight01);
const Memo = memo(ForwardRef);
export default Memo;
