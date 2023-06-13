import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Expand06 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16 8 5-5m0 0h-5m5 0v5M8 8 3 3m0 0v5m0-5h5m0 13-5 5m0 0h5m-5 0v-5m13 0 5 5m0 0v-5m0 5h-5"
    />
  </svg>
);
const ForwardRef = forwardRef(Expand06);
const Memo = memo(ForwardRef);
export default Memo;
