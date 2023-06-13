import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LifeBuoy01 = (
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
      d="M9.4226 9.4227 5.636 5.636m0 12.7279 3.8152-3.8152m5.1238.0286 3.7866 3.7866m0-12.728-3.8157 3.8158M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-5.4 0c0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LifeBuoy01);
const Memo = memo(ForwardRef);
export default Memo;
