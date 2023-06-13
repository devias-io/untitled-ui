import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Map01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.3 16.4 3 20V5.6L9.3 2m0 14.4 6.3 3.6m-6.3-3.6V2m6.3 18 5.4-3.6V2l-5.4 3.6m0 14.4V5.6m0 0L9.3 2"
    />
  </svg>
);
const ForwardRef = forwardRef(Map01);
const Memo = memo(ForwardRef);
export default Memo;
