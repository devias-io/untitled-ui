import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Expand02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 21 21 3M3 21h6m-6 0v-6M21 3h-6m6 0v6"
    />
  </svg>
);
const ForwardRef = forwardRef(Expand02);
const Memo = memo(ForwardRef);
export default Memo;
